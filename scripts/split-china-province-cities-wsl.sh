#!/usr/bin/env bash
set -euo pipefail

ROOT="${1:-$(pwd)}"
PROVINCE_DIR="${2:-$ROOT/downloads/geofabrik-china-provinces-260708}"
OUTPUT_DIR="${3:-$ROOT/downloads/geofabrik-china-cities-260708}"
WORK_DIR="${4:-$ROOT/downloads/city-boundaries-260708}"

need() {
  if ! command -v "$1" >/dev/null 2>&1; then
    echo "Missing required command: $1" >&2
    exit 1
  fi
}

need osmium
need python3

mkdir -p "$OUTPUT_DIR" "$WORK_DIR"

slugify() {
  python3 - "$1" <<'PY'
import re
import sys
value = sys.argv[1].strip().lower()
value = re.sub(r"[^a-z0-9]+", "-", value).strip("-")
print(value or "unnamed")
PY
}

for pbf in "$PROVINCE_DIR"/*-latest.osm.pbf; do
  [ -e "$pbf" ] || continue

  province="$(basename "$pbf" -latest.osm.pbf)"
  province_work="$WORK_DIR/$province"
  province_out="$OUTPUT_DIR/$province"
  mkdir -p "$province_work" "$province_out"

  echo "==> $province"
  admin_pbf="$province_work/admin-boundaries.osm.pbf"
  admin_geojson="$province_work/admin-boundaries.geojson"
  cities_json="$province_work/cities.geojson"

  osmium tags-filter -O "$pbf" r/boundary=administrative -o "$admin_pbf"
  osmium export -O --geometry-types=polygon -f geojson "$admin_pbf" -o "$admin_geojson"

  python3 - "$admin_geojson" "$cities_json" <<'PY'
import json
import sys

src, dst = sys.argv[1:3]
data = json.load(open(src, encoding="utf-8"))
features = []
for feature in data.get("features", []):
    props = feature.get("properties") or {}
    if props.get("boundary") != "administrative":
        continue
    if str(props.get("admin_level")) != "5":
        continue
    geom = feature.get("geometry") or {}
    if geom.get("type") not in ("Polygon", "MultiPolygon"):
        continue
    name = props.get("name") or props.get("name:en")
    if not name:
        continue
    features.append(feature)

json.dump(
    {"type": "FeatureCollection", "features": features},
    open(dst, "w", encoding="utf-8"),
    ensure_ascii=False,
)
print(len(features))
PY

  count="$(python3 - "$cities_json" <<'PY'
import json
import sys
print(len(json.load(open(sys.argv[1], encoding="utf-8")).get("features", [])))
PY
)"

  if [ "$count" = "0" ]; then
    echo "No admin_level=5 city boundaries found for $province; skipping."
    continue
  fi

  python3 - "$cities_json" "$province_work" <<'PY'
import json
import os
import re
import sys

src, out_dir = sys.argv[1:3]
data = json.load(open(src, encoding="utf-8"))
for idx, feature in enumerate(data.get("features", []), 1):
    props = feature.get("properties") or {}
    en = props.get("name:en")
    name = en or props.get("name") or f"city-{idx}"
    slug = re.sub(r"[^a-z0-9]+", "-", name.lower()).strip("-") or f"city-{idx}"
    feature["properties"]["_slug"] = slug
    feature["properties"]["_file"] = f"{slug}.geojson"
    with open(os.path.join(out_dir, f"{slug}.geojson"), "w", encoding="utf-8") as fh:
        json.dump({"type": "FeatureCollection", "features": [feature]}, fh, ensure_ascii=False)

with open(os.path.join(out_dir, "cities.tsv"), "w", encoding="utf-8") as fh:
    for feature in data.get("features", []):
        props = feature.get("properties") or {}
        slug = props["_slug"]
        fh.write(f"{slug}\t{props.get('name','')}\t{props.get('name:en','')}\n")
PY

  while IFS=$'\t' read -r slug name_en _rest; do
    polygon="$province_work/$slug.geojson"
    out="$province_out/$slug-latest.osm.pbf"
    echo "  -> $slug"
    osmium extract -O \
      --polygon "$polygon" \
      --strategy=complete_ways \
      "$pbf" \
      -o "$out"
  done < "$province_work/cities.tsv"
done

find "$OUTPUT_DIR" -name "*-latest.osm.pbf" -print | sort

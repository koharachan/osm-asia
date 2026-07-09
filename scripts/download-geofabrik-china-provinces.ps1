param(
  [string]$OutputDir = "downloads\geofabrik-china-provinces-260708"
)

$ErrorActionPreference = "Stop"

$names = @(
  "anhui",
  "beijing",
  "chongqing",
  "fujian",
  "gansu",
  "guangdong",
  "guangxi",
  "guizhou",
  "hainan",
  "hebei",
  "heilongjiang",
  "henan",
  "hong-kong",
  "hubei",
  "hunan",
  "inner-mongolia",
  "jiangsu",
  "jiangxi",
  "jilin",
  "liaoning",
  "macau",
  "ningxia",
  "qinghai",
  "shaanxi",
  "shandong",
  "shanghai",
  "shanxi",
  "sichuan",
  "tianjin",
  "tibet",
  "xinjiang",
  "yunnan",
  "zhejiang"
)

New-Item -ItemType Directory -Force -Path $OutputDir | Out-Null
$manifest = Join-Path $OutputDir "manifest.txt"
"Source: https://download.geofabrik.de/asia/china.html`nDownloaded: $(Get-Date -Format yyyy-MM-ddTHH:mm:ssK)`nFiles:" |
  Set-Content -LiteralPath $manifest -Encoding UTF8

foreach ($name in $names) {
  $url = "https://download.geofabrik.de/asia/china/$name-latest.osm.pbf"
  $out = Join-Path $OutputDir "$name-latest.osm.pbf"
  Add-Content -LiteralPath $manifest -Encoding UTF8 -Value $url

  Write-Host "Downloading $name"
  & curl.exe -4 `
    --fail `
    --location `
    --retry 10 `
    --retry-delay 5 `
    --connect-timeout 20 `
    --max-time 600 `
    --speed-time 60 `
    --speed-limit 1024 `
    --continue-at - `
    --output $out `
    $url

  if ($LASTEXITCODE -ne 0) {
    throw "Download failed: $url"
  }
}

Get-ChildItem -LiteralPath $OutputDir -Filter "*.osm.pbf" |
  Measure-Object -Property Length -Sum |
  ForEach-Object { "Downloaded files: $($_.Count); bytes: $($_.Sum)" }

<script setup>
import { useI18n } from '../i18n.js'

const { t } = useI18n()

const links = [
  { name: 'GitHub', url: 'https://github.com/koharachan/osm-asia' },
  { name: 'OSM.Asia', url: 'https://osm.asia/' },
  { name: 'OSMChina', url: 'https://osmchina.org/' },
  { name: 'OpenStreetMap', url: 'https://www.openstreetmap.org/' },
  { name: 'Geofabrik', url: 'https://download.geofabrik.de/' },
  { name: 'Planet OSM', url: 'https://planet.openstreetmap.org/' }
]
</script>

<template>
  <section class="mb-4">
    <div class="mb-4 flex items-center justify-between">
      <h3 class="text-lg font-semibold text-gray-950 dark:text-white">{{ t('links.title') }}</h3>
    </div>
    <div class="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
      <a
        v-for="link in links"
        :key="link.name"
        :href="link.url"
        target="_blank"
        rel="noopener noreferrer"
        class="rounded-lg border border-gray-200 bg-white px-4 py-3 text-center text-sm font-medium text-gray-700 shadow-sm transition hover:-translate-y-0.5 hover:border-primary hover:text-primary dark:border-gray-800 dark:bg-gray-900 dark:text-gray-300"
      >
        {{ link.name }}
      </a>
    </div>
  </section>
</template>

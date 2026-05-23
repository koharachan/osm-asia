<script setup>
import { useI18n } from '../i18n.js'

const { t } = useI18n()

const links = [
  { name: 'OSMChina',          url: 'https://osmchina.org/' },
  { name: 'Telegram 亚洲群',    url: 'https://t.me/OpenStreetMapAsia' },
  { name: 'OpenStreetMap 官网', url: 'https://www.openstreetmap.org/' },
  { name: 'Geofabrik 下载站',   url: 'https://download.geofabrik.de/' },
  { name: 'Planet OSM',        url: 'https://planet.openstreetmap.org/' }
]
</script>

<template>
  <section class="rounded-2xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 transition-colors p-6">
    <h3 class="text-lg font-semibold mb-4 text-gray-900 dark:text-gray-100">{{ t('links.title') }}</h3>
    <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
      <a
        v-for="link in links"
        :key="link.name"
        :href="link.url"
        target="_blank"
        rel="noopener noreferrer"
        class="px-4 py-3 rounded-xl bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors text-sm text-center text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary"
      >
        {{ link.name }}
      </a>
    </div>
  </section>
</template>
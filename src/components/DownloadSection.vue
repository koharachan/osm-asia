<script setup>
import { ref, computed } from 'vue'
import { useI18n } from '../i18n.js'

const { t } = useI18n()

const continentKeys = ['all', 'asia', 'oceania', 'america', 'global', 'other']

const activeContinent = ref('all')

const featured = [
  {
    id: 'china',
    title: 'China',
    subtitle: '中国',
    size: '1.2 GB',
    date: '2026-05-22',
    continent: 'asia',
    url: 'https://pan.qzyun.net/f/Y16DiR/china-260522.osm.pbf'
  },
  {
    id: 'australia-oceania',
    title: 'Australia-Oceania',
    subtitle: '澳大利亚 / 大洋洲',
    size: '1.1 GB',
    date: '2026-05-22',
    continent: 'oceania',
    url: 'https://pan.qzyun.net/f/n094Sx/australia-oceania-260522.osm.pbf'
  },
  {
    id: 'planet',
    title: 'Planet PBF',
    subtitle: '全球完整数据包',
    size: '86.23 GB',
    date: '2026-04-27',
    continent: 'global',
    url: 'https://1851405391.share.123pan.cn/123pan/f9Bavd-riPy3'
  }
]

const regions = [
  { id: 'hongkong',      title: 'Hong Kong',       subtitle: '香港',          continent: 'asia',     date: '2026-05-12', url: 'https://pan.qzyun.net/f/g05NFk/hong-kong-260512.osm.pbf' },
  { id: 'newyork',       title: 'New York',         subtitle: '美国纽约州',     continent: 'america',  date: '2026-05-12', url: 'https://pan.qzyun.net/f/lM31iP/new-york-260512.osm.pbf' },
  { id: 'pennsylvania',  title: 'Pennsylvania',     subtitle: '美国宾夕法尼亚州', continent: 'america',  date: '2026-05-12', url: 'https://pan.qzyun.net/f/3z61cm/pennsylvania-260512.osm.pbf' },
  { id: 'canada',        title: 'Canada',           subtitle: '加拿大',         continent: 'america',  date: '2026-05-12', url: 'https://pan.qzyun.net/f/pPvKce/canada-260512.osm.pbf' },
  { id: 'mexico',        title: 'Mexico',           subtitle: '墨西哥',         continent: 'america',  date: '2026-05-12', url: 'https://pan.qzyun.net/f/546DfR/mexico-260512.osm.pbf' },
  { id: 'greenland',     title: 'Greenland',        subtitle: '格陵兰岛',       continent: 'america',  date: '2026-05-12', url: 'https://pan.qzyun.net/f/yNrJTy/greenland-260512.osm.pbf' },
  { id: 'antarctica',    title: 'Antarctica',       subtitle: '南极洲',         continent: 'other',    date: '2026-05-12', url: 'https://pan.qzyun.net/f/wwB5UR/antarctica-260512.osm.pbf' }
]

const filteredFeatured = computed(() => {
  if (activeContinent.value === 'all') return featured
  return featured.filter(f => f.continent === activeContinent.value)
})

const filteredRegions = computed(() => {
  if (activeContinent.value === 'all') return regions
  return regions.filter(r => r.continent === activeContinent.value)
})

const totalCount = computed(() => filteredFeatured.value.length + filteredRegions.value.length)
</script>

<template>
  <section class="mb-12">
    <div class="flex items-center justify-between mb-6">
      <h3 class="text-lg font-semibold text-gray-900 dark:text-gray-100">
        {{ t('download.title') }}
        <span class="ml-2 text-sm font-normal text-gray-400 dark:text-gray-500">{{ totalCount }}{{ t('download.count') }}</span>
      </h3>
    </div>

    <div class="flex gap-1.5 mb-6 flex-wrap">
      <button
        v-for="key in continentKeys"
        :key="key"
        @click="activeContinent = key"
        :class="[
          'px-3.5 py-1.5 rounded-lg text-sm font-medium transition-colors',
          activeContinent === key
            ? 'bg-primary text-white'
            : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
        ]"
      >
        {{ t(`continents.${key}`) }}
      </button>
    </div>

    <div v-if="filteredFeatured.length" class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
      <a
        v-for="item in filteredFeatured"
        :key="item.id"
        :href="item.url"
        target="_blank"
        rel="noopener noreferrer"
        class="rounded-2xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 transition-colors hover:border-primary p-5 group cursor-pointer no-underline"
      >
        <div class="flex items-start justify-between mb-3">
          <div class="min-w-0">
            <h4 class="text-base font-semibold text-gray-900 dark:text-gray-100 truncate">{{ item.title }}</h4>
            <p class="text-sm text-gray-500 dark:text-gray-400">{{ item.subtitle }}</p>
          </div>
          <span class="rounded-md bg-primary/10 text-primary text-xs font-medium px-2.5 py-1 whitespace-nowrap flex-shrink-0 ml-2">{{ item.size }}</span>
        </div>
        <p class="text-xs text-gray-400 dark:text-gray-500 mb-4">{{ t('download.updated') }} {{ item.date }}</p>
        <span class="inline-flex items-center gap-2 px-5 py-2 rounded-xl font-medium text-white bg-primary hover:shadow-lg transition-all text-sm">
          {{ t('download.download') }}
        </span>
      </a>
    </div>

    <div v-if="filteredRegions.length" class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
      <a
        v-for="item in filteredRegions"
        :key="item.id"
        :href="item.url"
        target="_blank"
        rel="noopener noreferrer"
        class="rounded-2xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 transition-colors hover:border-primary p-4 group cursor-pointer no-underline"
      >
        <h4 class="text-sm font-semibold text-gray-900 dark:text-gray-100 mb-0.5">{{ item.title }}</h4>
        <p class="text-xs text-gray-500 dark:text-gray-500 mb-2">{{ item.subtitle }}</p>
        <p class="text-xs text-gray-400 dark:text-gray-600">{{ t('download.updated') }} {{ item.date }}</p>
      </a>
    </div>

    <p v-if="totalCount === 0" class="text-center text-gray-400 dark:text-gray-500 py-12 text-sm">
      {{ t('download.empty') }}
    </p>
  </section>
</template>
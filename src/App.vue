<script setup>
import { ref, onMounted } from 'vue'
import DownloadSection from './components/DownloadSection.vue'
import LinksSection from './components/LinksSection.vue'
import { useI18n } from './i18n.js'

const { t, locale, locales, labels, setLocale } = useI18n()

const isDark = ref(false)
const themeBtn = ref(null)

const applyTheme = (dark) => {
  if (dark) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
  localStorage.setItem('theme', dark ? 'dark' : 'light')
}

onMounted(() => {
  const saved = localStorage.getItem('theme')
  if (saved === 'dark') {
    isDark.value = true
  } else if (saved === 'light') {
    isDark.value = false
  } else {
    isDark.value = window.matchMedia('(prefers-color-scheme: dark)').matches
  }
  applyTheme(isDark.value)
})

const toggleTheme = () => {
  if (themeBtn.value) {
    const rect = themeBtn.value.getBoundingClientRect()
    const cx = rect.left + rect.width / 2
    const cy = rect.top + rect.height / 2
    document.documentElement.style.setProperty('--theme-x', cx + 'px')
    document.documentElement.style.setProperty('--theme-y', cy + 'px')
  }

  if (!document.startViewTransition) {
    isDark.value = !isDark.value
    applyTheme(isDark.value)
    return
  }

  const transition = document.startViewTransition(() => {
    isDark.value = !isDark.value
    applyTheme(isDark.value)
  })
}
</script>

<template>
  <div class="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors">
    <header class="sticky top-0 z-20 border-b border-gray-200/80 bg-white/90 py-4 backdrop-blur dark:border-gray-800/80 dark:bg-gray-950/90">
      <div class="container mx-auto px-4 max-w-6xl flex items-center justify-between">
        <div class="flex items-center gap-3">
          <img src="/logo.jpg" alt="OSM.Asia" class="w-9 h-9 rounded-lg object-cover" />
          <div>
            <h1 class="text-xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
              OSM<span class="text-primary">.Asia</span>
            </h1>
            <p class="text-xs text-gray-500 dark:text-gray-500">{{ t('site.subtitle') }}</p>
          </div>
        </div>

        <div class="flex items-center gap-2">
          <a
            href="https://github.com/koharachan/osm-asia"
            target="_blank"
            rel="noopener noreferrer"
            class="hidden rounded-lg border border-gray-200 px-3 py-1.5 text-xs font-semibold text-gray-600 transition hover:border-primary hover:text-primary dark:border-gray-800 dark:text-gray-300 sm:inline-flex"
          >
            GitHub
          </a>

          <label class="sr-only" for="locale-select">{{ t('language.label') }}</label>
          <select
            id="locale-select"
            :value="locale"
            @change="setLocale($event.target.value)"
            class="h-9 rounded-lg border border-gray-200 bg-gray-100 px-2.5 text-xs font-medium text-gray-700 transition hover:bg-gray-200 dark:border-gray-800 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700"
          >
            <option v-for="key in locales" :key="key" :value="key">
              {{ labels[key] }}
            </option>
          </select>

          <button
            ref="themeBtn"
            @click="toggleTheme"
            :aria-label="isDark ? t('theme.light') : t('theme.dark')"
            class="w-9 h-9 rounded-lg flex items-center justify-center bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
          >
            <svg v-if="isDark" class="w-4 h-4 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <circle cx="12" cy="12" r="5" />
              <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
            </svg>
            <svg v-else class="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
            </svg>
          </button>
        </div>
      </div>
    </header>

    <main class="flex-1 container mx-auto px-4 py-12 max-w-6xl">
      <div class="mb-10 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
        <div>
          <p class="mb-3 text-sm font-semibold text-primary">{{ t('hero.kicker') }}</p>
          <h2 class="max-w-3xl text-3xl font-bold tracking-tight text-gray-950 dark:text-white sm:text-4xl">
            {{ t('hero.title') }}
          </h2>
          <p class="mt-4 max-w-2xl text-base leading-7 text-gray-500 dark:text-gray-400">
            {{ t('hero.desc') }}
          </p>
        </div>

        <div class="grid grid-cols-3 overflow-hidden rounded-lg border border-gray-200 bg-white text-center shadow-sm dark:border-gray-800 dark:bg-gray-900">
          <div class="px-4 py-3">
            <div class="text-lg font-bold text-gray-950 dark:text-white">260708</div>
            <div class="text-xs text-gray-500 dark:text-gray-400">{{ t('hero.stats.latest') }}</div>
          </div>
          <div class="border-x border-gray-200 px-4 py-3 dark:border-gray-800">
            <div class="text-lg font-bold text-gray-950 dark:text-white">PBF</div>
            <div class="text-xs text-gray-500 dark:text-gray-400">{{ t('hero.stats.format') }}</div>
          </div>
          <div class="px-4 py-3">
            <div class="text-lg font-bold text-gray-950 dark:text-white">{{ t('hero.stats.speedValue') }}</div>
            <div class="text-xs text-gray-500 dark:text-gray-400">{{ t('hero.stats.tools') }}</div>
          </div>
        </div>
      </div>

      <div class="flex gap-3 mb-10 flex-wrap">
        <span
          v-for="tag in t('tags')"
          :key="tag"
          class="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 text-gray-600 dark:text-gray-400 shadow-sm"
        >
          {{ tag }}
        </span>
      </div>

      <DownloadSection />
      <LinksSection />
    </main>

    <footer class="py-6 border-t border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-950">
      <div class="container mx-auto px-4 max-w-6xl text-center text-sm text-gray-400 dark:text-gray-500 space-y-1.5">
        <p class="flex items-center justify-center gap-3 flex-wrap">
          <a href="https://github.com/koharachan/osm-asia" target="_blank" rel="noopener noreferrer" class="text-primary hover:underline">GitHub</a>
          <span class="text-gray-300 dark:text-gray-700">|</span>
          <a href="https://www.openstreetmap.org/" target="_blank" rel="noopener noreferrer" class="text-primary hover:underline">openstreetmap.org</a>
          <span class="text-gray-300 dark:text-gray-700">|</span>
          <a href="https://osmchina.org/" target="_blank" rel="noopener noreferrer" class="text-primary hover:underline">osmchina.org</a>
          <span class="text-gray-300 dark:text-gray-700">|</span>
          <a href="https://t.me/OpenStreetMapAsia" target="_blank" rel="noopener noreferrer" class="text-primary hover:underline">Telegram</a>
        </p>
        <p class="text-gray-400 dark:text-gray-600">{{ t('footer.disclaimer') }}</p>
        <p class="text-gray-400 dark:text-gray-600">{{ t('footer.copyright') }}</p>
      </div>
    </footer>
  </div>
</template>

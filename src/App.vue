<script setup>
import { ref, onMounted } from 'vue'
import DownloadSection from './components/DownloadSection.vue'
import LinksSection from './components/LinksSection.vue'
import { useI18n } from './i18n.js'

const { t, currentLabel, cycleLocale } = useI18n()

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
  <div class="min-h-screen flex flex-col bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors">
    <header class="py-5 border-b border-gray-200 dark:border-gray-800">
      <div class="container mx-auto px-4 max-w-4xl flex items-center justify-between">
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
          <button
            @click="cycleLocale"
            class="px-2.5 py-1.5 rounded-lg text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
          >
            {{ currentLabel() }}
          </button>

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

    <main class="flex-1 container mx-auto px-4 py-12 max-w-4xl">
      <div class="text-center mb-12">
        <h2 class="text-2xl font-bold mb-3 text-gray-900 dark:text-gray-100">
          {{ t('hero.title') }}
        </h2>
        <p class="text-gray-500 dark:text-gray-400 max-w-lg mx-auto leading-relaxed">
          {{ t('hero.desc') }}
        </p>
      </div>

      <div class="flex justify-center gap-3 mb-12 flex-wrap">
        <span
          v-for="tag in t('tags')"
          :key="tag"
          class="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400"
        >
          {{ tag }}
        </span>
      </div>

      <DownloadSection />
      <LinksSection />
    </main>

    <footer class="py-6 border-t border-gray-200 dark:border-gray-800">
      <div class="container mx-auto px-4 max-w-4xl text-center text-sm text-gray-400 dark:text-gray-500 space-y-1.5">
        <p class="flex items-center justify-center gap-3 flex-wrap">
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
import { ref } from 'vue'

const locales = ['zh-CN', 'zh-TW', 'ja', 'ko', 'en', 'my', 'eo']

const labels = {
  'zh-CN': '简中',
  'zh-TW': '繁中',
  ja: '日本語',
  ko: '한국어',
  en: 'English',
  my: 'မြန်မာ',
  eo: 'Esperanto'
}

const msgs = {
  'zh-CN': {
    site: { subtitle: 'OpenStreetMap 亚洲镜像下载站' },
    hero: {
      title: '快速、稳定、免费的全球 OSM 数据镜像',
      desc: '提供高速下载线路，完美支持 IDM、FDM 等多线程下载工具'
    },
    tags: ['高速下载', 'IDM / FDM 兼容', '全球数据镜像'],
    theme: { light: '浅色', dark: '深色' },
    download: {
      title: '下载区域',
      count: ' 个',
      download: '下载',
      updated: '更新于',
      empty: '该大洲暂无可用数据'
    },
    continents: {
      all: '全部', asia: '亚洲', oceania: '大洋洲',
      america: '美洲', global: '全球', other: '其他'
    },
    links: { title: '相关链接' },
    footer: { disclaimer: '这不是 OSM 官方网站 · 仅供镜像下载使用' }
  },
  'zh-TW': {
    site: { subtitle: 'OpenStreetMap 亞洲鏡像下載站' },
    hero: {
      title: '快速、穩定、免費的全球 OSM 資料鏡像',
      desc: '提供高速下載線路，完美支援 IDM、FDM 等多線程下載工具'
    },
    tags: ['高速下載', 'IDM / FDM 相容', '全球資料鏡像'],
    theme: { light: '淺色', dark: '深色' },
    download: {
      title: '下載區域',
      count: ' 個',
      download: '下載',
      updated: '更新於',
      empty: '此大洲暫無可用資料'
    },
    continents: {
      all: '全部', asia: '亞洲', oceania: '大洋洲',
      america: '美洲', global: '全球', other: '其他'
    },
    links: { title: '相關連結' },
    footer: { disclaimer: '這不是 OSM 官方網站 · 僅供鏡像下載使用' }
  },
  ja: {
    site: { subtitle: 'OpenStreetMap アジアミラー' },
    hero: {
      title: '高速・安定・無料のグローバル OSM データミラー',
      desc: '高速回線、IDM/FDM マルチスレッド対応'
    },
    tags: ['高速ダウンロード', 'IDM / FDM 対応', 'グローバルデータ'],
    theme: { light: 'ライト', dark: 'ダーク' },
    download: {
      title: 'ダウンロード',
      count: ' 件',
      download: 'ダウンロード',
      updated: '更新日',
      empty: 'この地域のデータはありません'
    },
    continents: {
      all: 'すべて', asia: 'アジア', oceania: 'オセアニア',
      america: 'アメリカ', global: 'グローバル', other: 'その他'
    },
    links: { title: 'リンク' },
    footer: { disclaimer: 'OSM 公式サイトではありません · ミラーダウンロード専用' }
  },
  ko: {
    site: { subtitle: 'OpenStreetMap 아시아 미러' },
    hero: {
      title: '빠르고 안정적인 무료 글로벌 OSM 데이터 미러',
      desc: '고속 다운로드, IDM/FDM 멀티스레드 완벽 지원'
    },
    tags: ['고속 다운로드', 'IDM / FDM 호환', '글로벌 데이터'],
    theme: { light: '라이트', dark: '다크' },
    download: {
      title: '다운로드',
      count: '개',
      download: '다운로드',
      updated: '업데이트',
      empty: '이 대륙의 데이터가 없습니다'
    },
    continents: {
      all: '전체', asia: '아시아', oceania: '오세아니아',
      america: '아메리카', global: '글로벌', other: '기타'
    },
    links: { title: '링크' },
    footer: { disclaimer: 'OSM 공식 웹사이트가 아닙니다 · 미러 다운로드 전용' }
  },
  en: {
    site: { subtitle: 'OpenStreetMap Asia Mirror' },
    hero: {
      title: 'Fast, Stable, Free Global OSM Data Mirror',
      desc: 'High-speed download with full IDM / FDM multi-threading support'
    },
    tags: ['High Speed', 'IDM / FDM Compatible', 'Global Data Mirror'],
    theme: { light: 'Light', dark: 'Dark' },
    download: {
      title: 'Downloads',
      count: ' regions',
      download: 'Download',
      updated: 'Updated',
      empty: 'No data available for this continent'
    },
    continents: {
      all: 'All', asia: 'Asia', oceania: 'Oceania',
      america: 'Americas', global: 'Global', other: 'Other'
    },
    links: { title: 'Links' },
    footer: { disclaimer: 'Not an official OSM website · Mirror downloads only' }
  },
  my: {
    site: { subtitle: 'OpenStreetMap အာရှ မိတ္တူ' },
    hero: {
      title: 'မြန်ဆန်၊ တည်ငြိမ်၊ အခမဲ့ OSM ဒေတာမိတ္တူ',
      desc: 'မြန်နှုန်းမြင့် ဒေါင်းလုဒ်၊ IDM/FDM ပံ့ပိုးမှု'
    },
    tags: ['မြန်နှုန်းမြင့်', 'IDM / FDM', 'ကမ္ဘာလုံးဆိုင်ရာ'],
    theme: { light: 'အလင်း', dark: 'အမှောင်' },
    download: {
      title: 'ဒေါင်းလုဒ်များ',
      count: ' ခု',
      download: 'ဒေါင်းလုဒ်',
      updated: 'နောက်ဆုံးမွမ်းမံ',
      empty: 'ဤတိုက်အတွက် ဒေတာမရှိပါ'
    },
    continents: {
      all: 'အားလုံး', asia: 'အာရှ', oceania: 'အိုရှန်းနီးယား',
      america: 'အမေရိက', global: 'ကမ္ဘာလုံး', other: 'အခြား'
    },
    links: { title: 'လင့်ခ်များ' },
    footer: { disclaimer: 'OSM တရားဝင်ဝက်ဘ်ဆိုက်မဟုတ်ပါ · မိတ္တူဒေါင်းလုဒ်အတွက်သာ' }
  },
  eo: {
    site: { subtitle: 'OpenStreetMap Azia Spegulo' },
    hero: {
      title: 'Rapida, Stabila, Senpaga Tutmonda OSM-Datumo Spegulo',
      desc: 'Altrapida elŝuto, plena subteno de IDM / FDM'
    },
    tags: ['Altrapida', 'IDM / FDM', 'Tutmonda Datumo'],
    theme: { light: 'Hela', dark: 'Malhela' },
    download: {
      title: 'Elŝutoj',
      count: ' regionoj',
      download: 'Elŝuti',
      updated: 'Ĝisdatigita',
      empty: 'Neniu datumo por ĉi tiu kontinento'
    },
    continents: {
      all: 'Ĉiuj', asia: 'Azio', oceania: 'Oceanio',
      america: 'Ameriko', global: 'Tutmonda', other: 'Aliaj'
    },
    links: { title: 'Ligiloj' },
    footer: { disclaimer: 'Ne oficiala OSM retejo · Nur spegula elŝuto' }
  }
}

function detectLocale() {
  const saved = localStorage.getItem('locale')
  if (saved && locales.includes(saved)) return saved

  const browser = navigator.language || ''
  if (browser.startsWith('zh')) {
    return browser === 'zh-TW' || browser === 'zh-HK' || browser === 'zh-MO' ? 'zh-TW' : 'zh-CN'
  }
  if (browser.startsWith('ja')) return 'ja'
  if (browser.startsWith('ko')) return 'ko'
  if (browser.startsWith('my')) return 'my'
  if (browser.startsWith('eo')) return 'eo'
  return 'en'
}

const locale = ref(detectLocale())

export function useI18n() {
  const t = (path) => {
    const keys = path.split('.')
    let result = msgs[locale.value] || msgs['en']
    for (const key of keys) {
      if (result == null) return path
      result = result[key]
    }
    return result ?? path
  }

  const currentLabel = () => labels[locale.value]

  const cycleLocale = () => {
    const idx = locales.indexOf(locale.value)
    const next = (idx + 1) % locales.length
    locale.value = locales[next]
    localStorage.setItem('locale', locale.value)
  }

  return { t, locale, currentLabel, cycleLocale, labels }
}
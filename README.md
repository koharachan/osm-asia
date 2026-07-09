# OSM.Asia

OpenStreetMap 镜像下载站，提供快速、稳定的全球 OSM 数据镜像。

站点：https://osm.asia/
仓库：https://github.com/koharachan/osm-asia

## 技术栈

- **Vue 3** — Composition API
- **Vite** 6 — 构建工具
- **Tailwind CSS** 3 — 原子化 CSS
- **View Transition API** — 主题切换圆形扩散动画

## 功能

- 按大洲筛选 / 地区下载 OSM PBF 数据
- 最新版本优先展示，并保留历史版本下载入口
- 支持 IDM、FDM 等多线程下载工具
- 暗色 / 浅色主题切换（带 View Transition 动画）
- 8 语言 i18n（简繁中、日、韩、英、德、缅、世界语）
- 浏览器语言自动检测

## 本地运行

```bash
npm install
npm run dev
```

## 构建

```bash
npm run build
```

产物在 `dist/` 目录，可直接部署到任意静态服务器。

## 许可

MIT License

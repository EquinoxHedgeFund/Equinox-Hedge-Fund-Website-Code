# Equinox Hedge Fund Website

Equinox Hedge Fund 官方网站 —— 大学生主导的量化投资研究团队。

## 技术栈

- [Vue 3](https://vuejs.org/) + Composition API (`<script setup>`)
- [Vite](https://vite.dev/) 构建工具

## 快速开始

### 环境要求

- Node.js 18+
- npm

### 安装依赖

```bash
npm install
```

### 启动开发服务器

```bash
npm run dev
```

启动后浏览器访问终端中显示的地址（默认 `http://localhost:5173`），支持热更新。

### 构建生产版本

```bash
npm run build
```

构建产物输出到 `dist/` 目录。

### 本地预览构建结果

```bash
npm run preview
```

## 项目结构

```
src/
├── main.js              # 应用入口
├── App.vue              # 根组件
├── assets/
│   └── main.css         # 全局样式 & CSS 变量
├── components/
│   ├── NavBar.vue       # 导航栏
│   ├── HeroSection.vue  # 首屏
│   ├── OverviewSection.vue
│   ├── MissionSection.vue
│   ├── ServicesSection.vue
│   ├── CtaSection.vue
│   └── FooterComponent.vue
├── composables/
│   ├── useScroll.js     # 滚动监听
│   └── useMobileMenu.js # 移动端菜单
└── directives/
    └── fadeIn.js        # 滚动淡入动画指令
```

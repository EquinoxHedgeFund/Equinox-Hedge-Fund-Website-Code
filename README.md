# Equinox Hedge Fund Website

Equinox Hedge Fund 官方网站 —— 学生主导的量化投资研究团队，聚焦大中华区。

## 技术栈

- **前端**: [Vue 3](https://vuejs.org/) + Composition API (`<script setup>`) + [Vite](https://vite.dev/)
- **路由**: [Vue Router 5](https://router.vuejs.org/)
- **国际化**: [Vue I18n 9](https://vue-i18n.intlify.dev/)（中/英双语切换）
- **图表**: [Chart.js 4](https://www.chartjs.org/) + [vue-chartjs 5](https://vue-chartjs.org/)
- **CMS**: [Strapi v4](https://strapi.io/)（无头 CMS，管理研报、团队、业绩等动态内容）
- **数据库**: SQLite（开发环境）

## 页面

| 路由 | 页面 | 说明 |
|------|------|------|
| `/` | 首页 | Hero banner、双引擎策略介绍、最新研报、业绩快照、合作伙伴 |
| `/macro` | Macro Research | 宏观研报列表，支持分类筛选（利率·宏观 / 权益·ETF / 商品·外汇） |
| `/macro/:id` | 研报详情 | 展示研报全文内容，支持中英双语 |
| `/quant` | Quantitative Strategy | 业绩指标卡片、净值曲线图表、双引擎策略说明、月度更新日志 |
| `/about` | About Us | 基金简介、团队成员、合作伙伴、联系方式 |
| `/:pathMatch(.*)*` | 404 页面 | 友好的 404 提示，引导返回首页 |

## 快速开始

### 环境要求

- Node.js 20+（前端开发可用其他版本，Strapi 需要 Node 20）
- npm

### 1. 安装前端依赖

```bash
npm install
```

### 2. 启动前端开发服务器

```bash
npm run dev
```

启动后访问 `http://localhost:5173`（如端口被占用会自动切换）。

> 前端有 fallback 机制：即使不启动 Strapi，网站也能正常运行，显示静态 mock 数据。

### 3. 启动 Strapi CMS（可选）

```bash
cd cms
npm install
npm run develop
```

启动后访问 `http://localhost:1337/admin`，首次打开需要注册管理员账号。

### Strapi 登录与内容管理

1. 浏览器打开 `http://localhost:1337/admin`
2. 使用注册的管理员账号登录
3. 在左侧 **Content Manager** 中管理内容：
   - **Report** — 宏观研报（支持中英双语字段：`title`/`titleEn`、`summary`/`summaryEn`、`content`/`contentEn`）
   - **Team Member** — 团队成员（支持头像上传、中英双语职位和学校）
   - **NAV History** — 月度净值数据
   - **Monthly Update** — 月度更新日志
   - **Performance Metric** — 业绩目标指标（累计收益率、年化收益率、夏普比率、最大回撤）
4. 添加/编辑内容后，点击 **Publish** 发布（未发布的内容不会在前端显示）

### 开启 API 读取权限

首次使用需要在 Strapi 后台配置 Public 角色的读取权限：

1. 左侧栏 **Settings** → **Users & Permissions plugin** → **Roles** → **Public**
2. 勾选 Report、Team Member、NAV History、Monthly Update、Performance Metric 的 `find` 和 `findOne`
3. 点击 **Save**

### 构建生产版本

```bash
npm run build
```

构建产物输出到 `dist/` 目录。

## 项目结构

```
src/
├── main.js                    # 应用入口
├── App.vue                    # 根组件（NavBar + router-view + Footer）
├── api/
│   └── strapi.js              # Strapi API 客户端（axios）
├── assets/
│   └── main.css               # 全局样式 & CSS 变量
├── components/
│   ├── NavBar.vue             # 顶部导航栏（含中英切换、移动端菜单）
│   └── FooterComponent.vue    # 页脚
├── composables/
│   ├── useReports.js          # 研报数据获取（含单篇详情获取）
│   ├── useTeam.js             # 团队成员数据获取
│   ├── useMetrics.js          # 业绩指标数据获取
│   ├── useNavHistory.js       # 净值历史数据获取
│   ├── useMonthlyUpdates.js   # 月度更新数据获取
│   └── useScrollReveal.js     # 滚动渐入动画
├── data/
│   ├── reports.js             # 静态 mock 研报数据（fallback，含内容全文）
│   ├── metrics.js             # 静态 mock 业绩数据（fallback）
│   └── team.js                # 静态 mock 团队数据（fallback）
├── locales/
│   ├── index.js               # i18n 配置（默认英文，localStorage 持久化）
│   ├── en.js                  # 英文翻译
│   └── zh.js                  # 中文翻译
├── router/
│   └── index.js               # 路由配置（含 SEO meta 标签、404 catch-all）
└── views/
    ├── HomePage.vue           # 首页
    ├── MacroPage.vue          # 宏观研报页
    ├── ReportDetailPage.vue   # 研报详情页
    ├── QuantPage.vue          # 量化策略页
    ├── AboutPage.vue          # 关于我们页
    └── NotFoundPage.vue       # 404 页面

cms/                            # Strapi CMS 后端
├── config/                     # Strapi 配置（数据库、服务器、权限）
├── public/uploads/             # 上传文件（头像、图片等）
└── src/api/                    # Content Type 定义
    ├── report/                 # 研报
    ├── team-member/            # 团队成员
    ├── nav-history/            # 净值历史
    ├── monthly-update/         # 月度更新
    └── performance-metric/     # 业绩目标指标（singleType）
```

## 功能特性

### SEO 优化

每个页面通过路由 `meta` 字段配置独立的 `<title>` 和 `<meta description>`：

- 首页：`Equinox Hedge Fund`
- 宏观研报：`Macro Research — Equinox`
- 量化策略：`Quantitative Strategy — Equinox`
- 关于我们：`About Us — Equinox`
- 404 页面：`404 — Equinox`

### 研报详情页

点击研报卡片可进入详情页（`/macro/:id`），展示完整的研报内容。支持从 Strapi 获取或使用静态 fallback 数据。

### 404 页面

未匹配的路由会展示友好的 404 页面，提供返回首页的链接，支持中英双语。

### 数据回退机制

所有数据 composable 都遵循 Strapi 优先 + 静态数据回退策略，即使 CMS 未运行网站也能正常展示完整内容。

## 设计风格

- 背景：暖灰白 `#F4F2EF` / 纯白 `#FFFFFF`（交替）
- 文字：墨黑 `#111111`
- 字体：Inter + Noto Sans SC
- 无阴影、无渐变、hover 过渡动画
- 滚动渐入效果（Intersection Observer）

import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import MacroPage from '../views/MacroPage.vue'
import QuantPage from '../views/QuantPage.vue'
import AboutPage from '../views/AboutPage.vue'
import ReportDetailPage from '../views/ReportDetailPage.vue'
import NotFoundPage from '../views/NotFoundPage.vue'

const routes = [
  { path: '/', component: HomePage, meta: { title: 'Equinox Hedge Fund', description: 'Student-led hedge fund focused on Greater China' } },
  { path: '/macro', component: MacroPage, meta: { title: 'Macro Research — Equinox', description: 'Weekly macro research reports on global markets, rates, ETFs, commodities and FX' } },
  { path: '/macro/:id', component: ReportDetailPage, meta: { title: 'Report — Equinox' } },
  { path: '/quant', component: QuantPage, meta: { title: 'Quantitative Strategy — Equinox', description: 'Live NAV performance, systematic alpha strategies and monthly updates' } },
  { path: '/about', component: AboutPage, meta: { title: 'About Us — Equinox', description: 'Team, partners and contact information' } },
  { path: '/:pathMatch(.*)*', component: NotFoundPage, meta: { title: '404 — Equinox' } },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  },
})

router.beforeEach((to) => {
  document.title = to.meta.title || 'Equinox Hedge Fund'
  const description = to.meta.description
  let meta = document.querySelector('meta[name="description"]')
  if (description) {
    if (!meta) {
      meta = document.createElement('meta')
      meta.setAttribute('name', 'description')
      document.head.appendChild(meta)
    }
    meta.setAttribute('content', description)
  } else if (meta) {
    meta.remove()
  }
})

export default router

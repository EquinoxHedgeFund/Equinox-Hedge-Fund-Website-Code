import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/', component: () => import('../views/HomePage.vue'), meta: { title: 'Equinox Hedge Fund', description: 'Student-led hedge fund focused on Greater China' } },
  { path: '/macro', component: () => import('../views/MacroPage.vue'), meta: { title: 'Macro Research — Equinox', description: 'Weekly macro research reports on global markets, rates, ETFs, commodities and FX' } },
  { path: '/macro/:id', component: () => import('../views/ReportDetailPage.vue'), meta: { title: 'Report — Equinox' } },
  { path: '/quant', component: () => import('../views/QuantPage.vue'), meta: { title: 'Quantitative Strategy — Equinox', description: 'Live NAV performance, systematic alpha strategies and monthly updates' } },
  { path: '/about', component: () => import('../views/AboutPage.vue'), meta: { title: 'About Us — Equinox', description: 'Team, partners and contact information' } },
  { path: '/:pathMatch(.*)*', component: () => import('../views/NotFoundPage.vue'), meta: { title: '404 — Equinox' } },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  },
})

function setMeta(attr, key, content) {
  let el = document.querySelector(`meta[${attr}="${key}"]`)
  if (content) {
    if (!el) {
      el = document.createElement('meta')
      el.setAttribute(attr, key)
      document.head.appendChild(el)
    }
    el.setAttribute('content', content)
  } else if (el) {
    el.remove()
  }
}

router.beforeEach((to) => {
  const title = to.meta.title || 'Equinox Hedge Fund'
  const description = to.meta.description || ''
  document.title = title
  setMeta('name', 'description', description)
  setMeta('property', 'og:title', title)
  setMeta('property', 'og:description', description)
  setMeta('property', 'og:type', 'website')
})

export default router

import { ref } from 'vue'
import strapi, { unwrapCollection } from '../api/strapi'
import { navHistory as fallbackNav } from '../data/metrics'

export function useNavHistory() {
  const navHistory = ref([])
  const loading = ref(true)
  const error = ref(null)

  async function fetchNavHistory() {
    try {
      loading.value = true
      const res = await strapi.get('/nav-histories?sort=month:asc')
      const items = unwrapCollection(res)
      if (items.length > 0) {
        navHistory.value = items.map((item) => ({
          month: item.month || '',
          nav: Number(item.nav) || 0,
          monthlyReturn: Number(item.monthlyReturn) || 0,
          cumulativeReturn: Number(item.cumulativeReturn) || 0,
        }))
      } else {
        navHistory.value = fallbackNav
      }
    } catch (e) {
      error.value = e
      navHistory.value = fallbackNav
    } finally {
      loading.value = false
    }
  }

  fetchNavHistory()

  return { navHistory, loading, error }
}

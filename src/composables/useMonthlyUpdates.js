import { ref } from 'vue'
import strapi, { unwrapCollection } from '../api/strapi'
import { monthlyUpdates as fallbackUpdates } from '../data/metrics'

export function useMonthlyUpdates() {
  const monthlyUpdates = ref([])
  const loading = ref(true)
  const error = ref(null)

  async function fetchMonthlyUpdates() {
    try {
      loading.value = true
      const res = await strapi.get('/monthly-updates?sort=month:desc')
      const items = unwrapCollection(res)
      if (items.length > 0) {
        monthlyUpdates.value = items.map((item) => ({
          month: item.month || '',
          nav: item.nav || '',
          comment: item.comment || '',
          commentEn: item.commentEn || item.comment || '',
        }))
      } else {
        monthlyUpdates.value = fallbackUpdates
      }
    } catch (e) {
      error.value = e
      monthlyUpdates.value = fallbackUpdates
    } finally {
      loading.value = false
    }
  }

  fetchMonthlyUpdates()

  return { monthlyUpdates, loading, error }
}

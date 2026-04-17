import { ref } from 'vue'
import strapi, { unwrapCollection } from '../api/strapi'
import { reports as fallbackReports } from '../data/reports'

export function useReports() {
  const reports = ref([])
  const loading = ref(true)
  const error = ref(null)

  async function fetchReports() {
    try {
      loading.value = true
      const res = await strapi.get('/reports?sort=date:desc&populate=*')
      const items = unwrapCollection(res)
      if (items.length > 0) {
        reports.value = items.map((item) => ({
          id: item.id,
          title: item.title || '',
          titleEn: item.titleEn || item.title || '',
          date: item.date || '',
          category: item.category || '',
          author: item.author || '',
          summary: item.summary || '',
          summaryEn: item.summaryEn || item.summary || '',
          content: item.content || '',
          contentEn: item.contentEn || item.content || '',
        }))
      } else {
        reports.value = fallbackReports
      }
    } catch (e) {
      error.value = e
      reports.value = fallbackReports
    } finally {
      loading.value = false
    }
  }

  fetchReports()

  async function fetchReportById(id) {
    const cached = reports.value.find(r => r.id === Number(id))
    if (cached && cached.content) return cached

    try {
      const res = await strapi.get(`/reports/${id}?populate=*`)
      const item = unwrapSingle(res)
      if (item) {
        return {
          id: item.id,
          title: item.title || '',
          titleEn: item.titleEn || item.title || '',
          date: item.date || '',
          category: item.category || '',
          author: item.author || '',
          summary: item.summary || '',
          summaryEn: item.summaryEn || item.summary || '',
          content: item.content || '',
          contentEn: item.contentEn || item.content || '',
        }
      }
    } catch (e) {
      // ignore, fall through to static fallback
    }

    return fallbackReports.find(r => r.id === Number(id)) || null
  }

  return { reports, loading, error, fetchReportById }
}

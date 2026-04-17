import { ref } from 'vue'
import strapi, { unwrapSingle } from '../api/strapi'
import { metrics as fallbackMetrics } from '../data/metrics'

export function useMetrics() {
  const metrics = ref(null)
  const loading = ref(true)
  const error = ref(null)

  async function fetchMetrics() {
    try {
      loading.value = true
      const res = await strapi.get('/performance-metric')
      const item = unwrapSingle(res)
      if (item && item.cumulativeReturn) {
        metrics.value = {
          cumulativeReturn: {
            label: '累计收益率',
            value: item.cumulativeReturn,
            status: 'positive',
          },
          annualReturn: {
            label: '年化收益率 (ANR)',
            value: item.annualReturn,
            status: 'target',
            display: 'ANR 目标',
          },
          sharpeRatio: {
            label: '夏普比率 (SR)',
            value: item.sharpeRatio,
            status: 'target',
            display: 'SR 目标',
          },
          maxDrawdown: {
            label: '最大回撤 (MDD)',
            value: item.maxDrawdown,
            status: 'target',
            display: 'MDD 限制',
          },
        }
      } else {
        metrics.value = fallbackMetrics
      }
    } catch (e) {
      error.value = e
      metrics.value = fallbackMetrics
    } finally {
      loading.value = false
    }
  }

  fetchMetrics()

  return { metrics, loading, error }
}

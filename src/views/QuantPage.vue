<script setup>
import { ref, onMounted, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { Line } from 'vue-chartjs'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Filler,
} from 'chart.js'
import { useMetrics } from '../composables/useMetrics'
import { useNavHistory } from '../composables/useNavHistory'
import { useMonthlyUpdates } from '../composables/useMonthlyUpdates'
import { useScrollReveal } from '../composables/useScrollReveal'

const { t, locale } = useI18n()
useScrollReveal()

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Filler)

const { metrics } = useMetrics()
const { navHistory } = useNavHistory()
const { monthlyUpdates } = useMonthlyUpdates()

const metricCards = computed(() => {
  if (!metrics.value) return []
  return [
    { ...metrics.value.cumulativeReturn },
    { ...metrics.value.annualReturn },
    { ...metrics.value.sharpeRatio },
    { ...metrics.value.maxDrawdown },
  ]
})

const chartData = computed(() => ({
  labels: navHistory.value.map(d => d.month),
  datasets: [
    {
      label: 'NAV',
      data: navHistory.value.map(d => d.nav),
      borderColor: '#111111',
      backgroundColor: 'rgba(17,17,17,0.05)',
      fill: true,
      tension: 0.3,
      pointRadius: 3,
      pointBackgroundColor: '#111111',
      borderWidth: 1.5,
    },
  ],
}))

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: { display: false },
    tooltip: {
      backgroundColor: '#111111',
      titleFont: { family: 'Inter', size: 12 },
      bodyFont: { family: 'Inter', size: 12 },
      padding: 10,
      cornerRadius: 6,
    },
  },
  scales: {
    x: {
      grid: { display: false },
      ticks: { font: { family: 'Inter', size: 11 }, color: '#777' },
      border: { display: false },
    },
    y: {
      grid: { color: '#E8E5E0' },
      ticks: { font: { family: 'Inter', size: 11 }, color: '#777' },
      border: { display: false },
    },
  },
}

const engines = computed(() => [
  {
    title: t('quant.engine1Title'),
    points: [t('quant.engine1P1'), t('quant.engine1P2'), t('quant.engine1P3')],
  },
  {
    title: t('quant.engine2Title'),
    points: [t('quant.engine2P1'), t('quant.engine2P2'), t('quant.engine2P3')],
  },
])

const chartReady = ref(false)
onMounted(() => { chartReady.value = true })
</script>

<template>
  <div class="page-banner">
    <img src="/hero-finance.jpg" alt="Quantitative Strategy" loading="lazy">
    <div class="page-banner-overlay"></div>
    <div class="page-banner-content">
      <h1>{{ t('quant.title') }}</h1>
      <p>{{ t('quant.description') }}</p>
    </div>
  </div>

  <!-- Metric Cards -->
  <section class="section-alt metrics-section reveal">
    <div class="container">
      <div class="metrics-grid">
        <div v-for="m in metricCards" :key="m.label" class="metric-card">
          <span class="metric-label">{{ m.label }}</span>
          <span class="metric-value" :class="m.status === 'positive' ? 'positive' : ''">{{ m.value }}</span>
          <span class="metric-badge" :class="m.status">{{ m.status === 'target' ? t('quant.target') : t('quant.reached') }}</span>
        </div>
      </div>
      <p class="metrics-timestamp">{{ t('quant.asOf') }}</p>
    </div>
  </section>

  <!-- NAV Chart -->
  <section class="section-block reveal">
    <div class="container">
      <h2 class="section-title">{{ t('quant.navCurve') }}</h2>
      <div class="chart-container">
        <Line v-if="chartReady" :data="chartData" :options="chartOptions" />
      </div>

      <div class="returns-table-wrap">
        <table class="returns-table">
          <thead>
            <tr>
              <th>{{ t('quant.month') }}</th>
              <th>{{ t('quant.monthlyReturn') }}</th>
              <th>{{ t('quant.cumulativeReturn') }}</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="d in navHistory" :key="d.month">
              <td>{{ d.month }}</td>
              <td>{{ d.monthlyReturn > 0 ? '+' : '' }}{{ d.monthlyReturn }}%</td>
              <td>{{ d.cumulativeReturn > 0 ? '+' : '' }}{{ d.cumulativeReturn }}%</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>

  <!-- Strategy -->
  <section class="section-alt strategy-section reveal">
    <div class="container">
      <h2 class="section-title">{{ t('quant.strategy') }}</h2>
      <div class="strategy-grid">
        <div v-for="engine in engines" :key="engine.title" class="strategy-card">
          <h3>{{ engine.title }}</h3>
          <ul>
            <li v-for="point in engine.points" :key="point">{{ point }}</li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  <!-- Monthly Updates -->
  <section class="section-block reveal">
    <div class="container">
      <h2 class="section-title">{{ t('quant.monthlyLog') }}</h2>
      <div class="update-list">
        <div v-for="update in monthlyUpdates" :key="update.month" class="update-item">
          <div class="update-meta">
            <span class="update-month">{{ update.month }}</span>
            <span class="update-nav">{{ t('quant.nav') }} {{ update.nav }}</span>
          </div>
          <p>{{ update.comment }}</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Risk Disclosure -->
  <section class="section-alt disclosure reveal">
    <div class="container">
      <p>{{ t('quant.disclosure') }}</p>
    </div>
  </section>
</template>

<style scoped>
.metrics-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}

.metric-card {
  text-align: center;
  padding: 28px 16px;
  background: var(--color-bg);
  border: 0.5px solid var(--color-border);
  border-radius: 10px;
}

.metric-label {
  display: block;
  font-size: 0.65rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--color-text-muted);
  margin-bottom: 10px;
}

.metric-value {
  display: block;
  font-size: 1.6rem;
  font-weight: 600;
  letter-spacing: -0.02em;
  margin-bottom: 6px;
}

.metric-value.positive {
  color: var(--color-positive);
}

.metric-badge {
  display: inline-block;
  font-size: 0.6rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  padding: 2px 10px;
  border-radius: 20px;
  background: var(--color-tag-bg);
  color: var(--color-text-muted);
}

.metric-badge.positive {
  background: rgba(45, 90, 48, 0.1);
  color: var(--color-positive);
}

.metrics-timestamp {
  text-align: center;
  font-size: 0.75rem;
  color: var(--color-text-muted);
  margin-top: 16px;
}

.chart-container {
  height: 320px;
  margin-bottom: 40px;
  background: var(--color-bg-white);
  border: 0.5px solid var(--color-border);
  border-radius: 10px;
  padding: 20px;
}

.returns-table-wrap {
  overflow-x: auto;
}

.returns-table {
  width: 100%;
  max-width: 600px;
  border-collapse: collapse;
  font-size: 0.85rem;
}

.returns-table th {
  text-align: left;
  font-size: 0.7rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--color-text-muted);
  padding: 10px 16px;
  border-bottom: 0.5px solid var(--color-border);
}

.returns-table td {
  padding: 10px 16px;
  border-bottom: 0.5px solid var(--color-border);
}

.strategy-section {
}

.strategy-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
}

.strategy-card {
  background: var(--color-bg);
  border: 0.5px solid var(--color-border);
  border-radius: 10px;
  padding: 32px;
}

.strategy-card h3 {
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 16px;
}

.strategy-card li {
  font-size: 0.9rem;
  color: var(--color-text-muted);
  line-height: 1.6;
  padding: 4px 0;
  padding-left: 16px;
  position: relative;
}

.strategy-card li::before {
  content: '—';
  position: absolute;
  left: 0;
  color: var(--color-text-muted);
}

.update-list {
  display: flex;
  flex-direction: column;
  gap: 0;
}

.update-item {
  padding: 20px 0;
  border-bottom: 0.5px solid var(--color-border);
}

.update-item:first-child {
  padding-top: 0;
}

.update-meta {
  display: flex;
  gap: 16px;
  margin-bottom: 8px;
}

.update-month {
  font-size: 0.85rem;
  font-weight: 600;
}

.update-nav {
  font-size: 0.8rem;
  color: var(--color-text-muted);
  font-family: 'Inter', monospace;
}

.update-item p {
  font-size: 0.9rem;
  color: var(--color-text-muted);
  line-height: 1.6;
}

.disclosure {
  padding: 40px 0;
  text-align: center;
}

.disclosure p {
  font-size: 0.75rem;
  color: var(--color-text-muted);
  max-width: 640px;
  margin: 0 auto;
  line-height: 1.6;
}

@media (max-width: 968px) {
  .metrics-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .strategy-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 480px) {
  .metrics-grid {
    grid-template-columns: 1fr;
  }
}
</style>

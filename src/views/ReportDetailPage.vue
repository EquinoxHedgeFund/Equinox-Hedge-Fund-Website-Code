<script setup>
import { ref, onMounted, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { useReports } from '../composables/useReports'
import { useScrollReveal } from '../composables/useScrollReveal'

const route = useRoute()
const router = useRouter()
const { locale } = useI18n()
useScrollReveal()

const { fetchReportById } = useReports()
const report = ref(null)

const displayTitle = computed(() =>
  report.value ? (locale.value === 'en' ? (report.value.titleEn || report.value.title) : report.value.title) : ''
)

const displayContent = computed(() =>
  report.value ? (locale.value === 'en' ? (report.value.contentEn || report.value.content) : report.value.content) : ''
)

const displaySummary = computed(() =>
  report.value ? (locale.value === 'en' ? (report.value.summaryEn || report.value.summary) : report.value.summary) : ''
)

onMounted(async () => {
  report.value = await fetchReportById(route.params.id)
})
</script>

<template>
  <div v-if="report" class="report-detail">
    <div class="page-banner">
      <img src="/hero-finance.jpg" alt="Report">
      <div class="page-banner-overlay"></div>
      <div class="page-banner-content">
        <span class="report-tag">{{ report.category }}</span>
        <h1>{{ displayTitle }}</h1>
        <p class="report-meta">{{ report.date }} · {{ report.author }}</p>
      </div>
    </div>

    <section class="section-block reveal">
      <div class="container">
        <div class="report-body">
          <p class="report-summary">{{ displaySummary }}</p>
          <div class="report-content" v-html="displayContent"></div>
        </div>
        <div class="back-link">
          <router-link to="/macro">&larr; {{ locale === 'en' ? 'Back to Macro Research' : '返回宏观研报' }}</router-link>
        </div>
      </div>
    </section>
  </div>

  <div v-else class="not-found-state">
    <div class="container">
      <p>{{ locale === 'en' ? 'Report not found.' : '未找到该报告。' }}</p>
      <router-link to="/macro" class="btn">{{ locale === 'en' ? 'Back to Macro Research' : '返回宏观研报' }}</router-link>
    </div>
  </div>
</template>

<style scoped>
.report-detail .page-banner-content {
  max-width: 800px;
}

.report-tag {
  display: inline-block;
  font-size: 0.7rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  background: rgba(255,255,255,0.2);
  color: #FFFFFF;
  padding: 3px 12px;
  border-radius: 20px;
  margin-bottom: 16px;
}

.report-meta {
  font-size: 0.85rem;
  opacity: 0.7;
  margin-top: 8px;
}

.report-body {
  max-width: 760px;
}

.report-summary {
  font-size: 1.05rem;
  line-height: 1.8;
  color: var(--color-text-muted);
  margin-bottom: 32px;
  padding-bottom: 32px;
  border-bottom: 0.5px solid var(--color-border);
}

.report-content {
  font-size: 0.95rem;
  line-height: 1.8;
  color: var(--color-text);
}

.report-content :deep(h2) {
  font-size: 1.3rem;
  font-weight: 600;
  margin: 32px 0 16px;
  letter-spacing: -0.01em;
}

.report-content :deep(h3) {
  font-size: 1.1rem;
  font-weight: 600;
  margin: 24px 0 12px;
}

.report-content :deep(p) {
  margin-bottom: 16px;
  color: var(--color-text-muted);
}

.report-content :deep(ul),
.report-content :deep(ol) {
  margin-bottom: 16px;
  padding-left: 24px;
}

.report-content :deep(li) {
  margin-bottom: 8px;
  color: var(--color-text-muted);
  line-height: 1.6;
}

.report-content :deep(table) {
  width: 100%;
  border-collapse: collapse;
  margin: 16px 0;
  font-size: 0.85rem;
}

.report-content :deep(th),
.report-content :deep(td) {
  padding: 10px 16px;
  border-bottom: 0.5px solid var(--color-border);
  text-align: left;
}

.report-content :deep(th) {
  font-size: 0.7rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--color-text-muted);
}

.report-content :deep(strong) {
  font-weight: 600;
  color: var(--color-text);
}

.back-link {
  margin-top: 48px;
  padding-top: 24px;
  border-top: 0.5px solid var(--color-border);
}

.back-link a {
  font-size: 0.9rem;
  color: var(--color-text-muted);
}

.back-link a:hover {
  color: var(--color-text);
}

.not-found-state {
  text-align: center;
  padding: 120px 0;
}

.not-found-state p {
  font-size: 1.1rem;
  color: var(--color-text-muted);
  margin-bottom: 24px;
}
</style>

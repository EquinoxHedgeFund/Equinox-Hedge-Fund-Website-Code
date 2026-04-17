<script setup>
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useReports } from '../composables/useReports'
import { useScrollReveal } from '../composables/useScrollReveal'

const { t, locale } = useI18n()
useScrollReveal()
const { reports } = useReports()

const categories = computed(() => [
  t('macro.all'),
  '利率·宏观',
  '权益·ETF',
  '商品·外汇',
])

const activeCategory = ref(t('macro.all'))

const filteredReports = computed(() => {
  if (activeCategory.value === t('macro.all')) return reports.value
  return reports.value.filter(r => r.category === activeCategory.value)
})
</script>

<template>
  <div class="page-banner">
    <img src="/hero-finance.jpg" alt="Macro Research">
    <div class="page-banner-overlay"></div>
    <div class="page-banner-content">
      <h1>{{ t('macro.title') }}</h1>
      <p>{{ t('macro.description') }}</p>
    </div>
  </div>

  <section class="section-alt reveal">
    <div class="container">
      <div class="category-bar">
        <button
          v-for="cat in categories"
          :key="cat"
          class="category-btn"
          :class="{ active: activeCategory === cat }"
          @click="activeCategory = cat"
        >
          {{ cat }}
        </button>
      </div>

      <div class="report-grid">
        <div v-for="report in filteredReports" :key="report.id" class="report-card">
          <div class="report-card-top">
            <span class="report-tag">{{ report.category }}</span>
            <span class="report-date">{{ report.date }}</span>
          </div>
          <h3>{{ locale === 'en' ? (report.titleEn || report.title) : report.title }}</h3>
          <p class="report-author">{{ report.author }}</p>
          <p class="report-summary">{{ locale === 'en' ? (report.summaryEn || report.summary) : report.summary }}</p>
          <router-link :to="`/macro/${report.id}`" class="btn">{{ t('macro.readReport') }}</router-link>
        </div>
      </div>

      <div v-if="filteredReports.length === 0" class="empty-state">
        <p>{{ t('macro.empty') }}</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.category-bar {
  display: flex;
  gap: 8px;
  margin-bottom: 40px;
  flex-wrap: wrap;
}

.category-btn {
  padding: 6px 18px;
  border: 0.5px solid var(--color-border);
  border-radius: 20px;
  background: transparent;
  font-family: var(--font-sans);
  font-size: 0.8rem;
  color: var(--color-text-muted);
  cursor: pointer;
  transition: all var(--transition);
}

.category-btn:hover {
  background: var(--color-tag-bg);
}

.category-btn.active {
  background: var(--color-text);
  color: var(--color-bg);
  border-color: var(--color-text);
}

.report-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.report-card {
  background: var(--color-bg);
  border: 0.5px solid var(--color-border);
  border-radius: 10px;
  padding: 28px 24px;
  display: flex;
  flex-direction: column;
}

.report-card-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 14px;
}

.report-tag {
  font-size: 0.7rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  background: var(--color-tag-bg);
  color: var(--color-text-strong);
  padding: 3px 10px;
  border-radius: 20px;
}

.report-date {
  font-size: 0.75rem;
  color: var(--color-text-muted);
}

.report-card h3 {
  font-size: 1.05rem;
  font-weight: 600;
  line-height: 1.4;
  margin-bottom: 8px;
}

.report-author {
  font-size: 0.8rem;
  color: var(--color-text-muted);
  margin-bottom: 12px;
}

.report-summary {
  font-size: 0.9rem;
  color: var(--color-text-muted);
  line-height: 1.6;
  flex: 1;
  margin-bottom: 20px;
}

.report-card .btn {
  align-self: flex-start;
  font-size: 0.85rem;
  padding: 8px 24px;
}

.empty-state {
  text-align: center;
  padding: 60px 0;
  color: var(--color-text-muted);
}

@media (max-width: 968px) {
  .report-grid {
    grid-template-columns: 1fr;
  }
}
</style>

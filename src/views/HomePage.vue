<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useReports } from '../composables/useReports'
import { useMetrics } from '../composables/useMetrics'
import { useScrollReveal } from '../composables/useScrollReveal'

const { t, locale } = useI18n()
useScrollReveal()
const { reports, loading: reportsLoading } = useReports()
const { metrics, loading: metricsLoading } = useMetrics()

const latestReports = computed(() => reports.value.slice(0, 3))
const snapshotMetrics = computed(() => {
  if (!metrics.value) return []
  return [
    { ...metrics.value.annualReturn },
    { ...metrics.value.sharpeRatio },
    { ...metrics.value.maxDrawdown },
  ]
})
</script>

<template>
  <!-- Hero Banner -->
  <section class="page-banner">
    <img src="/hero-finance.jpg" alt="Equinox">
    <div class="page-banner-overlay"></div>
    <div class="page-banner-content">
      <img src="/logo.jpg" alt="Equinox" class="hero-logo">
      <h1>Equinox Hedge Fund</h1>
      <p>{{ t('home.heroSubtitle') }}</p>
      <p class="hero-tagline">{{ t('home.heroTagline') }}</p>
      <div class="hero-cta">
        <router-link to="/macro" class="btn btn-hero">{{ t('home.ctaMacro') }}</router-link>
        <router-link to="/quant" class="btn btn-hero btn-hero-primary">{{ t('home.ctaQuant') }}</router-link>
      </div>
    </div>
  </section>

  <!-- Three-column Features -->
  <section class="features section-alt reveal">
    <div class="container">
      <div class="features-grid">
        <div class="feature-card reveal-delay-1">
          <div class="feature-icon">⟐</div>
          <h3>{{ t('home.feature1Title') }}</h3>
          <p>{{ t('home.feature1Desc') }}</p>
        </div>
        <div class="feature-card reveal-delay-2">
          <div class="feature-icon">◈</div>
          <h3>{{ t('home.feature2Title') }}</h3>
          <p>{{ t('home.feature2Desc') }}</p>
        </div>
        <div class="feature-card reveal-delay-3">
          <div class="feature-icon">⬡</div>
          <h3>{{ t('home.feature3Title') }}</h3>
          <p>{{ t('home.feature3Desc') }}</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Latest Reports -->
  <section class="section-block reveal">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">{{ t('home.latestReports') }}</h2>
        <router-link to="/macro" class="view-all">{{ t('home.viewAll') }}</router-link>
      </div>
      <div v-if="reportsLoading" class="report-grid">
        <div v-for="i in 3" :key="i" class="skeleton-card">
          <div class="skeleton skeleton-tag"></div>
          <div class="skeleton skeleton-title"></div>
          <div class="skeleton skeleton-text"></div>
          <div class="skeleton skeleton-text short"></div>
        </div>
      </div>
      <div v-else class="report-grid">
        <div v-for="report in latestReports" :key="report.id" class="report-card">
          <span class="report-tag">{{ report.category }}</span>
          <h3>{{ locale === 'en' ? (report.titleEn || report.title) : report.title }}</h3>
          <p class="report-date">{{ report.date }}</p>
          <p class="report-summary">{{ locale === 'en' ? (report.summaryEn || report.summary) : report.summary }}</p>
          <router-link :to="`/macro/${report.id}`" class="report-link">{{ t('home.readMore') }}</router-link>
        </div>
      </div>
    </div>
  </section>

  <!-- Performance Snapshot -->
  <section class="section-alt reveal">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">{{ t('home.performance') }}</h2>
        <router-link to="/quant" class="view-all">{{ t('home.viewFullPerformance') }}</router-link>
      </div>
      <div v-if="metricsLoading" class="snapshot-grid">
        <div v-for="i in 3" :key="i" class="skeleton-card center">
          <div class="skeleton skeleton-label"></div>
          <div class="skeleton skeleton-value"></div>
        </div>
      </div>
      <div v-else class="snapshot-grid">
        <div v-for="m in snapshotMetrics" :key="m.label" class="snapshot-card">
          <span class="snapshot-label">{{ m.display || m.label }}</span>
          <span class="snapshot-value">{{ m.value }}</span>
          <span class="snapshot-badge">{{ t('home.target') }}</span>
        </div>
      </div>
    </div>
  </section>

  <!-- Partnership -->
  <section class="section-block partnership reveal">
    <div class="container">
      <div class="partnership-content">
        <img src="/logo.jpg" alt="Equinox" class="partnership-logo-img">
        <h2 class="partnership-heading">{{ t('home.partnershipTitle') }}</h2>
        <p class="partnership-desc">{{ t('home.partnershipDesc') }}</p>
        <router-link to="/about" class="btn btn-primary">{{ t('home.partnershipCta') }}</router-link>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero-logo {
  width: 64px;
  height: 64px;
  border-radius: 10px;
  object-fit: cover;
  margin-bottom: 20px;
}

.hero-tagline {
  font-size: 0.9rem;
  opacity: 0.7;
  margin-top: 4px;
  margin-bottom: 28px;
}

.hero-cta {
  display: flex;
  gap: 16px;
  justify-content: center;
  flex-wrap: wrap;
}

.btn-hero {
  display: inline-block;
  padding: 12px 32px;
  background: rgba(255,255,255,0.15);
  border: 0.5px solid rgba(255,255,255,0.4);
  border-radius: 6px;
  color: #FFFFFF;
  font-family: var(--font-sans);
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  transition: background var(--transition);
}

.btn-hero:hover {
  background: rgba(255,255,255,0.25);
}

.btn-hero-primary {
  background: #FFFFFF;
  color: #111111;
  border-color: #FFFFFF;
}

.btn-hero-primary:hover {
  background: #F4F2EF;
}

.features {
  border: none;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
}

.feature-card {
  text-align: center;
  padding: 24px;
}

.feature-icon {
  font-size: 1.6rem;
  margin-bottom: 16px;
  color: var(--color-text-muted);
}

.feature-card h3 {
  font-size: 1.05rem;
  font-weight: 600;
  margin-bottom: 8px;
  letter-spacing: -0.01em;
}

.feature-card p {
  font-size: 0.9rem;
  color: var(--color-text-muted);
  line-height: 1.6;
}

.section-header {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 32px;
}

.view-all {
  font-size: 0.85rem;
  color: var(--color-text-muted);
}

.view-all:hover {
  color: var(--color-text);
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

.report-tag {
  display: inline-block;
  font-size: 0.7rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  background: var(--color-tag-bg);
  color: var(--color-text-strong);
  padding: 3px 10px;
  border-radius: 20px;
  margin-bottom: 14px;
  align-self: flex-start;
}

.report-card h3 {
  font-size: 1rem;
  font-weight: 600;
  line-height: 1.4;
  margin-bottom: 8px;
}

.report-date {
  font-size: 0.8rem;
  color: var(--color-text-muted);
  margin-bottom: 12px;
}

.report-summary {
  font-size: 0.9rem;
  color: var(--color-text-muted);
  line-height: 1.6;
  flex: 1;
  margin-bottom: 16px;
}

.report-link {
  font-size: 0.85rem;
  color: var(--color-text);
  font-weight: 500;
}

.report-link:hover {
  color: var(--color-text-muted);
}

.snapshot-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.snapshot-card {
  text-align: center;
  padding: 32px 24px;
  border: 0.5px solid var(--color-border);
  border-radius: 10px;
  background: var(--color-bg);
}

.snapshot-label {
  display: block;
  font-size: 0.7rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--color-text-muted);
  margin-bottom: 12px;
}

.snapshot-value {
  display: block;
  font-size: 2rem;
  font-weight: 600;
  letter-spacing: -0.02em;
  margin-bottom: 8px;
}

.snapshot-badge {
  display: inline-block;
  font-size: 0.65rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  background: var(--color-tag-bg);
  color: var(--color-text-muted);
  padding: 2px 10px;
  border-radius: 20px;
}

.partnership {
  text-align: center;
}

.partnership-content {
  max-width: 560px;
  margin: 0 auto;
}

.partnership-logo-img {
  width: 64px;
  height: 64px;
  border-radius: 12px;
  object-fit: cover;
  margin-bottom: 28px;
}

.partnership-heading {
  font-size: 1.4rem;
  font-weight: 600;
  letter-spacing: -0.02em;
  margin-bottom: 16px;
}

.partnership-desc {
  font-size: 0.95rem;
  color: var(--color-text-muted);
  line-height: 1.7;
  margin-bottom: 32px;
}

@media (max-width: 968px) {
  .features-grid,
  .report-grid,
  .snapshot-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }
}

@media (max-width: 768px) {
  .section-header {
    flex-direction: column;
    gap: 8px;
    align-items: flex-start;
  }
}

/* Skeleton loading */
.skeleton-card {
  background: var(--color-bg);
  border: 0.5px solid var(--color-border);
  border-radius: 10px;
  padding: 28px 24px;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.skeleton-card.center {
  text-align: center;
  align-items: center;
  padding: 32px 24px;
}

.skeleton {
  background: var(--color-tag-bg);
  border-radius: 4px;
  animation: shimmer 1.5s ease infinite;
}

.skeleton-tag { width: 60px; height: 16px; }
.skeleton-title { width: 80%; height: 18px; }
.skeleton-text { width: 100%; height: 14px; }
.skeleton-text.short { width: 60%; }
.skeleton-label { width: 70px; height: 12px; }
.skeleton-value { width: 60px; height: 28px; }

@keyframes shimmer {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.4; }
}
</style>

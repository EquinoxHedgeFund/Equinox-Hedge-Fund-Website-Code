<template>
  <section id="services" class="section section-light">
    <div class="container">
      <h2 v-fade-in class="section-title">What We Do</h2>
      <div class="services-grid">
        <div v-for="(service, index) in services" :key="index" v-fade-in class="service-card">
          <div class="service-icon" v-html="service.icon"></div>
          <h3>{{ service.title }}</h3>
          <p>{{ service.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const services = [
  {
    title: '量化研究',
    description: '我们深入研究市场微观结构与价格行为，通过统计分析与机器学习方法挖掘潜在的交易因子，构建系统化的研究框架。',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <path d="M9 17H5a2 2 0 01-2-2V5a2 2 0 012-2h14a2 2 0 012 2v10a2 2 0 01-2 2h-4"/>
      <path d="M12 15l-3 6h6l-3-6z"/>
    </svg>`
  },
  {
    title: '策略开发',
    description: '从因子挖掘到策略回测，我们系统性地开发与验证交易策略。涵盖 CTA、统计套利、高频交易等多个方向，追求稳健的风险调整收益。',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <path d="M4 5a1 1 0 011-1h4a1 1 0 011 1v5a1 1 0 01-1 1H5a1 1 0 01-1-1V5z"/>
      <path d="M14 5a1 1 0 011-1h4a1 1 0 011 1v2a1 1 0 01-1 1h-4a1 1 0 01-1-1V5z"/>
      <path d="M4 15a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1v-4z"/>
      <path d="M14 12a1 1 0 011-1h4a1 1 0 011 1v7a1 1 0 01-1 1h-4a1 1 0 01-1-1v-7z"/>
    </svg>`
  },
  {
    title: '市场分析',
    description: '我们追踪全球宏观经济动态与市场事件，结合量化模型分析跨市场关联，产出深度市场分析报告，帮助理解金融市场的宏观趋势。',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/>
      <path d="M2 12h20"/>
      <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10A15.3 15.3 0 0112 2z"/>
    </svg>`
  }
]
</script>

<style scoped>
.section {
  padding: 100px 0;
}

.section-light {
  background-color: var(--color-bg);
}

.section-title {
  font-size: clamp(1.8rem, 4vw, 2.5rem);
  font-weight: 600;
  letter-spacing: -0.02em;
  margin-bottom: 60px;
  position: relative;
}

.section-title::after {
  content: '';
  display: block;
  width: 40px;
  height: 3px;
  background: var(--color-accent);
  margin-top: 16px;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
}

.service-card {
  padding: 40px 32px;
  border: 1px solid var(--color-border);
  border-radius: 12px;
  transition: all var(--transition);
  background: #fff;
}

.service-card:hover {
  border-color: var(--color-accent);
  box-shadow: 0 8px 30px rgba(37, 99, 235, 0.08);
  transform: translateY(-4px);
}

.service-icon {
  width: 48px;
  height: 48px;
  margin-bottom: 24px;
  color: var(--color-accent);
}

.service-card h3 {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 12px;
  letter-spacing: -0.01em;
}

.service-card p {
  color: #666;
  font-size: 0.95rem;
  line-height: 1.7;
}

@media (max-width: 968px) {
  .services-grid {
    grid-template-columns: 1fr;
    gap: 24px;
  }

  .section {
    padding: 80px 0;
  }
}

@media (max-width: 768px) {
  .section {
    padding: 60px 0;
  }

  .section-title {
    margin-bottom: 40px;
  }
}

@media (max-width: 480px) {
  .service-card {
    padding: 28px 24px;
  }
}
</style>

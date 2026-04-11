<template>
  <section id="mission" class="section section-dark">
    <div class="container">
      <h2 v-fade-in class="section-title">Our Mission</h2>
      <ul class="mission-list">
        <li v-for="(item, index) in missions" :key="index" v-fade-in>
          <span class="mission-marker">{{ item.marker }}</span>
          <span>{{ item.text }}</span>
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup>
const missions = [
  {
    marker: '01',
    text: '坚持严谨的研究态度，在所有工作中追求卓越品质与数据准确性。'
  },
  {
    marker: '02',
    text: '产出原创的、基于实证的量化研究洞察，探索市场规律与交易机会。'
  },
  {
    marker: '03',
    text: '赋能学生掌握量化分析的核心技能、专业知识与行业视野。'
  },
  {
    marker: '04',
    text: '建立一个覆盖量化投资、对冲基金、券商研究所等领域的顶尖校友网络。'
  }
]
</script>

<style scoped>
.section {
  padding: 100px 0;
}

.section-dark {
  background-color: var(--color-bg-dark);
  color: var(--color-text-white);
}

.section-title {
  font-size: clamp(1.8rem, 4vw, 2.5rem);
  font-weight: 600;
  letter-spacing: -0.02em;
  margin-bottom: 60px;
  position: relative;
  color: #fff;
}

.section-title::after {
  content: '';
  display: block;
  width: 40px;
  height: 3px;
  background: rgba(255, 255, 255, 0.3);
  margin-top: 16px;
}

.mission-list {
  max-width: 700px;
}

.mission-list li {
  display: flex;
  align-items: flex-start;
  gap: 20px;
  padding: 24px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  font-size: 1.05rem;
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.7;
}

.mission-list li:last-child {
  border-bottom: none;
}

.mission-marker {
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--color-accent);
  min-width: 28px;
  padding-top: 4px;
  letter-spacing: 0.05em;
}

@media (max-width: 968px) {
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
  .mission-list li {
    gap: 14px;
    font-size: 0.95rem;
  }
}
</style>

<template>
  <section id="overview" class="section section-light">
    <div class="container">
      <h2 v-fade-in class="section-title">Overview</h2>
      <div class="overview-content">
        <div v-fade-in class="overview-text">
          <p>
            Equinox Hedge Fund 是一个由大学生创立并运营的量化投资研究团队。我们的目标是为大学生提供接触量化金融的第一手实践经验，通过对市场数据的深度分析和量化策略的研究，产出高质量的研究报告与交易策略。
          </p>
          <p>
            随着团队的不断发展，我们致力于建立一个涵盖量化交易各个领域的综合性知识库，从因子挖掘到策略回测，从风险管理到实盘模拟，帮助团队成员深入理解金融市场的运行规律。
          </p>
        </div>
        <div class="overview-image">
          <div v-fade-in class="image-placeholder">
            <div class="placeholder-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <path d="M3 3v18h18"/>
                <path d="M7 16l4-4 4 4 5-5"/>
                <circle cx="17" cy="8" r="1.5" fill="currentColor"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

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

.overview-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
}

.overview-text p {
  margin-bottom: 20px;
  font-size: 1.05rem;
  color: #555;
  line-height: 1.8;
}

.overview-text p:last-child {
  margin-bottom: 0;
}

.image-placeholder {
  width: 100%;
  aspect-ratio: 4 / 3;
  background: linear-gradient(135deg, #f0f4ff 0%, #e8eeff 100%);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--color-border);
}

.placeholder-icon {
  width: 80px;
  height: 80px;
  color: var(--color-accent);
  opacity: 0.4;
}

@media (max-width: 968px) {
  .overview-content {
    grid-template-columns: 1fr;
    gap: 40px;
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
</style>

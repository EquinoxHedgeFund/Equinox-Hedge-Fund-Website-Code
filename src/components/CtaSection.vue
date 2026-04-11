<template>
  <section id="apply" class="section section-cta">
    <div class="container">
      <div v-fade-in class="cta-content">
        <div class="cta-logo">
          <img src="/logo.jpg" alt="Equinox Hedge Fund" class="cta-logo-img">
        </div>
        <h2>Join Us</h2>
        <p>
          我们正在招募对量化投资充满热情的同学加入 2025/26 学年团队。如果你对金融市场、数据分析与量化交易感兴趣，欢迎通过以下方式联系我们。期待与你相见！
        </p>
        <a href="mailto:contact@equinoxhf.com" class="cta-button">申请加入</a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.section {
  padding: 100px 0;
}

.section-cta {
  background:
    linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
  color: #fff;
  text-align: center;
  position: relative;
  overflow: hidden;
}

.section-cta::before {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(ellipse at 50% 50%, rgba(37, 99, 235, 0.12) 0%, transparent 60%);
}

.cta-content {
  position: relative;
  z-index: 1;
  max-width: 600px;
  margin: 0 auto;
}

.cta-logo {
  margin-bottom: 24px;
}

.cta-logo-img {
  width: 64px;
  height: 64px;
  border-radius: 10px;
  object-fit: cover;
  margin: 0 auto;
  opacity: 0.6;
}

.cta-content h2 {
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 700;
  margin-bottom: 20px;
  letter-spacing: -0.02em;
}

.cta-content p {
  color: rgba(255, 255, 255, 0.7);
  font-size: 1.05rem;
  line-height: 1.8;
  margin-bottom: 36px;
}

.cta-button {
  display: inline-block;
  padding: 14px 40px;
  background: #fff;
  color: #0f172a;
  font-size: 0.95rem;
  font-weight: 600;
  border-radius: 6px;
  letter-spacing: 0.02em;
  transition: all var(--transition);
}

.cta-button:hover {
  background: var(--color-accent);
  color: #fff;
  transform: translateY(-2px);
  box-shadow: 0 4px 20px rgba(37, 99, 235, 0.3);
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
}
</style>

<template>
  <section class="hero">
    <div class="hero-overlay"></div>
    <div class="hero-content">
      <div class="hero-logo">
        <img src="/logo.jpg" alt="Equinox Hedge Fund" class="hero-logo-img">
      </div>
      <p class="hero-tagline">大学生主导的量化投资研究 | 用数据驱动金融市场洞察</p>
    </div>
    <div class="scroll-indicator">
      <span></span>
    </div>
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  height: 100vh;
  min-height: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
  background:
    linear-gradient(135deg, #0f172a 0%, #1e293b 40%, #0f172a 100%);
  overflow: hidden;
}

.hero::before {
  content: '';
  position: absolute;
  inset: 0;
  background:
    repeating-linear-gradient(
      0deg,
      transparent,
      transparent 2px,
      rgba(255, 255, 255, 0.015) 2px,
      rgba(255, 255, 255, 0.015) 4px
    );
  pointer-events: none;
}

.hero-overlay {
  position: absolute;
  inset: 0;
  background: radial-gradient(ellipse at 30% 50%, rgba(37, 99, 235, 0.15) 0%, transparent 60%),
              radial-gradient(ellipse at 70% 60%, rgba(6, 182, 212, 0.1) 0%, transparent 50%);
}

.hero-content {
  position: relative;
  z-index: 2;
  text-align: center;
  padding: 0 24px;
}

.hero-logo {
  margin-bottom: 32px;
}

.hero-logo-img {
  width: 120px;
  height: 120px;
  border-radius: 16px;
  object-fit: cover;
  margin: 0 auto;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
}

.hero-tagline {
  font-size: clamp(0.95rem, 2vw, 1.2rem);
  color: rgba(255, 255, 255, 0.65);
  font-weight: 300;
  letter-spacing: 0.04em;
  max-width: 600px;
  margin: 0 auto;
}

.scroll-indicator {
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
}

.scroll-indicator span {
  display: block;
  width: 1px;
  height: 40px;
  background: linear-gradient(to bottom, rgba(255, 255, 255, 0.4), transparent);
  animation: scrollPulse 2s ease-in-out infinite;
}

@keyframes scrollPulse {
  0%, 100% { opacity: 0.4; transform: scaleY(0.6); }
  50% { opacity: 1; transform: scaleY(1); }
}

@media (max-width: 480px) {
  .hero-tagline {
    font-size: 0.9rem;
  }
}
</style>

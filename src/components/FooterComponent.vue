<script setup>
const navLinks = [
  { href: '#overview', label: '关于我们' },
  { href: '#mission', label: '使命愿景' },
  { href: '#services', label: '研究方向' },
  { href: '#apply', label: '加入我们' },
]
</script>

<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-brand">
          <span class="footer-logo">
            <img src="/logo.jpg" alt="Equinox Hedge Fund" class="footer-logo-img">
            Equinox Hedge Fund
          </span>
          <p>大学生主导的量化投资研究团队</p>
        </div>
        <div class="footer-links">
          <a v-for="link in navLinks" :key="link.href" :href="link.href">{{ link.label }}</a>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; 2025 Equinox Hedge Fund. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background: var(--color-bg-dark);
  color: rgba(255, 255, 255, 0.5);
  padding: 60px 0 30px;
}

.footer-content {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding-bottom: 40px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}

.footer-logo {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 1.1rem;
  font-weight: 700;
  color: #fff;
  margin-bottom: 8px;
}

.footer-logo-img {
  width: 30px;
  height: 30px;
  border-radius: 5px;
  object-fit: cover;
}

.footer-brand p {
  font-size: 0.85rem;
}

.footer-links {
  display: flex;
  gap: 28px;
}

.footer-links a {
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.5);
  transition: color var(--transition);
}

.footer-links a:hover {
  color: #fff;
}

.footer-bottom {
  padding-top: 24px;
  text-align: center;
  font-size: 0.8rem;
}

@media (max-width: 768px) {
  .footer-content {
    flex-direction: column;
    gap: 24px;
  }

  .footer-links {
    flex-wrap: wrap;
    gap: 16px;
  }
}
</style>

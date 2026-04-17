<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>

<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-main">
        <router-link to="/" class="footer-brand">
          <img src="/logo.jpg" alt="Equinox" class="footer-logo-img">
          <span>Equinox Hedge Fund</span>
        </router-link>
        <p class="footer-desc">Student-Led Hedge Fund · Greater China</p>
        <a href="mailto:equinox_hf@outlook.com" class="footer-email">equinox_hf@outlook.com</a>
      </div>
      <div class="footer-bottom">
        <p>{{ t('footer.copyright') }}</p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  border-top: 0.5px solid var(--color-border);
  padding: 48px 0 24px;
}

.footer-main {
  text-align: center;
  padding-bottom: 32px;
  border-bottom: 0.5px solid var(--color-border);
}

.footer-brand {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 8px;
  color: var(--color-text);
  font-size: 1.1rem;
  font-weight: 600;
  letter-spacing: -0.01em;
}

.footer-logo-img {
  width: 28px;
  height: 28px;
  border-radius: 4px;
  object-fit: cover;
}

.footer-desc {
  font-size: 0.8rem;
  color: var(--color-text-muted);
  margin-bottom: 24px;
}

.footer-email {
  display: inline-block;
  font-size: 0.85rem;
  color: var(--color-text-muted);
  letter-spacing: 0.01em;
}

.footer-email:hover {
  color: var(--color-text);
}

.footer-bottom {
  padding-top: 20px;
  text-align: center;
  font-size: 0.75rem;
  color: var(--color-text-muted);
}

@media (max-width: 768px) {
  .footer-nav {
    flex-wrap: wrap;
    gap: 16px;
  }
}
</style>

<script setup>
import { useI18n } from 'vue-i18n'
import { useScrollReveal } from '../composables/useScrollReveal'

const { locale } = useI18n()
useScrollReveal()
</script>

<template>
  <div class="not-found">
    <div class="container">
      <h1>404</h1>
      <p>{{ locale === 'en' ? 'The page you are looking for does not exist.' : '您访问的页面不存在。' }}</p>
      <router-link to="/" class="btn">{{ locale === 'en' ? 'Back to Home' : '返回首页' }}</router-link>
    </div>
  </div>
</template>

<style scoped>
.not-found {
  text-align: center;
  padding: 160px 0;
}

.not-found h1 {
  font-size: 4rem;
  font-weight: 600;
  letter-spacing: -0.03em;
  margin-bottom: 16px;
  color: var(--color-text);
}

.not-found p {
  font-size: 1.05rem;
  color: var(--color-text-muted);
  margin-bottom: 32px;
}
</style>

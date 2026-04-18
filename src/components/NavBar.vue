<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'

const { t, locale } = useI18n()
const route = useRoute()
const isOpen = ref(false)

const navLinks = [
  { path: '/', labelKey: 'nav.home' },
  { path: '/macro', labelKey: 'nav.macro' },
  { path: '/quant', labelKey: 'nav.quant' },
  { path: '/about', labelKey: 'nav.about' },
]

function toggle() { isOpen.value = !isOpen.value }
function close() { isOpen.value = false }

function switchLang() {
  locale.value = locale.value === 'zh' ? 'en' : 'zh'
  localStorage.setItem('lang', locale.value)
}
</script>

<template>
  <nav class="navbar">
    <div class="nav-container">
      <router-link to="/" class="nav-logo" @click="close">
        <img src="/logo.jpg" alt="Equinox" class="nav-logo-img">
        <span>Equinox Hedge Fund</span>
      </router-link>
      <ul class="nav-links" :class="{ active: isOpen }">
        <li v-for="link in navLinks" :key="link.path">
          <router-link :to="link.path" :class="{ active: route.path === link.path }" @click="close">
            {{ t(link.labelKey) }}
          </router-link>
        </li>
        <li class="lang-switch-desktop">
          <button class="lang-btn" :aria-label="locale === 'zh' ? 'Switch to English' : '切换至中文'" @click="switchLang">{{ locale === 'zh' ? 'EN' : '中' }}</button>
        </li>
      </ul>
      <div class="nav-right-mobile">
        <button class="lang-btn" :aria-label="locale === 'zh' ? 'Switch to English' : '切换至中文'" @click="switchLang">{{ locale === 'zh' ? 'EN' : '中' }}</button>
        <button class="nav-toggle" :class="{ active: isOpen }" aria-label="菜单" @click="toggle">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  background: var(--color-bg);
  border-bottom: 0.5px solid var(--color-border);
}

.nav-container {
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 0 24px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.nav-logo {
  display: flex;
  align-items: center;
  gap: 10px;
  color: var(--color-text);
}

.nav-logo-img {
  width: 32px;
  height: 32px;
  border-radius: 4px;
  object-fit: cover;
}

.nav-logo span {
  font-size: 1rem;
  font-weight: 600;
  letter-spacing: -0.01em;
}

.nav-links {
  display: flex;
  gap: 32px;
  align-items: center;
}

.nav-links a {
  font-size: 0.85rem;
  font-weight: 500;
  color: var(--color-text-muted);
  letter-spacing: 0.02em;
  transition: color var(--transition);
}

.nav-links a:hover,
.nav-links a.active {
  color: var(--color-text);
}

.lang-btn {
  font-family: var(--font-sans);
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.05em;
  padding: 4px 12px;
  border: 0.5px solid var(--color-border);
  border-radius: 4px;
  background: transparent;
  cursor: pointer;
  color: var(--color-text-muted);
  transition: all var(--transition);
}

.lang-btn:hover {
  background: var(--color-tag-bg);
  color: var(--color-text);
}

.lang-switch-desktop {
  display: flex;
  align-items: center;
}

.nav-right-mobile {
  display: none;
  align-items: center;
  gap: 12px;
}

.nav-toggle {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
}

.nav-toggle span {
  display: block;
  width: 22px;
  height: 1.5px;
  background: var(--color-text);
  transition: var(--transition);
}

@media (max-width: 768px) {
  .lang-switch-desktop {
    display: none;
  }

  .nav-right-mobile {
    display: flex;
  }

  .nav-links {
    display: none;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: var(--color-bg);
    border-bottom: 0.5px solid var(--color-border);
    flex-direction: column;
    padding: 20px 24px;
    gap: 16px;
  }

  .nav-links.active {
    display: flex;
  }

  .nav-toggle {
    display: flex;
  }

  .nav-toggle.active span:nth-child(1) {
    transform: rotate(45deg) translate(4px, 4px);
  }

  .nav-toggle.active span:nth-child(2) {
    opacity: 0;
  }

  .nav-toggle.active span:nth-child(3) {
    transform: rotate(-45deg) translate(4px, -4px);
  }
}
</style>

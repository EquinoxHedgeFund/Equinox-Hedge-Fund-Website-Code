<script setup>
import { useScroll } from '../composables/useScroll'
import { useMobileMenu } from '../composables/useMobileMenu'
import { ref } from 'vue'

const { scrolled } = useScroll()
const { isOpen, toggle, close } = useMobileMenu()
const navbarRef = ref(null)

const navLinks = [
  { href: '#overview', label: '关于我们' },
  { href: '#mission', label: '使命愿景' },
  { href: '#services', label: '研究方向' },
  { href: '#apply', label: '加入我们' },
]

function scrollToSection(href) {
  close()
  const target = document.querySelector(href)
  if (target) {
    const offset = navbarRef.value ? navbarRef.value.offsetHeight + 20 : 80
    const top = target.getBoundingClientRect().top + window.pageYOffset - offset
    window.scrollTo({ top, behavior: 'smooth' })
  }
}
</script>

<template>
  <nav ref="navbarRef" class="navbar" :class="{ scrolled }">
    <div class="nav-container">
      <a href="#" class="nav-logo">
        <img src="/logo.jpg" alt="Equinox Hedge Fund" class="nav-logo-img">
        <span>Equinox Hedge Fund</span>
      </a>
      <ul class="nav-links" :class="{ active: isOpen }">
        <li v-for="link in navLinks" :key="link.href">
          <a :href="link.href" @click.prevent="scrollToSection(link.href)">{{ link.label }}</a>
        </li>
      </ul>
      <button class="nav-toggle" :class="{ active: isOpen }" aria-label="菜单" @click="toggle">
        <span></span>
        <span></span>
        <span></span>
      </button>
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
  padding: 20px 0;
  transition: background-color 0.4s ease, padding 0.4s ease;
}

.navbar.scrolled {
  background-color: rgba(10, 10, 10, 0.95);
  backdrop-filter: blur(10px);
  padding: 14px 0;
  box-shadow: 0 1px 20px rgba(0, 0, 0, 0.1);
}

.nav-container {
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 0 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.nav-logo {
  display: flex;
  align-items: center;
  gap: 10px;
  color: #fff;
}

.nav-logo-img {
  width: 36px;
  height: 36px;
  border-radius: 6px;
  object-fit: cover;
}

.nav-logo span {
  font-size: 1.2rem;
  font-weight: 700;
  letter-spacing: -0.02em;
}

.nav-links {
  display: flex;
  gap: 36px;
}

.nav-links a {
  color: rgba(255, 255, 255, 0.75);
  font-size: 0.9rem;
  font-weight: 400;
  letter-spacing: 0.02em;
  position: relative;
}

.nav-links a::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 0;
  height: 1.5px;
  background: #fff;
  transition: width var(--transition);
}

.nav-links a:hover {
  color: #fff;
}

.nav-links a:hover::after {
  width: 100%;
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
  width: 24px;
  height: 2px;
  background: #fff;
  transition: var(--transition);
}

@media (max-width: 768px) {
  .nav-links {
    display: none;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: rgba(10, 10, 10, 0.98);
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
    transform: rotate(45deg) translate(5px, 5px);
  }

  .nav-toggle.active span:nth-child(2) {
    opacity: 0;
  }

  .nav-toggle.active span:nth-child(3) {
    transform: rotate(-45deg) translate(5px, -5px);
  }
}
</style>

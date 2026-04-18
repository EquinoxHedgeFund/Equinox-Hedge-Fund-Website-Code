<script setup>
import { useI18n } from 'vue-i18n'
import { useTeam } from '../composables/useTeam'
import { useScrollReveal } from '../composables/useScrollReveal'

const { t, locale } = useI18n()
useScrollReveal()
const { teamMembers } = useTeam()
</script>

<template>
  <div class="page-banner">
    <img src="/hero-finance.jpg" alt="About Us" loading="lazy">
    <div class="page-banner-overlay"></div>
    <div class="page-banner-content">
      <h1>{{ t('about.title') }}</h1>
    </div>
  </div>

  <!-- Fund Intro -->
  <section class="section-alt reveal">
    <div class="container">
      <div class="intro-content">
        <h2 class="section-title">{{ t('about.aboutEquinox') }}</h2>
        <p>{{ t('about.intro1') }}</p>
        <p>{{ t('about.intro2') }}</p>
        <p>{{ t('about.intro3') }}</p>
      </div>
    </div>
  </section>

  <!-- Team Grid -->
  <section class="section-block team-section reveal">
    <div class="container">
      <h2 class="section-title">{{ t('about.ourTeam') }}</h2>
      <div class="team-grid">
        <div v-for="member in teamMembers" :key="member.name" class="team-card">
          <div class="team-avatar">
            <img v-if="member.avatar" :src="member.avatar" :alt="member.name" class="team-avatar-img">
            <span v-else>{{ member.name.charAt(0) }}</span>
          </div>
          <h3>{{ member.name }}</h3>
          <p class="team-role">{{ locale === 'en' ? member.roleEn : member.role }}</p>
          <p class="team-school">{{ locale === 'en' ? member.schoolEn : member.school }}</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Partners -->
  <section class="section-alt partners-section reveal">
    <div class="container">
      <h2 class="section-title">{{ t('about.partners') }}</h2>
      <div class="partner-content">
        <div class="partner-logo-placeholder">
          Equinox &times; ESSEC Hedge Fund
        </div>
        <p>{{ t('about.partnerDesc') }}</p>
      </div>
    </div>
  </section>

  <!-- Contact -->
  <section class="section-block contact-section reveal">
    <div class="container">
      <div class="contact-content">
        <h2>{{ t('about.contactTitle') }}</h2>
        <p>{{ t('about.contactDesc') }}</p>
        <a href="mailto:equinox_hf@outlook.com" class="btn">equinox_hf@outlook.com</a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.intro-content {
  max-width: 720px;
}

.intro-content p {
  font-size: 0.95rem;
  line-height: 1.8;
  color: var(--color-text-muted);
  margin-bottom: 16px;
}

.intro-content p:last-child {
  margin-bottom: 0;
}

.team-section {
}

.team-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.team-card {
  background: var(--color-bg-white);
  border: 0.5px solid var(--color-border);
  border-radius: 10px;
  padding: 32px 24px;
  text-align: center;
}

.team-avatar {
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background: var(--color-tag-bg);
  margin: 0 auto 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.team-avatar-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.team-avatar span {
  font-size: 1.4rem;
  font-weight: 600;
  color: var(--color-text-muted);
}

.team-card h3 {
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 4px;
}

.team-role {
  font-size: 0.85rem;
  color: var(--color-text);
  margin-bottom: 4px;
}

.team-school {
  font-size: 0.8rem;
  color: var(--color-text-muted);
}

.partners-section {
}

.partner-content {
  max-width: 600px;
}

.partner-logo-placeholder {
  display: inline-block;
  background: var(--color-bg-card);
  border: 0.5px solid var(--color-border);
  border-radius: 8px;
  padding: 16px 32px;
  font-size: 0.9rem;
  font-weight: 500;
  color: var(--color-text-muted);
  margin-bottom: 20px;
}

.partner-content p {
  font-size: 0.9rem;
  color: var(--color-text-muted);
  line-height: 1.7;
}

.contact-section {
  border-top: 0.5px solid var(--color-border);
}

.contact-content {
  text-align: center;
  padding: 40px 0;
}

.contact-content h2 {
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 12px;
}

.contact-content p {
  font-size: 0.9rem;
  color: var(--color-text-muted);
  margin-bottom: 24px;
}

@media (max-width: 768px) {
  .team-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 480px) {
  .team-grid {
    grid-template-columns: 1fr;
  }
}
</style>

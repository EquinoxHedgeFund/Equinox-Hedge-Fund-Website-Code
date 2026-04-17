<script setup>
import NavBar from './components/NavBar.vue'
import FooterComponent from './components/FooterComponent.vue'
</script>

<template>
  <NavBar />
  <main>
    <router-view />
  </main>
  <FooterComponent />
</template>

<style scoped>
main {
  min-height: calc(100vh - 60px);
}
</style>

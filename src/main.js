import { createApp } from 'vue'
import App from './App.vue'
import './assets/main.css'
import { fadeInDirective } from './directives/fadeIn'

const app = createApp(App)
app.directive('fade-in', fadeInDirective)
app.mount('#app')

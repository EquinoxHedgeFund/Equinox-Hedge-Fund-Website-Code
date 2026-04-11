import { ref, onMounted, onUnmounted } from 'vue'

export function useScroll() {
    const scrolled = ref(false)

    function handleScroll() {
        scrolled.value = window.scrollY > 80
    }

    onMounted(() => window.addEventListener('scroll', handleScroll))
    onUnmounted(() => window.removeEventListener('scroll', handleScroll))

    return { scrolled }
}

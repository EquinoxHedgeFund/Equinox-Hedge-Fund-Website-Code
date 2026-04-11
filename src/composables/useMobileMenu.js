import { ref } from 'vue'

export function useMobileMenu() {
    const isOpen = ref(false)

    function toggle() {
        isOpen.value = !isOpen.value
    }

    function close() {
        isOpen.value = false
    }

    return { isOpen, toggle, close }
}

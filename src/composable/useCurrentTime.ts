import { onMounted, onUnmounted, ref } from 'vue'

// Provides a reactive current timestamp that updates every second
// for real-time countdown calculations
export function useCurrentTime() {
  const currentTime = ref(Math.floor(Date.now() / 1000))

  let timerId: number

  onMounted(() => {
    timerId = window.setInterval(() => {
      currentTime.value = Math.floor(Date.now() / 1000)
    }, 1000)
  })

  onUnmounted(() => {
    clearInterval(timerId)
  })

  return {
    currentTime,
  }
}

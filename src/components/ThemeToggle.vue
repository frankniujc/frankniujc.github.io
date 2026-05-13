<script lang="ts" setup>
import { useDark, useToggle } from '@vueuse/core'
import { onMounted, watchEffect } from 'vue'

const isDark = useDark()

const toggleDark = useToggle(isDark)

watchEffect(() => {
  if (isDark.value)
    setDarkMode(document)
})

function setDarkMode(document: Document) {
  if (isDark.value)
    document.documentElement.classList.add('dark')
}
onMounted(() => {
  document.addEventListener('astro:before-swap', (event) => {
    setDarkMode(event.newDocument)
  })
})

function toggleTheme(event: MouseEvent) {
  const x = event.clientX
  const y = event.clientY
  const endRadius = Math.hypot(
    Math.max(x, innerWidth - x),
    Math.max(y, innerHeight - y),
  )

  // @ts-expect-error: Transition API
  if (!document.startViewTransition) {
    toggleDark()
    return
  }

  // Push click coordinates + radius into CSS vars BEFORE starting the
  // transition, so the keyframe animation on the pseudo-elements has the
  // correct geometry from frame 0 (no JS animate() = no microtask gap).
  const root = document.documentElement
  root.style.setProperty('--theme-x', `${x}px`)
  root.style.setProperty('--theme-y', `${y}px`)
  root.style.setProperty('--theme-r', `${endRadius}px`)

  // @ts-expect-error: Transition API
  document.startViewTransition(() => {
    toggleDark()
  })
}
</script>

<template>
  <button :aria-label="isDark ? 'Dark Theme' : 'Light Theme'" nav-link dark:i-ri-moon-line i-ri-sun-line @click="toggleTheme" />
</template>

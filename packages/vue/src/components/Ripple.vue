<script setup lang="ts">
import { attachRipple } from '@m3-expressive/core'
import { onMounted, onUnmounted, ref } from 'vue'

const props = defineProps<{
  disabled?: boolean
}>()

const surfaceRef = ref<HTMLSpanElement | null>(null)
let cleanup: (() => void) | undefined

onMounted(() => {
  if (surfaceRef.value && !props.disabled) {
    cleanup = attachRipple(surfaceRef.value)
  }
})

onUnmounted(() => {
  cleanup?.()
})
</script>

<template>
  <span ref="surfaceRef" class="m3-ripple" aria-hidden="true" />
</template>

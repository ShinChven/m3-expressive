<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(
  defineProps<{
    name: string
    size?: number
    filled?: boolean
    weight?: number
    grade?: number
    opticalSize?: number
  }>(),
  {
    filled: false,
    weight: 400,
  },
)

const style = computed(() => {
  const settings = [
    `'FILL' ${props.filled ? 1 : 0}`,
    `'wght' ${props.weight}`,
    props.grade !== undefined ? `'GRAD' ${props.grade}` : '',
    props.opticalSize !== undefined ? `'opsz' ${props.opticalSize}` : '',
  ]
    .filter(Boolean)
    .join(', ')

  return {
    fontVariationSettings: settings,
    ...(props.size
      ? { fontSize: `${props.size}px`, width: `${props.size}px`, height: `${props.size}px` }
      : {}),
  }
})
</script>

<template>
  <span class="m3-icon" :style="style" aria-hidden="true">{{ name }}</span>
</template>

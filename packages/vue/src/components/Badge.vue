<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(
  defineProps<{
    value?: number | string
    max?: number
    dot?: boolean
    ariaLabel?: string
  }>(),
  {
    max: 999,
    dot: false,
  },
)

const displayValue = computed(() => {
  if (props.dot || props.value === undefined) return ''
  if (typeof props.value === 'number' && props.value > props.max) {
    return `${props.max}+`
  }
  return String(props.value)
})
</script>

<template>
  <span
    class="m3-badge"
    :data-dot="dot ? '' : undefined"
    :aria-label="ariaLabel"
  >
    {{ displayValue }}
  </span>
</template>

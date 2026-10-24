<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(
  defineProps<{
    value?: number
    indeterminate?: boolean
    size?: number
    wavy?: boolean
    thick?: boolean
    ariaLabel?: string
  }>(),
  {
    indeterminate: false,
    size: 48,
    wavy: false,
    thick: false,
  },
)

const percent = computed(() => {
  if (props.indeterminate || props.value === undefined) return undefined
  return Math.min(100, Math.max(0, props.value * 100))
})
</script>

<template>
  <div
    role="progressbar"
    :aria-valuenow="indeterminate ? undefined : Math.round(percent ?? 0)"
    :aria-valuemin="indeterminate ? undefined : 0"
    :aria-valuemax="indeterminate ? undefined : 100"
    :aria-label="ariaLabel"
    class="m3-circular-progress"
    :data-indeterminate="indeterminate ? '' : undefined"
    :data-wavy="wavy ? '' : undefined"
    :data-thick="thick ? '' : undefined"
    :style="{ '--_size': `${size}px` }"
  >
    <svg viewBox="0 0 48 48">
      <circle class="m3-circular-progress__track" cx="24" cy="24" r="18" />
      <circle
        class="m3-circular-progress__active"
        cx="24"
        cy="24"
        r="18"
        :style="percent !== undefined ? { strokeDashoffset: `${113 - (113 * percent) / 100}px` } : undefined"
      />
    </svg>
  </div>
</template>

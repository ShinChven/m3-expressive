<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(
  defineProps<{
    value?: number
    indeterminate?: boolean
    wavy?: boolean
    thick?: boolean
    ariaLabel?: string
  }>(),
  {
    indeterminate: false,
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
    class="m3-linear-progress"
    :data-indeterminate="indeterminate ? '' : undefined"
    :data-wavy="wavy ? '' : undefined"
    :data-thick="thick ? '' : undefined"
  >
    <div class="m3-linear-progress__track" />
    <div
      v-if="!indeterminate && percent !== undefined"
      class="m3-linear-progress__bar"
      :style="{ width: `${percent}%` }"
    />
    <div v-else class="m3-linear-progress__bar" />
  </div>
</template>

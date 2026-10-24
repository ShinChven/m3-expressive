<script setup lang="ts">
import type { CardVariant } from './types'

withDefaults(
  defineProps<{
    variant?: CardVariant
    disabled?: boolean
  }>(),
  {
    variant: 'elevated',
    disabled: false,
  },
)
</script>

<template>
  <div
    class="m3-card"
    :data-variant="variant"
    :data-disabled="disabled ? '' : undefined"
  >
    <slot />
  </div>
</template>

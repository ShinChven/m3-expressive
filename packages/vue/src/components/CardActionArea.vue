<script setup lang="ts">
import Ripple from './Ripple.vue'

withDefaults(
  defineProps<{
    disabled?: boolean
    href?: string
  }>(),
  {
    disabled: false,
  },
)

const emit = defineEmits<(e: 'click', event: MouseEvent) => void>()
</script>

<template>
  <component
    :is="href ? 'a' : 'button'"
    :href="href"
    :type="href ? undefined : 'button'"
    :disabled="!href && disabled ? true : undefined"
    class="m3-card__action-area m3-focus-ring"
    @click="emit('click', $event)"
  >
    <Ripple :disabled="disabled" />
    <slot />
  </component>
</template>

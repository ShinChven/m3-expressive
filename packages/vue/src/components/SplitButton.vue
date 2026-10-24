<script setup lang="ts">
import { computed, ref } from 'vue'
import Icon from './Icon.vue'
import Ripple from './Ripple.vue'
import type { ButtonSize, ButtonVariant } from './types'

const CHEVRON_SIZE: Record<ButtonSize, number> = { xs: 22, sm: 22, md: 26, lg: 38, xl: 50 }
const ICON_SIZE: Record<ButtonSize, number> = { xs: 20, sm: 20, md: 24, lg: 32, xl: 40 }

const props = withDefaults(
  defineProps<{
    variant?: ButtonVariant
    size?: ButtonSize
    label?: string
    icon?: string
    actionLabel?: string
    menuLabel?: string
    disabled?: boolean
  }>(),
  {
    variant: 'filled',
    size: 'sm',
    menuLabel: 'More options',
    disabled: false,
  },
)

const emit = defineEmits<{
  (e: 'click', event: MouseEvent): void
  (e: 'menu-click', event: MouseEvent): void
}>()

const open = ref(false)
const chevronSize = computed(() => CHEVRON_SIZE[props.size])
const iconSize = computed(() => ICON_SIZE[props.size])

function handleMainClick(event: MouseEvent) {
  if (props.disabled) return
  emit('click', event)
}

function handleMenuClick(event: MouseEvent) {
  if (props.disabled) return
  open.value = !open.value
  emit('menu-click', event)
}
</script>

<template>
  <div
    role="group"
    class="m3-split-button"
    :data-variant="variant"
    :data-size="size"
    :data-open="open ? '' : undefined"
  >
    <button
      type="button"
      class="m3-button m3-split-button__leading m3-focus-ring"
      :data-variant="variant"
      :data-size="size"
      :disabled="disabled ? true : undefined"
      :aria-label="actionLabel"
      @click="handleMainClick"
    >
      <Ripple :disabled="disabled" />
      <Icon v-if="icon" :name="icon" :size="iconSize" />
      <span v-if="label || $slots.default" class="m3-button__label">
        <slot>{{ label }}</slot>
      </span>
    </button>
    <button
      type="button"
      class="m3-icon-button m3-split-button__trailing m3-focus-ring"
      :data-variant="variant"
      :data-size="size"
      :aria-label="menuLabel"
      :aria-expanded="open"
      :disabled="disabled ? true : undefined"
      @click="handleMenuClick"
    >
      <Ripple :disabled="disabled" />
      <Icon name="arrow_drop_down" :size="chevronSize" class="m3-split-button__chevron" />
    </button>
  </div>
</template>

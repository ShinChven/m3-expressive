<script setup lang="ts">
import { computed } from 'vue'
import Icon from './Icon.vue'
import Ripple from './Ripple.vue'
import type { FabColor, FabSize } from './types'

const ICON_SIZE: Record<FabSize, number> = { sm: 24, md: 32, lg: 36 }

const props = withDefaults(
  defineProps<{
    icon: string
    label?: string
    size?: FabSize
    color?: FabColor
    extended?: boolean
    lowered?: boolean
    disabled?: boolean
    href?: string
    type?: 'button' | 'submit' | 'reset'
  }>(),
  {
    size: 'sm',
    color: 'primary',
    extended: false,
    lowered: false,
    disabled: false,
    type: 'button',
  },
)

const emit = defineEmits<(e: 'click', event: MouseEvent) => void>()

const iconSize = computed(() => ICON_SIZE[props.size])

function handleClick(event: MouseEvent) {
  if (props.disabled) {
    event.preventDefault()
    return
  }
  emit('click', event)
}
</script>

<template>
  <component
    :is="href ? 'a' : 'button'"
    :href="href"
    :type="href ? undefined : type"
    :disabled="!href && disabled ? true : undefined"
    :aria-label="label && !extended ? label : undefined"
    class="m3-fab m3-focus-ring"
    :data-size="size"
    :data-color="color"
    :data-extended="extended ? '' : undefined"
    :data-lowered="lowered ? '' : undefined"
    @click="handleClick"
  >
    <Ripple :disabled="disabled" />
    <span class="m3-fab__icon">
      <slot name="icon">
        <Icon :name="icon" :size="iconSize" />
      </slot>
    </span>
    <span v-if="extended && (label || $slots.default)" class="m3-fab__label">
      <slot>{{ label }}</slot>
    </span>
  </component>
</template>

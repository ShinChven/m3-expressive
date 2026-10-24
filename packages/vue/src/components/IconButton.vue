<script setup lang="ts">
import { computed } from 'vue'
import Icon from './Icon.vue'
import Ripple from './Ripple.vue'
import type { ButtonSize, IconButtonVariant, IconButtonWidth } from './types'

const ICON_SIZE: Record<ButtonSize, number> = { xs: 20, sm: 24, md: 24, lg: 32, xl: 40 }

const props = withDefaults(
  defineProps<{
    icon: string
    label?: string
    variant?: IconButtonVariant
    size?: ButtonSize
    width?: IconButtonWidth
    shapeMorph?: boolean
    toggle?: boolean
    selected?: boolean
    disabled?: boolean
    href?: string
    type?: 'button' | 'submit' | 'reset'
  }>(),
  {
    variant: 'standard',
    size: 'sm',
    width: 'default',
    shapeMorph: true,
    type: 'button',
  },
)

const emit = defineEmits<{
  (e: 'click', event: MouseEvent): void
  (e: 'update:selected', value: boolean): void
}>()

const iconSize = computed(() => ICON_SIZE[props.size])

function handleClick(event: MouseEvent) {
  if (props.disabled) {
    event.preventDefault()
    return
  }
  if (props.toggle) {
    emit('update:selected', !props.selected)
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
    :aria-label="label"
    :aria-pressed="toggle ? Boolean(selected) : undefined"
    class="m3-icon-button m3-focus-ring"
    :data-variant="variant"
    :data-size="size"
    :data-width="width"
    :data-morph="shapeMorph ? '' : undefined"
    :data-toggle="toggle ? '' : undefined"
    :data-selected="selected ? '' : undefined"
    @click="handleClick"
  >
    <Ripple :disabled="disabled" />
    <slot>
      <Icon :name="icon" :size="iconSize" :filled="selected" />
    </slot>
  </component>
</template>

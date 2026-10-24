<script setup lang="ts">
import { computed, inject, useSlots } from 'vue'
import { buttonGroupKey } from './buttonGroupContext'
import Icon from './Icon.vue'
import LoadingIndicator from './LoadingIndicator.vue'
import Ripple from './Ripple.vue'
import type { ButtonShape, ButtonSize, ButtonVariant } from './types'

const ICON_SIZE: Record<ButtonSize, number> = { xs: 20, sm: 20, md: 24, lg: 32, xl: 40 }

const props = withDefaults(
  defineProps<{
    variant?: ButtonVariant
    size?: ButtonSize
    shape?: ButtonShape
    shapeMorph?: boolean
    icon?: string
    trailingIcon?: string
    loading?: boolean
    fullWidth?: boolean
    selected?: boolean
    emphasized?: boolean
    disabled?: boolean
    href?: string
    type?: 'button' | 'submit' | 'reset'
    value?: string
  }>(),
  {
    variant: 'filled',
    shapeMorph: true,
    loading: false,
    type: 'button',
  },
)

const emit = defineEmits<{
  (e: 'click', event: MouseEvent): void
  (e: 'update:selected', value: boolean): void
}>()

const slots = useSlots()
const group = inject(buttonGroupKey, null)

const actualSize = computed(() => props.size ?? group?.size.value ?? 'sm')
const actualShape = computed(() => props.shape ?? group?.shape.value ?? 'round')
const actualDisabled = computed(() => props.disabled || group?.disabled.value || false)

const isSelected = computed(() => {
  if (group && props.value !== undefined) {
    return group.isSelected(props.value)
  }
  return props.selected
})

const iconSize = computed(() => ICON_SIZE[actualSize.value])
const hasLeading = computed(() => props.loading || Boolean(props.icon) || Boolean(slots.icon))
const hasTrailing = computed(() => Boolean(props.trailingIcon) || Boolean(slots.trailingIcon))

function handleClick(event: MouseEvent) {
  if (actualDisabled.value || props.loading) {
    event.preventDefault()
    return
  }
  if (group && props.value !== undefined) {
    group.toggle(props.value)
  }
  if (props.selected !== undefined) {
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
    :disabled="!href && actualDisabled ? true : undefined"
    :aria-disabled="actualDisabled ? 'true' : undefined"
    :aria-busy="loading || undefined"
    :aria-pressed="isSelected !== undefined ? isSelected : undefined"
    class="m3-button m3-focus-ring"
    :data-variant="variant"
    :data-size="actualSize"
    :data-shape="actualShape"
    :data-morph="shapeMorph ? '' : undefined"
    :data-leading="hasLeading ? '' : undefined"
    :data-trailing="hasTrailing ? '' : undefined"
    :data-full-width="fullWidth ? '' : undefined"
    :data-toggle="isSelected !== undefined ? '' : undefined"
    :data-selected="isSelected ? '' : undefined"
    :data-emphasized="emphasized ? '' : undefined"
    @click="handleClick"
  >
    <Ripple :disabled="actualDisabled" />
    <LoadingIndicator
      v-if="loading"
      :size="iconSize + 4"
      class="m3-button__icon"
      aria-hidden="true"
    />
    <span v-else-if="icon || $slots.icon" class="m3-button__icon">
      <slot name="icon">
        <Icon :name="icon!" :size="iconSize" :filled="isSelected" />
      </slot>
    </span>
    <span v-if="$slots.default" class="m3-button__label">
      <slot />
    </span>
    <span v-if="trailingIcon || $slots.trailingIcon" class="m3-button__icon">
      <slot name="trailingIcon">
        <Icon :name="trailingIcon!" :size="iconSize" />
      </slot>
    </span>
  </component>
</template>

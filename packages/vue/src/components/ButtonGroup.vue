<script setup lang="ts">
import { computed, provide, toRef } from 'vue'
import { buttonGroupKey } from './buttonGroupContext'
import type { ButtonGroupVariant, ButtonShape, ButtonSize, SelectionMode } from './types'

const props = withDefaults(
  defineProps<{
    variant?: ButtonGroupVariant
    size?: ButtonSize
    shape?: ButtonShape
    selection?: SelectionMode
    modelValue?: string | string[]
    disabled?: boolean
    ariaLabel?: string
  }>(),
  {
    variant: 'standard',
    selection: 'none',
    disabled: false,
  },
)

const emit = defineEmits<{
  (e: 'update:modelValue', value: string | string[]): void
  (e: 'change', value: string | string[]): void
}>()

const isSelected = (val: string) => {
  if (props.selection === 'single') {
    return props.modelValue === val
  }
  if (props.selection === 'multiple' && Array.isArray(props.modelValue)) {
    return props.modelValue.includes(val)
  }
  return false
}

const toggle = (val: string) => {
  if (props.selection === 'single') {
    const next = props.modelValue === val ? '' : val
    emit('update:modelValue', next)
    emit('change', next)
  } else if (props.selection === 'multiple') {
    const current = Array.isArray(props.modelValue) ? [...props.modelValue] : []
    const idx = current.indexOf(val)
    if (idx >= 0) {
      current.splice(idx, 1)
    } else {
      current.push(val)
    }
    emit('update:modelValue', current)
    emit('change', current)
  }
}

provide(buttonGroupKey, {
  size: computed(() => props.size),
  shape: computed(() => props.shape),
  disabled: computed(() => props.disabled),
  isSelected,
  toggle,
})
</script>

<template>
  <div
    role="group"
    :aria-label="ariaLabel"
    class="m3-button-group"
    :data-variant="variant"
    :data-size="size"
    :data-shape="shape"
  >
    <slot />
  </div>
</template>

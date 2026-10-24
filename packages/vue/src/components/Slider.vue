<script setup lang="ts">
import { computed } from 'vue'
import type { SliderSize } from './types'

const props = withDefaults(
  defineProps<{
    modelValue?: number
    min?: number
    max?: number
    step?: number
    size?: SliderSize
    disabled?: boolean
    ariaLabel?: string
  }>(),
  {
    modelValue: 0,
    min: 0,
    max: 100,
    step: 1,
    size: 'xs',
    disabled: false,
  },
)

const emit = defineEmits<{
  (e: 'update:modelValue', value: number): void
  (e: 'change', value: number): void
}>()

const percent = computed(() => {
  const range = props.max - props.min
  if (range <= 0) return 0
  const clamped = Math.min(props.max, Math.max(props.min, props.modelValue))
  return ((clamped - props.min) / range) * 100
})

function handleInput(event: Event) {
  const target = event.target as HTMLInputElement
  const num = Number(target.value)
  emit('update:modelValue', num)
  emit('change', num)
}
</script>

<template>
  <div
    class="m3-slider"
    :data-size="size"
    :data-disabled="disabled ? '' : undefined"
    :style="{ '--_value': `${percent}%` }"
  >
    <div class="m3-slider__track">
      <div class="m3-slider__track-inactive" />
      <div class="m3-slider__track-active" :style="{ width: `${percent}%` }" />
    </div>
    <div
      class="m3-slider__handle-container"
      :style="{ left: `${percent}%` }"
    >
      <div class="m3-slider__handle" />
    </div>
    <input
      type="range"
      :min="min"
      :max="max"
      :step="step"
      :value="modelValue"
      :disabled="disabled"
      :aria-label="ariaLabel"
      class="m3-slider__input m3-focus-ring"
      @input="handleInput"
    />
  </div>
</template>

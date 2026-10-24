<script setup lang="ts">
import Ripple from './Ripple.vue'

const props = withDefaults(
  defineProps<{
    value: string | number
    modelValue?: string | number
    label?: string
    name?: string
    disabled?: boolean
  }>(),
  {
    disabled: false,
  },
)

const emit = defineEmits<{
  (e: 'update:modelValue', value: string | number): void
  (e: 'change', value: string | number): void
}>()

function handleChange() {
  if (props.disabled) return
  emit('update:modelValue', props.value)
  emit('change', props.value)
}
</script>

<template>
  <label
    class="m3-radio-label"
    :data-disabled="disabled ? '' : undefined"
  >
    <span class="m3-radio">
      <input
        type="radio"
        :name="name"
        :value="value"
        :checked="modelValue === value"
        :disabled="disabled"
        class="m3-radio__input m3-focus-ring"
        @change="handleChange"
      />
      <span class="m3-radio__circle">
        <Ripple :disabled="disabled" />
        <span class="m3-radio__dot" />
      </span>
    </span>
    <span v-if="label || $slots.default" class="m3-radio-label__text">
      <slot>{{ label }}</slot>
    </span>
  </label>
</template>

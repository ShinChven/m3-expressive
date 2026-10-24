<script setup lang="ts">
import Icon from './Icon.vue'
import Ripple from './Ripple.vue'

const props = withDefaults(
  defineProps<{
    modelValue?: boolean
    label?: string
    disabled?: boolean
    showIcons?: boolean
  }>(),
  {
    modelValue: false,
    disabled: false,
    showIcons: false,
  },
)

const emit = defineEmits<{
  (e: 'update:modelValue', value: boolean): void
  (e: 'change', value: boolean): void
}>()

function toggle() {
  if (props.disabled) return
  const next = !props.modelValue
  emit('update:modelValue', next)
  emit('change', next)
}
</script>

<template>
  <label
    class="m3-switch-label"
    :data-disabled="disabled ? '' : undefined"
  >
    <button
      type="button"
      role="switch"
      :aria-checked="modelValue"
      :aria-label="label"
      :disabled="disabled"
      class="m3-switch m3-focus-ring"
      :data-selected="modelValue ? '' : undefined"
      :data-icons="showIcons ? '' : undefined"
      @click="toggle"
    >
      <span class="m3-switch__track" />
      <span class="m3-switch__thumb">
        <Ripple :disabled="disabled" />
        <span v-if="showIcons" class="m3-switch__icon">
          <Icon :name="modelValue ? 'check' : 'close'" :size="16" />
        </span>
      </span>
    </button>
    <span v-if="label || $slots.default" class="m3-switch-label__text">
      <slot>{{ label }}</slot>
    </span>
  </label>
</template>

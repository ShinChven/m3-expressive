<script setup lang="ts">
import { ref, watch } from 'vue'
import Icon from './Icon.vue'
import Ripple from './Ripple.vue'

const props = withDefaults(
  defineProps<{
    modelValue?: boolean
    indeterminate?: boolean
    label?: string
    disabled?: boolean
    error?: boolean
  }>(),
  {
    modelValue: false,
    indeterminate: false,
    disabled: false,
    error: false,
  },
)

const emit = defineEmits<{
  (e: 'update:modelValue', value: boolean): void
  (e: 'change', value: boolean): void
}>()

const inputRef = ref<HTMLInputElement | null>(null)

watch(
  () => props.indeterminate,
  (val) => {
    if (inputRef.value) {
      inputRef.value.indeterminate = val
    }
  },
  { immediate: true },
)

function handleChange(event: Event) {
  const target = event.target as HTMLInputElement
  emit('update:modelValue', target.checked)
  emit('change', target.checked)
}
</script>

<template>
  <label
    class="m3-checkbox-label"
    :data-disabled="disabled ? '' : undefined"
    :data-error="error ? '' : undefined"
  >
    <span class="m3-checkbox">
      <input
        ref="inputRef"
        type="checkbox"
        :checked="modelValue"
        :disabled="disabled"
        class="m3-checkbox__input m3-focus-ring"
        @change="handleChange"
      />
      <span class="m3-checkbox__box">
        <Ripple :disabled="disabled" />
        <Icon
          v-if="indeterminate"
          name="remove"
          :size="18"
          class="m3-checkbox__icon"
        />
        <Icon
          v-else-if="modelValue"
          name="check"
          :size="18"
          class="m3-checkbox__icon"
        />
      </span>
    </span>
    <span v-if="label || $slots.default" class="m3-checkbox-label__text">
      <slot>{{ label }}</slot>
    </span>
  </label>
</template>

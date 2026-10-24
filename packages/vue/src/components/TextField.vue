<script setup lang="ts">
import { computed, ref } from 'vue'
import Icon from './Icon.vue'
import type { TextFieldVariant } from './types'

const props = withDefaults(
  defineProps<{
    modelValue?: string
    label?: string
    variant?: TextFieldVariant
    placeholder?: string
    supportingText?: string
    error?: boolean
    errorText?: string
    disabled?: boolean
    prefixText?: string
    suffixText?: string
    type?: string
    clearable?: boolean
  }>(),
  {
    modelValue: '',
    variant: 'filled',
    type: 'text',
    disabled: false,
    error: false,
    clearable: false,
  },
)

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
  (e: 'change', value: string): void
}>()

const isFocused = ref(false)
const isPopulated = computed(() => Boolean(props.modelValue && props.modelValue.length > 0))

function handleInput(event: Event) {
  const target = event.target as HTMLInputElement
  emit('update:modelValue', target.value)
  emit('change', target.value)
}

function handleClear() {
  emit('update:modelValue', '')
  emit('change', '')
}
</script>

<template>
  <div
    class="m3-field"
    :data-variant="variant"
    :data-disabled="disabled ? '' : undefined"
    :data-error="error ? '' : undefined"
    :data-focused="isFocused ? '' : undefined"
    :data-populated="isPopulated ? '' : undefined"
  >
    <div class="m3-field__container m3-focus-ring">
      <div class="m3-field__middle">
        <span v-if="label" class="m3-field__label">{{ label }}</span>
        <div class="m3-field__input-row">
          <span v-if="prefixText" class="m3-field__prefix">{{ prefixText }}</span>
          <input
            :type="type"
            :value="modelValue"
            :placeholder="placeholder"
            :disabled="disabled"
            class="m3-field__input"
            @input="handleInput"
            @focus="isFocused = true"
            @blur="isFocused = false"
          />
          <span v-if="suffixText" class="m3-field__suffix">{{ suffixText }}</span>
        </div>
      </div>
      <button
        v-if="clearable && isPopulated && !disabled"
        type="button"
        class="m3-icon-button m3-field__trailing"
        aria-label="Clear text"
        @click="handleClear"
      >
        <Icon name="clear" :size="20" />
      </button>
    </div>
    <div
      v-if="supportingText || (error && errorText)"
      class="m3-field__supporting-text"
    >
      {{ error && errorText ? errorText : supportingText }}
    </div>
  </div>
</template>

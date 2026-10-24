<script setup lang="ts">
import { computed, ref, useId } from 'vue'
import Icon from './Icon.vue'
import type { TextFieldVariant } from './types'

const props = withDefaults(
  defineProps<{
    modelValue?: string | number
    label?: string
    variant?: TextFieldVariant
    placeholder?: string
    supportingText?: string
    error?: boolean
    errorText?: string
    disabled?: boolean
    required?: boolean
    prefixText?: string
    suffixText?: string
    type?: string
    clearable?: boolean
    leadingIcon?: string
    trailingIcon?: string
    fullWidth?: boolean
    multiline?: boolean
    rows?: number
    maxLength?: number
    showCounter?: boolean
    id?: string
  }>(),
  {
    modelValue: '',
    variant: 'filled',
    type: 'text',
    disabled: false,
    error: false,
    clearable: false,
    multiline: false,
    rows: 1,
  },
)

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
  (e: 'change', value: string): void
  (e: 'clear'): void
}>()

const generatedId = useId()
const inputId = computed(() => props.id || `m3-field-${generatedId}`)
const isFocused = ref(false)
const inputRef = ref<HTMLInputElement | HTMLTextAreaElement | null>(null)

const strValue = computed(() =>
  props.modelValue !== undefined && props.modelValue !== null ? String(props.modelValue) : '',
)

const hasLabel = computed(() => Boolean(props.label && props.label.trim().length > 0))
const isPopulated = computed(() => strValue.value.length > 0)
const supporting = computed(() =>
  props.error && props.errorText ? props.errorText : props.supportingText,
)
const counter = computed(() =>
  props.maxLength !== undefined && (props.showCounter ?? true)
    ? `${strValue.value.length} / ${props.maxLength}`
    : undefined,
)

function handleInput(event: Event) {
  const target = event.target as HTMLInputElement | HTMLTextAreaElement
  emit('update:modelValue', target.value)
  emit('change', target.value)
}

function handleClear() {
  emit('update:modelValue', '')
  emit('change', '')
  emit('clear')
  inputRef.value?.focus()
}

function handleContainerClick(event: MouseEvent) {
  const target = event.target as HTMLElement
  if (!target.closest('button, a, input, textarea')) {
    inputRef.value?.focus()
  }
}
</script>

<template>
  <div
    class="m3-field"
    :data-variant="variant"
    :data-disabled="disabled ? '' : undefined"
    :data-error="error ? '' : undefined"
    :data-label="hasLabel ? '' : undefined"
    :data-leading="leadingIcon || $slots.leading ? '' : undefined"
    :data-trailing="trailingIcon || clearable || error || $slots.trailing ? '' : undefined"
    :data-multiline="multiline ? '' : undefined"
    :data-populated="isPopulated ? '' : undefined"
    :data-focused="isFocused ? '' : undefined"
    :data-full-width="fullWidth ? '' : undefined"
  >
    <div class="m3-field__container" @click="handleContainerClick">
      <fieldset v-if="variant === 'outlined'" class="m3-field__outline" aria-hidden="true">
        <legend v-if="hasLabel">
          <span>
            {{ label }}
            <template v-if="required"> *</template>
          </span>
        </legend>
      </fieldset>
      <span v-else class="m3-field__indicator" aria-hidden="true" />

      <span v-if="leadingIcon || $slots.leading" class="m3-field__leading">
        <slot name="leading">
          <Icon v-if="leadingIcon" :name="leadingIcon" />
        </slot>
      </span>

      <div class="m3-field__body">
        <label v-if="hasLabel" class="m3-field__label" :for="inputId">
          {{ label }}
          <span v-if="required" aria-hidden="true"> *</span>
        </label>
        <div class="m3-field__row">
          <span v-if="prefixText" class="m3-field__prefix">{{ prefixText }}</span>
          <textarea
            v-if="multiline"
            :id="inputId"
            ref="inputRef"
            :value="strValue"
            :placeholder="placeholder || (hasLabel ? ' ' : undefined)"
            :disabled="disabled"
            :required="required"
            :maxlength="maxLength"
            :rows="rows"
            class="m3-field__input"
            @input="handleInput"
            @focus="isFocused = true"
            @blur="isFocused = false"
          />
          <input
            v-else
            :id="inputId"
            ref="inputRef"
            :type="type"
            :value="strValue"
            :placeholder="placeholder || (hasLabel ? ' ' : undefined)"
            :disabled="disabled"
            :required="required"
            :maxlength="maxLength"
            class="m3-field__input"
            @input="handleInput"
            @focus="isFocused = true"
            @blur="isFocused = false"
          />
          <span v-if="suffixText" class="m3-field__suffix">{{ suffixText }}</span>
        </div>
      </div>

      <span
        v-if="clearable || trailingIcon || error || $slots.trailing"
        class="m3-field__trailing"
        @click="clearable && isPopulated && !disabled ? handleClear() : undefined"
      >
        <button
          v-if="clearable && isPopulated && !disabled"
          type="button"
          class="m3-icon-button"
          aria-label="Clear"
          @click.stop="handleClear"
        >
          <Icon name="cancel" :size="20" />
        </button>
        <slot v-else name="trailing">
          <Icon v-if="error" name="error" filled />
          <Icon v-else-if="trailingIcon" :name="trailingIcon" />
        </slot>
      </span>
    </div>

    <div v-if="supporting || counter" class="m3-field__supporting">
      <span>{{ supporting }}</span>
      <span v-if="counter" class="m3-field__counter">{{ counter }}</span>
    </div>
  </div>
</template>

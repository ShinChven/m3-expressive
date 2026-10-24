<script setup lang="ts">
defineProps<{
  headline?: string
  subhead?: string
}>()
</script>

<template>
  <div class="m3-card__header">
    <div v-if="$slots.avatar" class="m3-card__avatar">
      <slot name="avatar" />
    </div>
    <div class="m3-card__header-text">
      <div v-if="headline || $slots.headline" class="m3-typescale-title-medium">
        <slot name="headline">{{ headline }}</slot>
      </div>
      <div v-if="subhead || $slots.subhead" class="m3-typescale-body-medium m3-card__subhead">
        <slot name="subhead">{{ subhead }}</slot>
      </div>
    </div>
    <div v-if="$slots.action" class="m3-card__action">
      <slot name="action" />
    </div>
  </div>
</template>

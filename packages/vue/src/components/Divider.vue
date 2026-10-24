<script setup lang="ts">
withDefaults(
  defineProps<{
    inset?: boolean
  }>(),
  {
    inset: false,
  },
)
</script>

<template>
  <hr class="m3-divider" :data-inset="inset ? '' : undefined" />
</template>

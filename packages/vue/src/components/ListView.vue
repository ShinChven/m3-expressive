<script setup lang="ts">
import { computed, ref } from 'vue'

const props = withDefaults(
  defineProps<{
    items: unknown[]
    estimateSize?: number
    overscan?: number
    height?: number | string
    variant?: 'standard' | 'segmented'
    selection?: 'none' | 'single' | 'multiple'
    modelValue?: unknown[] | unknown
  }>(),
  {
    estimateSize: 56,
    overscan: 5,
    height: 400,
    variant: 'standard',
    selection: 'none',
  },
)

const emit = defineEmits<{
  (e: 'update:modelValue', value: unknown): void
  (e: 'item-click', item: unknown, index: number): void
}>()

const containerRef = ref<HTMLDivElement | null>(null)
const scrollTop = ref(0)

const containerHeight = computed(() =>
  typeof props.height === 'number'
    ? props.height
    : Number.parseInt(String(props.height), 10) || 400,
)

const totalHeight = computed(() => props.items.length * props.estimateSize)

const startIndex = computed(() =>
  Math.max(0, Math.floor(scrollTop.value / props.estimateSize) - props.overscan),
)

const endIndex = computed(() =>
  Math.min(
    props.items.length,
    Math.ceil((scrollTop.value + containerHeight.value) / props.estimateSize) + props.overscan,
  ),
)

const visibleItems = computed(() => {
  const result: { item: unknown; index: number; top: number }[] = []
  for (let i = startIndex.value; i < endIndex.value; i++) {
    result.push({
      item: props.items[i],
      index: i,
      top: i * props.estimateSize,
    })
  }
  return result
})

function handleScroll(e: Event) {
  const target = e.target as HTMLDivElement
  scrollTop.value = target.scrollTop
}

function handleItemClick(item: unknown, index: number) {
  emit('item-click', item, index)
}
</script>

<template>
  <div
    ref="containerRef"
    role="list"
    tabindex="0"
    class="m3-list-view"
    :data-variant="variant"
    :style="{ height: typeof height === 'number' ? `${height}px` : height }"
    @scroll.passive="handleScroll"
  >
    <div
      v-if="items.length > 0"
      class="m3-list-view__inner"
      :style="{ height: `${totalHeight}px` }"
    >
      <div
        v-for="entry in visibleItems"
        :key="entry.index"
        class="m3-list-view__item"
        :style="{
          height: `${estimateSize}px`,
          transform: `translateY(${entry.top}px)`,
        }"
        @click="handleItemClick(entry.item, entry.index)"
      >
        <slot :item="entry.item" :index="entry.index" />
      </div>
    </div>
    <slot v-else name="empty">
      <div class="m3-list-view__empty">No items</div>
    </slot>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'

const props = withDefaults(
  defineProps<{
    items: unknown[]
    getItemKey?: (item: unknown, index: number) => string | number
    estimateSize?: number
    overscan?: number
    height?: number | string
    variant?: 'standard' | 'segmented'
    selection?: 'none' | 'single' | 'multiple'
    modelValue?: (string | number)[]
  }>(),
  {
    getItemKey: (_item: unknown, index: number) => index,
    estimateSize: 56,
    overscan: 5,
    height: 400,
    variant: 'standard',
    selection: 'none',
  },
)

const emit = defineEmits<{
  (e: 'update:modelValue', value: (string | number)[]): void
  (e: 'item-click', item: unknown, index: number): void
}>()

const containerRef = ref<HTMLDivElement | null>(null)
const scrollTop = ref(0)
const activeIndex = ref(-1)
const internalSelected = ref<(string | number)[]>([])

const selectedKeys = computed(() => props.modelValue ?? internalSelected.value)
const selectedSet = computed(() => new Set(selectedKeys.value))

const containerHeight = computed(() =>
  typeof props.height === 'number'
    ? props.height
    : Number.parseInt(String(props.height), 10) || 400,
)

const gap = computed(() => (props.variant === 'segmented' ? 2 : 0))
const stepSize = computed(() => props.estimateSize + gap.value)
const padding = 8

const totalHeight = computed(() =>
  props.items.length > 0
    ? padding * 2 + props.items.length * props.estimateSize + (props.items.length - 1) * gap.value
    : 0,
)

const startIndex = computed(() =>
  Math.max(0, Math.floor((scrollTop.value - padding) / stepSize.value) - props.overscan),
)

const endIndex = computed(() =>
  Math.min(
    props.items.length,
    Math.ceil((scrollTop.value + containerHeight.value - padding) / stepSize.value) +
      props.overscan,
  ),
)

const visibleItems = computed(() => {
  const result: {
    item: unknown
    index: number
    key: string | number
    top: number
    selected: boolean
    active: boolean
  }[] = []
  for (let i = startIndex.value; i < endIndex.value; i++) {
    const item = props.items[i]
    const key = props.getItemKey(item, i)
    result.push({
      item,
      index: i,
      key,
      top: padding + i * stepSize.value,
      selected: selectedSet.value.has(key),
      active: activeIndex.value === i,
    })
  }
  return result
})

function toggleSelect(key: string | number) {
  if (props.selection === 'none') return
  let next: (string | number)[]
  if (props.selection === 'single') {
    next = selectedSet.value.has(key) ? [] : [key]
  } else {
    const copy = new Set(selectedSet.value)
    if (copy.has(key)) copy.delete(key)
    else copy.add(key)
    next = [...copy]
  }
  internalSelected.value = next
  emit('update:modelValue', next)
}

function handleScroll(e: Event) {
  const target = e.target as HTMLDivElement
  scrollTop.value = target.scrollTop
}

function handleItemClick(item: unknown, index: number) {
  activeIndex.value = index
  const key = props.getItemKey(item, index)
  toggleSelect(key)
  emit('item-click', item, index)
}
</script>

<template>
  <div
    ref="containerRef"
    :role="selection !== 'none' ? 'listbox' : 'list'"
    :aria-multiselectable="selection === 'multiple' ? true : undefined"
    tabindex="0"
    class="m3-list-view"
    :data-variant="variant"
    :data-interactive="selection !== 'none' ? '' : undefined"
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
        :key="entry.key"
        :data-index="entry.index"
        :data-first="entry.index === 0 ? '' : undefined"
        :data-last="entry.index === items.length - 1 ? '' : undefined"
        :data-selected="entry.selected ? '' : undefined"
        :data-active="entry.active ? '' : undefined"
        :role="selection !== 'none' ? 'option' : 'listitem'"
        :aria-selected="selection !== 'none' ? entry.selected : undefined"
        class="m3-list-view__item"
        :style="{
          minHeight: `${estimateSize}px`,
          transform: `translateY(${entry.top}px)`,
        }"
        @click="handleItemClick(entry.item, entry.index)"
      >
        <slot
          :item="entry.item"
          :index="entry.index"
          :selected="entry.selected"
          :active="entry.active"
        />
      </div>
    </div>
    <slot v-else name="empty">
      <div class="m3-list-view__empty">No items</div>
    </slot>
  </div>
</template>

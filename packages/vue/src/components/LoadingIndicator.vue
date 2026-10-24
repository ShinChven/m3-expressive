<script setup lang="ts">
import {
  animateSpring,
  createMorph,
  type MaterialShapeName,
  prefersReducedMotion,
  type SpringSpec,
  shapePath,
} from '@m3-expressive/core'
import { computed, onMounted, onUnmounted, ref, watch } from 'vue'
import { LOADING_INDICATOR_SHAPES } from './types'

const DETERMINATE_SHAPES: readonly MaterialShapeName[] = ['circle', 'soft-burst']
const BOX = 100
const ACTIVE_SCALE = 38 / 48
const MORPH_INTERVAL_MS = 650
const GLOBAL_ROTATION_MS = 4666
const MORPH_SPRING: SpringSpec = { damping: 0.6, stiffness: 200 }

function transform(rotation: number) {
  const c = BOX / 2
  return `rotate(${Math.round(rotation * 10) / 10} ${c} ${c}) translate(${c} ${c}) scale(${ACTIVE_SCALE}) translate(${-c} ${-c})`
}

const props = withDefaults(
  defineProps<{
    contained?: boolean
    size?: number
    value?: number
    shapes?: readonly MaterialShapeName[]
  }>(),
  {
    size: 48,
    shapes: () => LOADING_INDICATOR_SHAPES,
  },
)

const groupRef = ref<SVGGElement | null>(null)
const pathRef = ref<SVGPathElement | null>(null)

const determinate = computed(() => props.value !== undefined)
const progress = computed(() =>
  determinate.value ? Math.min(1, Math.max(0, props.value ?? 0)) : 0,
)
const sequence = computed(() =>
  props.shapes.length >= 2 ? props.shapes : LOADING_INDICATOR_SHAPES,
)

let timer: number | undefined
let frame: number | undefined
let stopSpring: (() => unknown) | null = null

function startAnimation() {
  stopAnimation()
  const group = groupRef.value
  const path = pathRef.value
  if (determinate.value || !group || !path) return

  const reduced = prefersReducedMotion()
  let turn = 0
  let morphProgress = 0
  const seq = sequence.value
  const start = performance.now()

  const draw = (now: number) => {
    const elapsed = now - start
    const spin = reduced ? 0 : ((elapsed % GLOBAL_ROTATION_MS) / GLOBAL_ROTATION_MS) * 360
    const rotation = spin + ((turn % 4) + morphProgress) * 90
    const from = seq[turn % seq.length]!
    const to = seq[(turn + 1) % seq.length]!
    path.setAttribute('d', createMorph(from, to).path(morphProgress, BOX))
    group.setAttribute('transform', transform(rotation))
    frame = requestAnimationFrame(draw)
  }

  const step = () => {
    stopSpring?.()
    stopSpring = animateSpring({
      from: 0,
      to: 1,
      spring: MORPH_SPRING,
      onUpdate: (v) => {
        morphProgress = v
      },
    })
  }

  timer = window.setInterval(() => {
    stopSpring?.()
    turn = (turn + 1) % (seq.length * 4)
    morphProgress = 0
    step()
  }, MORPH_INTERVAL_MS)

  step()
  frame = requestAnimationFrame(draw)
}

function stopAnimation() {
  if (timer) window.clearInterval(timer)
  stopSpring?.()
  if (frame) cancelAnimationFrame(frame)
}

onMounted(() => {
  startAnimation()
})

watch([determinate, sequence], () => {
  startAnimation()
})

onUnmounted(() => {
  stopAnimation()
})

const initialPath = computed(() =>
  determinate.value
    ? createMorph(DETERMINATE_SHAPES[0]!, DETERMINATE_SHAPES[1]!).path(progress.value, BOX)
    : shapePath(sequence.value[0]!, BOX),
)

const initialTransform = computed(() => transform(determinate.value ? progress.value * 180 : 0))
</script>

<template>
  <div
    role="progressbar"
    :aria-valuemin="determinate ? 0 : undefined"
    :aria-valuemax="determinate ? 1 : undefined"
    :aria-valuenow="determinate ? progress : undefined"
    class="m3-loading-indicator"
    :data-contained="contained ? '' : undefined"
    :style="{ '--_size': `${size}px` }"
  >
    <svg :viewBox="`0 0 ${BOX} ${BOX}`" aria-hidden="true" focusable="false">
      <g ref="groupRef" :transform="initialTransform">
        <path ref="pathRef" :d="initialPath" />
      </g>
    </svg>
  </div>
</template>

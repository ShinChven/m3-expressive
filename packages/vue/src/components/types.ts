import type { MaterialShapeName } from '@m3-expressive/core'

export type ButtonVariant = 'filled' | 'tonal' | 'outlined' | 'text' | 'elevated'
export type ButtonSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'
export type ButtonShape = 'round' | 'square'
export type ButtonGroupVariant = 'standard' | 'connected'
export type SelectionMode = 'none' | 'single' | 'multiple'

export type IconButtonVariant = 'standard' | 'filled' | 'tonal' | 'outlined'
export type IconButtonWidth = 'narrow' | 'default' | 'wide'

export type FabSize = 'sm' | 'md' | 'lg'
export type FabColor = 'primary' | 'surface' | 'secondary' | 'tertiary'

export type CardVariant = 'elevated' | 'filled' | 'outlined'
export type TextFieldVariant = 'filled' | 'outlined'
export type SliderSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

export const LOADING_INDICATOR_SHAPES: readonly MaterialShapeName[] = [
  'soft-burst',
  'cookie-9',
  'pentagon',
  'pill',
  'sunny',
  'cookie-4',
  'oval',
]

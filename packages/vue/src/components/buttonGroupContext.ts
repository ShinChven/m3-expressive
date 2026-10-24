import type { ComputedRef, InjectionKey } from 'vue'
import type { ButtonShape, ButtonSize } from './types'

export interface ButtonGroupContext {
  size: ComputedRef<ButtonSize | undefined>
  shape: ComputedRef<ButtonShape | undefined>
  disabled: ComputedRef<boolean>
  isSelected: (value: string) => boolean
  toggle: (value: string) => void
}

export const buttonGroupKey: InjectionKey<ButtonGroupContext> = Symbol('M3ButtonGroup')

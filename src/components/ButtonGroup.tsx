import {
  Children,
  createContext,
  type HTMLAttributes,
  isValidElement,
  type KeyboardEvent,
  type PointerEvent,
  type Ref,
  useContext,
  useMemo,
  useRef,
} from 'react'
import { handleRovingKeyDown } from '../utils/focus'
import { cx, prefersReducedMotion, useControllableState, useMergedRefs } from '../utils/hooks'

export type ButtonSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'
export type ButtonShape = 'round' | 'square'
export type ButtonGroupVariant = 'standard' | 'connected'

/** What a group tells the buttons inside it. */
export interface ButtonGroupContextValue {
  variant: ButtonGroupVariant
  size: ButtonSize | undefined
  shape: ButtonShape | undefined
  disabled: boolean
  selection: 'single' | 'multiple' | undefined
  isSelected: (value: string) => boolean
  toggle: (value: string) => void
  /** The value of the button that takes the Tab stop in a single-select group. */
  focusValue: string | undefined
}

export const ButtonGroupContext = createContext<ButtonGroupContextValue | null>(null)

/** The surrounding button group, or null outside one. */
export function useButtonGroup(): ButtonGroupContextValue | null {
  return useContext(ButtonGroupContext)
}

const ITEMS = ':scope > .m3-button, :scope > .m3-icon-button'
/** Width added to a pressed button in a standard group (taken from its neighbours). */
const PRESSED_WIDTH_MULTIPLIER = 0.15

interface ButtonGroupBaseProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange' | 'defaultValue'> {
  /**
   * `standard`: separate buttons; the pressed one grows and its neighbours make room.
   * `connected`: buttons joined by 2dp gaps with small inner corners; replaces segmented buttons.
   */
  variant?: ButtonGroupVariant
  /** Size of every button in the group (a button's own `size` wins). */
  size?: ButtonSize
  /** Default shape of every button in the group: round or square. */
  shape?: ButtonShape
  /** Disables every button. */
  disabled?: boolean
  /** Stretches the group to its container; buttons share the width equally. */
  fullWidth?: boolean
  /** Accessible name. Give every selectable group this or `aria-labelledby`. */
  'aria-label'?: string
  /** Ref to the group element. */
  ref?: Ref<HTMLDivElement>
}

interface ButtonGroupActionProps extends ButtonGroupBaseProps {
  /** Without selection the buttons are plain actions (or toggles you control yourself). */
  selection?: undefined
  value?: undefined
  defaultValue?: undefined
  onChange?: undefined
  required?: undefined
}

interface ButtonGroupSingleProps extends ButtonGroupBaseProps {
  /** Single-select: buttons with a `value` behave as a radio group (arrow keys move and select). */
  selection: 'single'
  /** Selected value (controlled). `null` selects nothing. */
  value?: string | null
  /** Initially selected value (uncontrolled). */
  defaultValue?: string | null
  /** Called with the newly selected value, or `null` when it is deselected. */
  onChange?: (value: string | null) => void
  /** Selection required: the selected button cannot be deselected. Defaults to true. */
  required?: boolean
}

interface ButtonGroupMultipleProps extends ButtonGroupBaseProps {
  /** Multi-select: buttons with a `value` toggle on and off independently. */
  selection: 'multiple'
  /** Selected values (controlled). */
  value?: string[]
  /** Initially selected values (uncontrolled). */
  defaultValue?: string[]
  /** Called with the new list of selected values. */
  onChange?: (value: string[]) => void
  /** Selection required: the last selected button cannot be deselected. */
  required?: boolean
}

export type ButtonGroupProps =
  | ButtonGroupActionProps
  | ButtonGroupSingleProps
  | ButtonGroupMultipleProps

/**
 * Button group (M3 Expressive): holds buttons and icon buttons, sets their size and shape, and
 * adds the expressive interactions between them. A `connected` group with `selection` replaces
 * the segmented button.
 */
export function ButtonGroup(props: ButtonGroupProps) {
  const {
    variant = 'standard',
    size,
    shape,
    disabled = false,
    fullWidth,
    selection,
    value: _value,
    defaultValue: _defaultValue,
    onChange: _onChange,
    required: _required,
    className,
    onKeyDown,
    onPointerDown,
    ref,
    children,
    ...rest
  } = props
  const groupRef = useRef<HTMLDivElement>(null)
  const mergedRef = useMergedRefs(ref, groupRef)
  const multiple = selection === 'multiple'
  const required = props.required ?? selection === 'single'
  const [value, setValue] = useControllableState<string | null | string[]>({
    value: props.value,
    defaultValue: props.defaultValue ?? (multiple ? [] : null),
    onChange: props.onChange as ((v: string | null | string[]) => void) | undefined,
  })

  // Without a selection, the first enabled button with a value takes the Tab stop.
  let firstValue: string | undefined
  for (const child of Children.toArray(children)) {
    const childProps = isValidElement(child) ? (child.props as Record<string, unknown>) : null
    if (childProps && typeof childProps.value === 'string' && !childProps.disabled) {
      firstValue = childProps.value
      break
    }
  }

  const context = useMemo<ButtonGroupContextValue>(() => {
    const isSelected = (v: string) => (Array.isArray(value) ? value.includes(v) : value === v)
    return {
      variant,
      size,
      shape,
      disabled,
      selection,
      isSelected,
      toggle: (v: string) => {
        if (multiple) {
          const list = Array.isArray(value) ? value : []
          if (list.includes(v)) {
            if (!(required && list.length === 1)) setValue(list.filter((x) => x !== v))
          } else {
            setValue([...list, v])
          }
        } else if (value === v) {
          if (!required) setValue(null)
        } else {
          setValue(v)
        }
      },
      focusValue: typeof value === 'string' ? value : firstValue,
    }
  }, [variant, size, shape, disabled, selection, multiple, required, value, setValue, firstValue])

  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    onKeyDown?.(e)
    if (e.defaultPrevented || !groupRef.current) return
    if ((e.target as HTMLElement).parentElement !== groupRef.current) return
    const next = handleRovingKeyDown(e, groupRef.current, ITEMS, 'horizontal')
    // Single select moves the selection with focus, as a radio group does.
    const v = next?.dataset.value
    if (selection === 'single' && v !== undefined && !context.isSelected(v)) context.toggle(v)
  }

  // Standard groups: the pressed button grows by 15% and its neighbours shrink to make room.
  const handlePointerDown = (e: PointerEvent<HTMLDivElement>) => {
    onPointerDown?.(e)
    const group = groupRef.current
    if (variant !== 'standard' || !group || e.button !== 0 || prefersReducedMotion()) return
    const items = [...group.querySelectorAll<HTMLElement>(ITEMS)]
    const pressed = items.find((el) => el.contains(e.target as Node))
    if (!pressed || pressed.matches(':disabled, [aria-disabled="true"]') || items.length < 2) return
    squeeze(items, pressed)
  }

  return (
    <div
      role={selection === 'single' ? 'radiogroup' : 'group'}
      {...rest}
      ref={mergedRef}
      className={cx('m3-button-group', className)}
      data-variant={variant}
      data-size={size ?? 'sm'}
      data-shape={shape ?? 'round'}
      data-full-width={fullWidth ? '' : undefined}
      onKeyDown={handleKeyDown}
      onPointerDown={handlePointerDown}
    >
      <ButtonGroupContext.Provider value={context}>{children}</ButtonGroupContext.Provider>
    </div>
  )
}

/** Cancels a released item's pending cleanup without touching its styles. */
const pendingCleanup = new WeakMap<HTMLElement, () => void>()

/** Widens `pressed` and narrows its neighbours until the pointer is released. */
function squeeze(items: HTMLElement[], pressed: HTMLElement) {
  const index = items.indexOf(pressed)
  const neighbours = [items[index - 1], items[index + 1]].filter(Boolean) as HTMLElement[]
  const affected = [pressed, ...neighbours]
  // A quick re-press can land while the previous release is still animating. Start from the
  // widths on screen, and drop the old cleanup so it cannot clear this press's widths later.
  const from = new Map(affected.map((el) => [el, el.getBoundingClientRect().width]))
  for (const el of affected) {
    pendingCleanup.get(el)?.()
    el.style.removeProperty('width')
    el.removeAttribute('data-squeezing')
  }
  // Natural widths: `auto` does not interpolate, so this reads the final layout, not a frame.
  const widths = new Map(affected.map((el) => [el, el.getBoundingClientRect().width]))
  const grow = widths.get(pressed)! * PRESSED_WIDTH_MULTIPLIER
  // Freeze the current widths first so the change animates from them.
  for (const el of affected) {
    el.style.width = `${from.get(el)}px`
    el.setAttribute('data-squeezing', '')
  }
  let released = false
  requestAnimationFrame(() => {
    if (released) return
    pressed.style.width = `${widths.get(pressed)! + grow}px`
    for (const el of neighbours) el.style.width = `${widths.get(el)! - grow / neighbours.length}px`
  })
  const release = () => {
    released = true
    window.removeEventListener('pointerup', release)
    window.removeEventListener('pointercancel', release)
    for (const el of affected) {
      el.style.width = `${widths.get(el)}px`
      // Each item cleans up on its own, so a new press that takes over one of them leaves the
      // others to finish their own release.
      const onEnd = (event: TransitionEvent) => {
        if (event.target === el && event.propertyName === 'width') cleanup()
      }
      const cancel = () => {
        el.removeEventListener('transitionend', onEnd)
        window.clearTimeout(timer)
        pendingCleanup.delete(el)
      }
      const cleanup = () => {
        cancel()
        el.style.removeProperty('width')
        el.removeAttribute('data-squeezing')
      }
      el.addEventListener('transitionend', onEnd)
      // No transition runs when the widths never changed (a very short press).
      const timer = window.setTimeout(cleanup, 1000)
      pendingCleanup.set(el, cancel)
    }
  }
  window.addEventListener('pointerup', release)
  window.addEventListener('pointercancel', release)
}

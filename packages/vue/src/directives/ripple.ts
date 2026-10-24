import { attachRipple } from '@m3-expressive/core'
import type { Directive } from 'vue'

interface RippleElement extends HTMLElement {
  _m3RippleCleanup?: () => void
  _m3RippleSurface?: HTMLElement
}

export const vRipple: Directive<RippleElement, boolean | undefined> = {
  mounted(el, binding) {
    if (binding.value === false) return

    let surface = el.querySelector<HTMLElement>(':scope > .m3-ripple')
    if (!surface) {
      surface = document.createElement('span')
      surface.className = 'm3-ripple'
      surface.setAttribute('aria-hidden', 'true')
      el.insertBefore(surface, el.firstChild)
      el._m3RippleSurface = surface
    }

    el._m3RippleCleanup = attachRipple(surface, el, {
      disabled: false,
    })
  },
  updated(el, binding) {
    if (binding.value === binding.oldValue) return
    el._m3RippleCleanup?.()
    if (binding.value !== false && el._m3RippleSurface) {
      el._m3RippleCleanup = attachRipple(el._m3RippleSurface, el, {
        disabled: false,
      })
    }
  },
  unmounted(el) {
    el._m3RippleCleanup?.()
    if (el._m3RippleSurface && el._m3RippleSurface.parentElement === el) {
      el.removeChild(el._m3RippleSurface)
    }
  },
}

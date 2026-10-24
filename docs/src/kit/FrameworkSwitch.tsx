import { MenuButton, MenuItem } from '@m3-expressive/react'
import { type Framework, useFramework } from './framework'

const OPTIONS: { key: Framework; label: string; icon: string }[] = [
  { key: 'react', label: 'React', icon: 'code' },
  { key: 'vue', label: 'Vue 3', icon: 'widgets' },
  { key: 'html', label: 'HTML/CSS', icon: 'html' },
]

export function FrameworkSwitch() {
  const { framework, setFramework } = useFramework()
  const current = OPTIONS.find((o) => o.key === framework) ?? OPTIONS[0]!

  return (
    <div className="g-framework-switch">
      <MenuButton
        placement="bottom-end"
        trigger={(triggerProps) => (
          <button
            {...triggerProps}
            type="button"
            className="g-framework-switch__trigger m3-focus-ring"
            aria-label={`Current framework: ${current.label}. Click to switch framework.`}
          >
            <span className="m3-icon g-framework-switch__icon" aria-hidden="true">
              {current.icon}
            </span>
            <span className="g-framework-switch__label">{current.label}</span>
            <span className="m3-icon g-framework-switch__arrow" aria-hidden="true">
              arrow_drop_down
            </span>
          </button>
        )}
      >
        {OPTIONS.map((opt) => (
          <MenuItem
            key={opt.key}
            type="radio"
            checked={framework === opt.key}
            icon={opt.icon}
            onSelect={() => setFramework(opt.key)}
          >
            {opt.label}
          </MenuItem>
        ))}
      </MenuButton>
    </div>
  )
}

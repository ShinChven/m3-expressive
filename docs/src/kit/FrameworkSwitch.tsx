import { MenuButton, MenuItem } from '@m3-expressive/react'
import type { ReactElement } from 'react'
import { type Framework, useFramework } from './framework'

function ReactIcon({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="-11.5 -10.23174 23 20.46348"
      fill="none"
      className="g-framework-icon"
      aria-hidden="true"
    >
      <title>React</title>
      <circle cx="0" cy="0" r="2.05" fill="#149ECA" />
      <g stroke="#149ECA" strokeWidth="1" fill="none">
        <ellipse rx="11" ry="4.2" />
        <ellipse rx="11" ry="4.2" transform="rotate(60)" />
        <ellipse rx="11" ry="4.2" transform="rotate(120)" />
      </g>
    </svg>
  )
}

function VueIcon({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 256 221"
      fill="none"
      className="g-framework-icon"
      aria-hidden="true"
    >
      <title>Vue</title>
      <path d="M204.8 0H256L128 220.8 0 0h97.92L128 51.2 157.44 0h47.36z" fill="#41B883" />
      <path d="M0 0l128 220.8L256 0h-51.2L128 132.48 49.92 0H0z" fill="#41B883" />
      <path d="M49.92 0L128 132.48 204.8 0h-47.36L128 51.2 97.92 0H49.92z" fill="#34495E" />
    </svg>
  )
}

function HtmlIcon({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="#E44D26"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="g-framework-icon"
      aria-hidden="true"
    >
      <title>HTML/CSS</title>
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  )
}

const OPTIONS: { key: Framework; label: string; icon: ReactElement }[] = [
  { key: 'react', label: 'React', icon: <ReactIcon /> },
  { key: 'vue', label: 'Vue 3', icon: <VueIcon /> },
  { key: 'html', label: 'HTML / CSS', icon: <HtmlIcon /> },
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
            {current.icon}
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

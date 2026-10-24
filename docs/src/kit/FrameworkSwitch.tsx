import { Button, ButtonGroup } from '@m3-expressive/react'
import { type Framework, useFramework } from './framework'

const OPTIONS: { key: Framework; label: string; icon: string }[] = [
  { key: 'react', label: 'React', icon: 'code' },
  { key: 'vue', label: 'Vue 3', icon: 'widgets' },
  { key: 'html', label: 'HTML/CSS', icon: 'html' },
]

export function FrameworkSwitch({ size = 'xs' }: { size?: 'xs' | 'sm' }) {
  const { framework, setFramework } = useFramework()

  return (
    <ButtonGroup
      variant="connected"
      selection="single"
      size={size}
      aria-label="Target framework"
      className="g-framework-switch"
    >
      {OPTIONS.map((opt) => (
        <Button
          key={opt.key}
          value={opt.key}
          selected={framework === opt.key}
          icon={opt.icon}
          onClick={() => setFramework(opt.key)}
        >
          {opt.label}
        </Button>
      ))}
    </ButtonGroup>
  )
}

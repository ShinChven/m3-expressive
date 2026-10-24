import { Button, CircularProgress, LinearProgress } from '@m3-expressive/react'
import { useEffect, useState } from 'react'
import { defineDoc } from '../kit/doc'

export const doc = defineDoc({
  slug: 'progress',
  name: 'Progress indicator',
  group: 'communication',
  icon: 'progress_activity',
  order: 2,
  summary:
    'Progress indicators show how much of a longer task is done. Use `LinearProgress` for uploads and page loads and `CircularProgress` in small places; the wavy shape adds expression. For short waits, use a loading indicator.',
  imports: ['LinearProgress', 'CircularProgress', 'Button'],
  preview: () => (
    <div className="g-preview-col">
      <LinearProgress value={60} shape="wavy" aria-label="Upload" />
      <LinearProgress aria-label="Loading" />
      <div className="g-preview-row">
        <CircularProgress value={70} shape="wavy" aria-label="Export" />
        <CircularProgress aria-label="Loading" />
      </div>
    </div>
  ),
  playground: {
    controls: {
      type: { type: 'select', options: ['linear', 'circular'], default: 'linear' },
      shape: { type: 'select', options: ['flat', 'wavy'], default: 'flat' },
      mode: {
        type: 'select',
        options: ['determinate', 'indeterminate'],
        default: 'determinate',
      },
      value: { type: 'number', default: 40, min: 0, max: 100 },
      buffer: { type: 'number', default: 0, min: 0, max: 100, step: 5, label: 'Buffer (linear)' },
      thickness: {
        type: 'number',
        default: 0,
        min: 0,
        max: 16,
        label: 'Thickness (0 = default)',
      },
      size: {
        type: 'number',
        default: 0,
        min: 0,
        max: 96,
        step: 4,
        label: 'Size (circular, 0 = default)',
      },
      label: { type: 'text', default: 'Uploading vacation photos', label: 'Accessible name' },
    },
    render: (v) => {
      const value = v.mode === 'determinate' ? v.value : undefined
      return v.type === 'linear' ? (
        <LinearProgress
          value={value}
          shape={v.shape}
          buffer={value !== undefined && v.buffer ? v.buffer : undefined}
          thickness={v.thickness || undefined}
          aria-label={v.label}
        />
      ) : (
        <CircularProgress
          value={value}
          shape={v.shape}
          size={v.size || undefined}
          thickness={v.thickness || undefined}
          aria-label={v.label}
        />
      )
    },
    code: (v, { jsx, changed }) => {
      const value = v.mode === 'determinate' ? v.value : undefined
      if (v.type === 'linear') {
        return jsx('LinearProgress', {
          value,
          ...changed(v, ['shape']),
          buffer: value !== undefined && v.buffer ? v.buffer : undefined,
          thickness: v.thickness || undefined,
          'aria-label': v.label,
        })
      }
      return jsx('CircularProgress', {
        value,
        ...changed(v, ['shape']),
        size: v.size || undefined,
        thickness: v.thickness || undefined,
        'aria-label': v.label,
      })
    },
  },
  api: [
    {
      name: 'LinearProgress',
      interfaces: ['ProgressBaseProps', 'LinearProgressProps'],
      inherits: 'Also accepts native `<div>` attributes, except `children`.',
    },
    {
      name: 'CircularProgress',
      interfaces: ['ProgressBaseProps', 'CircularProgressProps'],
      inherits: 'Also accepts native `<div>` attributes, except `children`.',
    },
  ],
  guidelines: [
    'Use a determinate indicator when you know how much is done. For waits of a few seconds with no known progress, prefer a loading indicator.',
    'Give every indicator an `aria-label` that names the task, such as “Uploading vacation photos”.',
    'Show one indicator for one task. For many items, show progress on each item or one indicator for the whole set, not both.',
    'Show the indicator only while the task runs, and replace it with the result when it ends.',
  ],
})

/**
 * Linear
 * A determinate bar shows a stop mark at the end of its track. Leave out `value` for an indeterminate bar.
 */
export function ExampleLinear() {
  return (
    <div className="g-stack g-fill">
      <LinearProgress value={25} aria-label="Importing contacts" />
      <LinearProgress value={70} aria-label="Uploading video" />
      <LinearProgress aria-label="Loading messages" />
    </div>
  )
}

/**
 * Circular
 * `size` sets the diameter in px (40 by default). The stroke is 4px, or 8px for a thick indicator.
 */
export function ExampleCircular() {
  return (
    <>
      <CircularProgress value={30} aria-label="Exporting calendar" />
      <CircularProgress value={75} size={52} thickness={8} aria-label="Preparing download" />
      <CircularProgress size={24} aria-label="Loading" />
      <CircularProgress aria-label="Loading" />
    </>
  )
}

/**
 * Wavy
 * `shape="wavy"` draws the active indicator as a wave that moves while it fills (M3 Expressive). The wave flattens near the start and the end.
 */
export function ExampleWavy() {
  const [value, setValue] = useState(45)
  return (
    <div className="g-stack g-fill">
      <LinearProgress shape="wavy" value={value} aria-label="Downloading maps" />
      <LinearProgress shape="wavy" aria-label="Loading playlist" />
      <LinearProgress shape="wavy" thickness={8} value={70} amplitude={4} aria-label="Syncing" />
      <div className="g-row">
        <CircularProgress shape="wavy" value={value} aria-label="Downloading maps" />
        <CircularProgress shape="wavy" aria-label="Loading playlist" />
        <Button variant="tonal" onClick={() => setValue((v) => (v >= 100 ? 0 : v + 15))}>
          Advance
        </Button>
      </div>
    </div>
  )
}

/**
 * Buffer and thickness
 * `buffer` shows a second value behind the main one, such as how much of a video has loaded. `thickness` sets the height of a linear bar or the stroke of a circle.
 */
export function ExampleBuffer() {
  return (
    <div className="g-stack g-fill">
      <LinearProgress value={30} buffer={65} aria-label="Video playback" />
      <LinearProgress value={60} thickness={8} aria-label="Setup steps" />
      <div className="g-row">
        <CircularProgress value={60} size={56} thickness={8} aria-label="Storage used" />
        <CircularProgress size={56} thickness={2} aria-label="Loading" />
      </div>
    </div>
  )
}

/**
 * Upload
 * A determinate bar follows a real task. The text under it repeats the value for people who cannot see the bar well.
 */
export function ExampleUpload() {
  const [progress, setProgress] = useState<number | null>(null)
  useEffect(() => {
    if (progress === null || progress >= 100) return
    const timer = window.setTimeout(() => setProgress((p) => Math.min(100, (p ?? 0) + 10)), 300)
    return () => window.clearTimeout(timer)
  }, [progress])
  const done = progress === 100
  return (
    <div className="g-stack" style={{ width: 'min(100%, 360px)', alignItems: 'flex-start' }}>
      <Button
        icon="upload"
        variant="tonal"
        disabled={progress !== null && !done}
        onClick={() => setProgress(0)}
      >
        Upload 3 images
      </Button>
      {progress !== null && (
        <>
          <LinearProgress value={progress} aria-label="Uploading 3 images" />
          <span className="g-muted" role="status">
            {done ? 'Upload complete' : `Uploading: ${progress}%`}
          </span>
        </>
      )}
    </div>
  )
}

/**
 * Busy items
 * A small circular indicator shows that one item is busy while the rest of the page stays usable. Hide it from assistive tech when the text already says it.
 */
export function ExampleInline() {
  return (
    <div className="g-stack">
      <div className="g-row" role="status">
        <CircularProgress size={20} aria-hidden />
        <span>Creating thumbnails</span>
      </div>
      <div className="g-row" role="status">
        <CircularProgress size={20} aria-hidden />
        <span>Syncing 48 files</span>
      </div>
    </div>
  )
}

import { fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { useState } from 'react'
import {
  AssistChip,
  Checkbox,
  ChipSet,
  FilterChip,
  InputChip,
  Radio,
  RadioGroup,
  RangeSlider,
  Select,
  Slider,
  Switch,
  TextField,
} from '../src'

describe('TextField', () => {
  it('associates the label, supporting text and error state', () => {
    const { rerender } = render(
      <TextField label="Title" supportingText="Shown in search results" />,
    )
    const input = screen.getByLabelText('Title')
    expect(input).toHaveAccessibleDescription('Shown in search results')
    expect(input).not.toHaveAttribute('aria-invalid')
    rerender(
      <TextField
        label="Title"
        error
        errorText="Title is required"
        supportingText="Shown in search results"
      />,
    )
    expect(input).toHaveAttribute('aria-invalid', 'true')
    expect(input).toHaveAccessibleDescription('Title is required')
  })

  it('counts characters against maxLength', async () => {
    render(<TextField label="Username" maxLength={10} />)
    await userEvent.type(screen.getByLabelText('Username'), 'abc')
    expect(screen.getByText('3 / 10')).toBeInTheDocument()
  })

  it('floats the label once the field has a value', async () => {
    render(<TextField label="Name" />)
    const field = screen.getByLabelText('Name').closest('.m3-field')!
    expect(field).not.toHaveAttribute('data-populated')
    await userEvent.type(screen.getByLabelText('Name'), 'x')
    expect(field).toHaveAttribute('data-populated')
  })

  it('reveals a password with the toggle button', async () => {
    render(<TextField label="Password" type="password" passwordToggle />)
    const input = screen.getByLabelText('Password')
    expect(input).toHaveAttribute('type', 'password')
    await userEvent.click(screen.getByRole('button', { name: 'Show password' }))
    expect(input).toHaveAttribute('type', 'text')
  })

  it('renders a textarea for multiline fields and reports the value', async () => {
    const onValueChange = vi.fn()
    render(<TextField label="Body" multiline rows={3} onValueChange={onValueChange} />)
    const textarea = screen.getByLabelText('Body')
    expect(textarea.tagName).toBe('TEXTAREA')
    await userEvent.type(textarea, 'hi')
    expect(onValueChange).toHaveBeenLastCalledWith('hi')
  })

  it('clears the value with the clear button', async () => {
    function Clearable() {
      const [value, setValue] = useState('hello')
      return (
        <TextField label="Q" value={value} onValueChange={setValue} onClear={() => setValue('')} />
      )
    }
    render(<Clearable />)
    await userEvent.click(screen.getByRole('button', { name: 'Clear' }))
    expect(screen.getByLabelText('Q')).toHaveValue('')
  })
})

describe('Select', () => {
  const options = [
    { value: 'open', label: 'Open' },
    { value: 'done', label: 'Done' },
    { value: 'archived', label: 'Archived', disabled: true },
  ]

  it('opens with the keyboard and selects an option', async () => {
    const onChange = vi.fn()
    render(<Select label="Status" options={options} onChange={onChange} name="status" />)
    const combo = screen.getByRole('combobox', { name: 'Status' })
    combo.focus()
    await userEvent.keyboard('{ArrowDown}')
    expect(combo).toHaveAttribute('aria-expanded', 'true')
    expect(screen.getByRole('listbox')).toBeInTheDocument()
    await userEvent.keyboard('{ArrowDown}{Enter}')
    expect(onChange).toHaveBeenCalledWith('done')
    expect(combo).toHaveAttribute('aria-expanded', 'false')
    expect(combo).toHaveTextContent('Done')
    expect(document.querySelector('input[name="status"]')).toHaveValue('done')
  })

  it('skips disabled options and closes on Escape', async () => {
    render(<Select label="Status" options={options} defaultValue="done" />)
    const combo = screen.getByRole('combobox', { name: 'Status' })
    combo.focus()
    await userEvent.keyboard('{ArrowDown}{ArrowDown}')
    expect(combo.getAttribute('aria-activedescendant')).toMatch(/option-1$/)
    await userEvent.keyboard('{Escape}')
    expect(combo).toHaveAttribute('aria-expanded', 'false')
  })

  it('selects with a mouse click', async () => {
    const onChange = vi.fn()
    render(<Select label="Status" options={options} onChange={onChange} />)
    await userEvent.click(screen.getByRole('combobox', { name: 'Status' }))
    await userEvent.click(screen.getByRole('option', { name: 'Open' }))
    expect(onChange).toHaveBeenCalledWith('open')
  })
})

describe('selection controls', () => {
  it('sets the indeterminate DOM state on checkboxes', () => {
    render(<Checkbox label="All" indeterminate />)
    expect(screen.getByRole('checkbox', { name: 'All' })).toHaveProperty('indeterminate', true)
  })

  it('selects radios through the group', async () => {
    const onChange = vi.fn()
    render(
      <RadioGroup aria-label="Visibility" defaultValue="public" onChange={onChange}>
        <Radio value="public" label="Public" />
        <Radio value="private" label="Private" />
      </RadioGroup>,
    )
    expect(screen.getByRole('radio', { name: 'Public' })).toBeChecked()
    await userEvent.click(screen.getByText('Private'))
    expect(onChange).toHaveBeenCalledWith('private')
    expect(screen.getByRole('radio', { name: 'Private' })).toBeChecked()
  })

  it('exposes switches with the switch role', async () => {
    render(<Switch label="Enable sync" />)
    const sw = screen.getByRole('switch', { name: 'Enable sync' })
    expect(sw).not.toBeChecked()
    await userEvent.click(sw)
    expect(sw).toBeChecked()
  })
})

describe('Slider', () => {
  it('changes value with the keyboard', () => {
    const onChange = vi.fn()
    const onChangeEnd = vi.fn()
    render(
      <Slider
        aria-label="Volume"
        defaultValue={50}
        step={5}
        onChange={onChange}
        onChangeEnd={onChangeEnd}
      />,
    )
    const thumb = screen.getByRole('slider', { name: 'Volume' })
    fireEvent.keyDown(thumb, { key: 'ArrowRight' })
    expect(onChange).toHaveBeenLastCalledWith(55)
    expect(onChangeEnd).toHaveBeenLastCalledWith(55)
    fireEvent.keyDown(thumb, { key: 'End' })
    expect(thumb).toHaveAttribute('aria-valuenow', '100')
    fireEvent.keyDown(thumb, { key: 'PageDown' })
    expect(thumb).toHaveAttribute('aria-valuenow', '90')
  })

  it('keeps range thumbs from crossing', () => {
    const onChange = vi.fn()
    render(
      <RangeSlider
        thumbLabels={['Min', 'Max']}
        defaultValue={[40, 50]}
        step={10}
        onChange={onChange}
      />,
    )
    const min = screen.getByRole('slider', { name: 'Min' })
    fireEvent.keyDown(min, { key: 'ArrowRight' })
    fireEvent.keyDown(min, { key: 'ArrowRight' })
    expect(onChange).toHaveBeenLastCalledWith([50, 50])
    expect(screen.getByRole('slider', { name: 'Max' })).toHaveAttribute('aria-valuemin', '50')
  })
})

describe('chips', () => {
  it('toggles filter chips', async () => {
    const onSelectedChange = vi.fn()
    render(<FilterChip label="Unread" selected={false} onSelectedChange={onSelectedChange} />)
    const chip = screen.getByRole('button', { name: 'Unread' })
    expect(chip).toHaveAttribute('aria-pressed', 'false')
    await userEvent.click(chip)
    expect(onSelectedChange).toHaveBeenCalledWith(true)
  })

  it('removes input chips with the button or Backspace', async () => {
    const onRemove = vi.fn()
    render(<InputChip label="travel" onRemove={onRemove} />)
    await userEvent.click(screen.getByRole('button', { name: 'Remove travel' }))
    expect(onRemove).toHaveBeenCalledTimes(1)
    const chip = screen.getByText('travel').closest('[data-chip-focusable]') as HTMLElement
    chip.focus()
    await userEvent.keyboard('{Backspace}')
    expect(onRemove).toHaveBeenCalledTimes(2)
  })

  it('moves focus between chips with arrow keys', async () => {
    render(
      <ChipSet aria-label="Actions">
        <AssistChip label="One" />
        <AssistChip label="Two" />
      </ChipSet>,
    )
    screen.getByRole('button', { name: 'One' }).focus()
    await userEvent.keyboard('{ArrowRight}')
    expect(screen.getByRole('button', { name: 'Two' })).toHaveFocus()
  })
})

import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { useState } from 'react'
import {
  Calendar,
  DatePickerDialog,
  DatePickerField,
  DateRangePickerDialog,
  M3LocaleProvider,
  TimePickerDialog,
} from '../src'

describe('Calendar', () => {
  it('shows the month of the value and selects a day', async () => {
    const onChange = vi.fn()
    render(<Calendar value="2026-10-23" onChange={onChange} />)
    expect(screen.getByRole('grid', { name: 'October 2026' })).toBeInTheDocument()
    await userEvent.click(screen.getByRole('button', { name: 'Friday, October 30, 2026' }))
    expect(onChange).toHaveBeenCalledWith('2026-10-30')
  })

  it('moves focus with arrow keys across months', async () => {
    render(<Calendar value="2026-10-31" />)
    screen.getByRole('button', { name: 'Saturday, October 31, 2026' }).focus()
    await userEvent.keyboard('{ArrowRight}')
    expect(screen.getByRole('grid', { name: 'November 2026' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Sunday, November 1, 2026' })).toHaveFocus()
    await userEvent.keyboard('{PageUp}')
    expect(screen.getByRole('button', { name: 'Thursday, October 1, 2026' })).toHaveFocus()
  })

  it('disables dates outside min and max', () => {
    render(<Calendar value="2026-10-15" min="2026-10-10" max="2026-10-20" />)
    expect(screen.getByRole('button', { name: 'Friday, October 9, 2026' })).toBeDisabled()
    expect(screen.getByRole('button', { name: 'Saturday, October 10, 2026' })).toBeEnabled()
    expect(screen.getByRole('button', { name: 'Next month' })).toBeDisabled()
  })

  it('uses the regional first day of the week and replaced strings', () => {
    render(
      <M3LocaleProvider locale="en-GB" messages={{ nextMonth: 'Later' }}>
        <Calendar value="2026-10-23" />
      </M3LocaleProvider>,
    )
    expect(screen.getByRole('grid', { name: 'October 2026' })).toBeInTheDocument()
    const headers = screen.getAllByRole('columnheader')
    expect(headers[0]).toHaveAttribute('abbr', 'Monday')
    expect(screen.getByRole('button', { name: 'Later' })).toBeInTheDocument()
  })

  it('picks a year from the year grid', async () => {
    render(<Calendar value="2026-10-23" />)
    await userEvent.click(screen.getByRole('button', { name: /Select year/ }))
    await userEvent.click(screen.getByRole('option', { name: '2030' }))
    expect(screen.getByRole('grid', { name: 'October 2030' })).toBeInTheDocument()
  })
})

describe('date picker dialogs', () => {
  it('confirms the chosen date', async () => {
    const onConfirm = vi.fn()
    render(<DatePickerDialog open onClose={() => {}} value="2026-10-23" onConfirm={onConfirm} />)
    await userEvent.click(screen.getByRole('button', { name: 'Monday, October 26, 2026' }))
    await userEvent.click(screen.getByRole('button', { name: 'OK' }))
    expect(onConfirm).toHaveBeenCalledWith('2026-10-26')
  })

  it('validates typed dates in input mode', async () => {
    const onConfirm = vi.fn()
    render(
      <DatePickerDialog
        open
        onClose={() => {}}
        onConfirm={onConfirm}
        initialMode="input"
        max="2026-12-31"
      />,
    )
    const input = screen.getByRole('textbox', { name: 'Select date' })
    await userEvent.type(input, '13/45/2026')
    expect(screen.getByText('Invalid date')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'OK' })).toBeDisabled()
    await userEvent.clear(input)
    await userEvent.type(input, '01/02/2027')
    expect(screen.getByText('Date is out of range')).toBeInTheDocument()
    await userEvent.clear(input)
    await userEvent.type(input, '11/02/2026')
    await userEvent.click(screen.getByRole('button', { name: 'OK' }))
    expect(onConfirm).toHaveBeenCalledWith('2026-11-02')
  })

  it('selects a range start and end', async () => {
    const onConfirm = vi.fn()
    render(
      <DateRangePickerDialog
        open
        onClose={() => {}}
        value={['2026-10-05', null]}
        onConfirm={onConfirm}
      />,
    )
    await userEvent.click(screen.getByRole('button', { name: 'Thursday, October 8, 2026' }))
    await userEvent.click(screen.getByRole('button', { name: 'OK' }))
    expect(onConfirm).toHaveBeenCalledWith(['2026-10-05', '2026-10-08'])
  })
})

describe('DatePickerField', () => {
  it('commits typed dates in the locale format', async () => {
    function Example() {
      const [value, setValue] = useState<string | null>(null)
      return (
        <>
          <DatePickerField label="Due date" value={value} onChange={setValue} />
          <output>{value ?? 'none'}</output>
        </>
      )
    }
    render(<Example />)
    const input = screen.getByRole('textbox', { name: 'Due date' })
    await userEvent.type(input, '10/23/2026')
    await userEvent.tab()
    expect(screen.getByRole('status')).toHaveTextContent('2026-10-23')
  })

  it('opens a docked calendar and picks a date', async () => {
    const onChange = vi.fn()
    render(<DatePickerField label="Due date" value="2026-10-23" onChange={onChange} />)
    await userEvent.click(screen.getByRole('button', { name: 'Select date' }))
    const popover = screen.getByRole('dialog', { name: 'Select date' })
    expect(popover).toBeInTheDocument()
    await userEvent.click(screen.getByRole('button', { name: 'Saturday, October 24, 2026' }))
    expect(onChange).toHaveBeenCalledWith('2026-10-24')
    await waitFor(() => expect(screen.queryByRole('dialog')).not.toBeInTheDocument())
  })
})

describe('TimePickerDialog', () => {
  it('sets a time in keyboard-input mode (24-hour)', async () => {
    const onConfirm = vi.fn()
    render(
      <TimePickerDialog
        open
        onClose={() => {}}
        value="09:30"
        hour12={false}
        initialMode="input"
        onConfirm={onConfirm}
      />,
    )
    const hour = screen.getByRole('textbox', { name: 'Hour' })
    await userEvent.clear(hour)
    await userEvent.type(hour, '14')
    const minute = screen.getByRole('textbox', { name: 'Minute' })
    await userEvent.clear(minute)
    await userEvent.type(minute, '05')
    await userEvent.click(screen.getByRole('button', { name: 'OK' }))
    expect(onConfirm).toHaveBeenCalledWith('14:05')
  })

  it('switches AM/PM and adjusts the dial with arrow keys (12-hour)', async () => {
    const onConfirm = vi.fn()
    render(<TimePickerDialog open onClose={() => {}} value="09:00" hour12 onConfirm={onConfirm} />)
    await userEvent.click(screen.getByRole('radio', { name: 'PM' }))
    const dial = screen.getByRole('slider', { name: 'Hour' })
    dial.focus()
    await userEvent.keyboard('{ArrowUp}{ArrowUp}{ArrowUp}')
    expect(dial).toHaveAttribute('aria-valuenow', '12')
    await userEvent.click(screen.getByRole('button', { name: 'OK' }))
    // 12 PM stays in the PM period: noon.
    expect(onConfirm).toHaveBeenCalledWith('12:00')
  })
})

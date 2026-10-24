import {
  addDays,
  addMonths,
  datePattern,
  dayOfWeek,
  formatPattern,
  monthGrid,
  parseISODate,
  parsePattern,
  toISODate,
  weekdayNames,
} from '../src'

describe('plain dates', () => {
  it('parses and formats ISO dates, rejecting impossible ones', () => {
    expect(parseISODate('2026-02-28')).toEqual({ year: 2026, month: 2, day: 28 })
    expect(parseISODate('2026-02-29')).toBeNull()
    expect(parseISODate('2028-02-29')).toEqual({ year: 2028, month: 2, day: 29 })
    expect(parseISODate('2026-13-01')).toBeNull()
    expect(parseISODate('26-01-01')).toBeNull()
    expect(toISODate({ year: 987, month: 3, day: 4 })).toBe('0987-03-04')
  })

  it('adds days and months across boundaries', () => {
    expect(toISODate(addDays({ year: 2026, month: 12, day: 31 }, 1))).toBe('2027-01-01')
    expect(toISODate(addDays({ year: 2026, month: 3, day: 1 }, -1))).toBe('2026-02-28')
    // Day clamps to the end of shorter months.
    expect(toISODate(addMonths({ year: 2026, month: 1, day: 31 }, 1))).toBe('2026-02-28')
    expect(toISODate(addMonths({ year: 2026, month: 1, day: 15 }, -13))).toBe('2024-12-15')
  })

  it('lays out a month grid starting on the given weekday', () => {
    // October 2026 starts on a Thursday.
    expect(dayOfWeek({ year: 2026, month: 10, day: 1 })).toBe(4)
    const sundayFirst = monthGrid(2026, 10, 0)
    expect(sundayFirst[0]!.slice(0, 4)).toEqual([null, null, null, null])
    expect(sundayFirst[0]![4]).toEqual({ year: 2026, month: 10, day: 1 })
    const mondayFirst = monthGrid(2026, 10, 1)
    expect(mondayFirst[0]![3]).toEqual({ year: 2026, month: 10, day: 1 })
    expect(mondayFirst.every((row) => row.length === 7)).toBe(true)
  })

  it('names weekdays in the locale', () => {
    expect(weekdayNames('en-US', 0, 'short')[0]).toBe('Sun')
    expect(weekdayNames('en-US', 1, 'short')[0]).toBe('Mon')
  })
})

describe('locale date patterns', () => {
  it('uses month/day/year for en-US, day/month/year for en-GB and year-month-day for en-CA', () => {
    const date = { year: 2026, month: 10, day: 23 }
    const us = datePattern('en-US')
    expect(us.placeholder).toBe('MM/DD/YYYY')
    expect(formatPattern(date, us)).toBe('10/23/2026')
    const gb = datePattern('en-GB')
    expect(gb.order).toEqual(['day', 'month', 'year'])
    expect(formatPattern(date, gb)).toBe('23/10/2026')
    const ca = datePattern('en-CA')
    expect(ca.order).toEqual(['year', 'month', 'day'])
    expect(formatPattern(date, ca)).toBe('2026-10-23')
  })

  it('parses typed dates with any separator and validates them', () => {
    const us = datePattern('en-US')
    expect(parsePattern('10-23-2026', us)).toEqual({ year: 2026, month: 10, day: 23 })
    expect(parsePattern('2/30/2026', us)).toBeNull()
    expect(parsePattern('10/23/26', us)).toBeNull()
    expect(parsePattern('10/23', us)).toBeNull()
  })
})

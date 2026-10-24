import '@testing-library/jest-dom/vitest'
import { SnackbarProvider } from '@m3-expressive/react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router'
import { describe, expect, it, vi } from 'vitest'
import { ExampleNames } from '../src/docs/icon'
import { COMMON_ICON_CATEGORIES } from '../src/docs/icon-categories'
import { ALL_ICON_NAMES } from '../src/docs/material-symbols-names'
import { IconsPage } from '../src/pages/Icons'

describe('Common Icons by Category (ExampleNames)', () => {
  it('defines structured categories of common icons', () => {
    expect(COMMON_ICON_CATEGORIES.length).toBeGreaterThanOrEqual(6)
    const allCommon = COMMON_ICON_CATEGORIES.flatMap((c) => c.icons)
    expect(allCommon).toContain('home')
    expect(allCommon).toContain('search')
    expect(allCommon).toContain('settings')
  })

  it('renders common icon categories and banner linking to all icons', () => {
    render(
      <SnackbarProvider>
        <ExampleNames />
      </SnackbarProvider>,
    )

    // Check banner mentioning 3,932 supported icons and link to /icons
    expect(screen.getByText(/3,932 Material Symbols Supported/i)).toBeInTheDocument()
    const link = screen.getByRole('link', { name: /browse all 3,932 icons/i })
    expect(link).toHaveAttribute('href', '/icons')

    // Check category filter chips
    expect(screen.getByRole('button', { name: /navigation/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /actions/i })).toBeInTheDocument()

    // Check search input
    const searchInput = screen.getByRole('textbox', { name: /filter common icons/i })
    expect(searchInput).toBeInTheDocument()
  })

  it('filters common icons and copies ligature name on click', async () => {
    const writeText = vi.fn().mockResolvedValue(undefined)
    Object.assign(navigator, {
      clipboard: { writeText },
    })

    render(
      <SnackbarProvider>
        <ExampleNames />
      </SnackbarProvider>,
    )

    const searchInput = screen.getByRole('textbox', { name: /filter common icons/i })
    await userEvent.type(searchInput, 'home')

    const homeBtn = screen.getByRole('button', { name: 'Copy icon home' })
    expect(homeBtn).toBeInTheDocument()

    await userEvent.click(homeBtn)
    expect(writeText).toHaveBeenCalledWith('home')
  })
})

describe('All Icons Page (IconsPage)', () => {
  it('contains all 3,932 Material Symbols', () => {
    expect(ALL_ICON_NAMES.length).toBe(3932)
  })

  it('renders all icons catalog with search and pagination', () => {
    render(
      <MemoryRouter>
        <SnackbarProvider>
          <IconsPage />
        </SnackbarProvider>
      </MemoryRouter>,
    )

    expect(screen.getByText(/Material Symbols Catalog/i)).toBeInTheDocument()
    const searchInput = screen.getByRole('textbox', { name: /search all icons/i })
    expect(searchInput).toBeInTheDocument()
    expect(screen.getAllByText(/3,932/).length).toBeGreaterThan(0)
    expect(screen.getByText(/Page 1 of/i)).toBeInTheDocument()
  })

  it('filters all icons by query', async () => {
    render(
      <MemoryRouter>
        <SnackbarProvider>
          <IconsPage />
        </SnackbarProvider>
      </MemoryRouter>,
    )

    const searchInput = screen.getByRole('textbox', { name: /search all icons/i })
    await userEvent.type(searchInput, 'rocket_launch')

    expect(screen.getByRole('button', { name: 'Copy icon rocket_launch' })).toBeInTheDocument()
  })
})

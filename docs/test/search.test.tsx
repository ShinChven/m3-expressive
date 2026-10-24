import '@testing-library/jest-dom/vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router'
import { describe, expect, it, vi } from 'vitest'
import { SearchDialog, SearchTrigger } from '../src/kit/SearchDialog'

describe('SearchTrigger', () => {
  it('renders trigger button and handles click', async () => {
    const onClick = vi.fn()
    render(<SearchTrigger onClick={onClick} />)
    const btn = screen.getByRole('button', { name: /search documentation/i })
    expect(btn).toBeInTheDocument()
    await userEvent.click(btn)
    expect(onClick).toHaveBeenCalled()
  })
})

describe('SearchDialog', () => {
  it('renders search input when open and filters items', async () => {
    const onClose = vi.fn()
    render(
      <MemoryRouter>
        <SearchDialog open={true} onClose={onClose} />
      </MemoryRouter>,
    )

    const input = screen.getByRole('combobox', { name: /search documentation/i })
    expect(input).toBeInTheDocument()

    // Type a search term
    await userEvent.type(input, 'dialog')

    // Expect Dialog option to be present
    const dialogOption = screen.getByText('Dialog')
    expect(dialogOption).toBeInTheDocument()
  })

  it('searches by synonyms/keywords (e.g. "modal" -> Dialog)', async () => {
    const onClose = vi.fn()
    render(
      <MemoryRouter>
        <SearchDialog open={true} onClose={onClose} />
      </MemoryRouter>,
    )

    const input = screen.getByRole('combobox', { name: /search documentation/i })
    await userEvent.type(input, 'modal')

    expect(screen.getByText('Dialog')).toBeInTheDocument()
  })

  it('closes when ESC button is clicked or Escape key is pressed', async () => {
    const onClose = vi.fn()
    render(
      <MemoryRouter>
        <SearchDialog open={true} onClose={onClose} />
      </MemoryRouter>,
    )

    const escBtn = screen.getByRole('button', { name: /close search/i })
    await userEvent.click(escBtn)
    expect(onClose).toHaveBeenCalled()
  })

  it('displays empty state when no items match', async () => {
    render(
      <MemoryRouter>
        <SearchDialog open={true} onClose={vi.fn()} />
      </MemoryRouter>,
    )

    const input = screen.getByRole('combobox', { name: /search documentation/i })
    await userEvent.type(input, 'xyznonexistent123')

    expect(screen.getByText(/no results for “xyznonexistent123”/i)).toBeInTheDocument()
  })
})

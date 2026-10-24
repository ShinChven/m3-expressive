import { render, screen } from '@testing-library/react'
import { MemoryRouter, useLocation } from 'react-router'
import { App } from '../src/App'

function Location() {
  return <span data-testid="location">{useLocation().pathname}</span>
}

describe('base url and subpath routing', () => {
  it('renders root page correctly with a subpath basename', async () => {
    render(
      <MemoryRouter basename="/m3-expressive" initialEntries={['/m3-expressive/']}>
        <App />
        <Location />
      </MemoryRouter>,
    )
    expect(await screen.findByTestId('location')).toHaveTextContent('/')
  })

  it('renders start page correctly with a subpath basename', async () => {
    render(
      <MemoryRouter basename="/m3-expressive" initialEntries={['/m3-expressive/start']}>
        <App />
        <Location />
      </MemoryRouter>,
    )
    expect(await screen.findByTestId('location')).toHaveTextContent('/start')
  })

  it('renders component doc correctly with a subpath basename', async () => {
    render(
      <MemoryRouter basename="/m3-expressive" initialEntries={['/m3-expressive/components/button']}>
        <App />
        <Location />
      </MemoryRouter>,
    )
    expect(await screen.findByTestId('location')).toHaveTextContent('/components/button')
  })
})

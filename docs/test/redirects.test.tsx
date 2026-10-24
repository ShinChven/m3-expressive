import { render, screen } from '@testing-library/react'
import { MemoryRouter, useLocation } from 'react-router'
import { App } from '../src/App'

function Location() {
  return <span data-testid="location">{useLocation().pathname}</span>
}

describe('moved pages', () => {
  it.each([
    ['bottom-app-bar', 'toolbar'],
    ['navigation-drawer', 'navigation-rail'],
    ['segmented-button', 'button-group'],
    ['top-app-bar', 'app-bar'],
  ])('redirects /components/%s to /components/%s', async (from, to) => {
    render(
      <MemoryRouter initialEntries={[`/components/${from}`]}>
        <App />
        <Location />
      </MemoryRouter>,
    )
    expect(await screen.findByTestId('location')).toHaveTextContent(`/components/${to}`)
  })
})

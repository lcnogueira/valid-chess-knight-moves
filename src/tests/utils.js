import { render } from '@testing-library/react'
import React from 'react'
import ThemeProvider from 'styles/ThemeProvider'

const AllProviders = ({ children }) => {
  return <ThemeProvider>{children}</ThemeProvider>
}

const customRender = (ui, options) =>
  render(ui, { wrapper: AllProviders, ...options })
// re-export everything
export * from '@testing-library/react'
export { customRender as render }

import React from 'react'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from './global'
import theme from './theme.ts'

const Provider = ({ children }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    {children}
  </ThemeProvider>
)

export default Provider

import React, { ReactNode } from 'react'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from './global'
import theme from './theme'

interface Props {
  children: ReactNode
}

const Provider = ({ children }: Props) => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    {children}
  </ThemeProvider>
)

export default Provider

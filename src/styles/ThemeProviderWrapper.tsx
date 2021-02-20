import React, { FC } from 'react'
import { ThemeProvider } from 'styled-components'
import theme from './theme'

const ThemeProviderWrapper: FC = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
)

export default ThemeProviderWrapper

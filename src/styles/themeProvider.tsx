'use client'
import { theme } from '@/styles/theme'
import { ReactNode } from 'react'
import { ThemeProvider } from 'styled-components'

export default function Theme({ children }: { children: ReactNode }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

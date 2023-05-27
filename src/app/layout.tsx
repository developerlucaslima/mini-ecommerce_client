'use client'
import StyledComponentsRegistry from '@/lib/registry'
import { ReactNode } from 'react'
import { Roboto_Flex as Roboto } from 'next/font/google'
import GlobalStyles from '@/styles/global'

import { ThemeProvider } from 'styled-components'
import { theme } from '@/styles/theme'

const roboto = Roboto({ subsets: ['latin'] })
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html className={roboto.className}>
      <ThemeProvider theme={theme}>
        <body>
          <GlobalStyles />
          <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        </body>
      </ThemeProvider>
    </html>
  )
}

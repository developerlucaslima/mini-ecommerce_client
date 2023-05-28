'use client'

import StyledComponentsRegistry from '@/lib/registry'
import { ReactNode } from 'react'
import { Roboto_Flex as Roboto } from 'next/font/google'
import { AuthProvider } from '@/context/auth'
import GlobalStyles from '@/styles/global'
import ThemeProvider from '@/styles/themeProvider'
import { NewProvider } from '@/context/new'

const roboto = Roboto({ subsets: ['latin'] })
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html className={roboto.className}>
      <body>
        <AuthProvider>
          <ThemeProvider>
            <NewProvider>
              <GlobalStyles />
              <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
            </NewProvider>
          </ThemeProvider>
        </AuthProvider>
      </body>
    </html>
  )
}

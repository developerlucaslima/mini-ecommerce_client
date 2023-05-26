import StyledComponentsRegistry from '@/lib/registry'
import { ReactNode } from 'react'
import { Roboto_Flex as Roboto } from 'next/font/google'

const roboto = Roboto({ subsets: ['latin'] })
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html className={roboto.className}>
      <body>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  )
}

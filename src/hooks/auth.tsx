'use client'
import { theme } from '@/styles/theme'
import { ReactNode, createContext, useContext, useState } from 'react'
import { ThemeProvider } from 'styled-components'

const AuthContext = createContext({})

function AuthProvider({ children }: { children: ReactNode }) {
  // eslint-disable-next-line no-undef
  const [data, setData] = useState({ user: '', token: '' })

  return (
    <AuthContext.Provider value={{ username: data.user, setData }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </AuthContext.Provider>
  )
}

function useAuth() {
  const context = useContext(AuthContext)
  return context
}

export { AuthProvider, useAuth }

'use client'
import { api } from '@/lib/api'
import { theme } from '@/styles/theme'
import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react'
import { ThemeProvider } from 'styled-components'

const AuthContext = createContext({})

function AuthProvider({ children }: { children: ReactNode }) {
  // eslint-disable-next-line no-undef
  const [data, setData] = useState({ user: '', token: '' })

  useEffect(() => {
    const user = localStorage.getItem('@mini-ecommerce:user')
    const token = localStorage.getItem('@mini-ecommerce:token')

    if (token && user) {
      api.defaults.headers.authorization = `Bearer ${token}`

      setData({
        token,
        user: JSON.stringify(user),
      })
    }
  }, [])

  return (
    <AuthContext.Provider value={{ user: data.user, setData }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </AuthContext.Provider>
  )
}

function useAuth() {
  const context = useContext(AuthContext)
  return context
}

export { AuthProvider, useAuth }

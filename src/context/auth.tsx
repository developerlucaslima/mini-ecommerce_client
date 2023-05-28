'use client'
import { api } from '@/lib/api'
import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react'

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
      {children}
    </AuthContext.Provider>
  )
}

function useAuth() {
  const context = useContext(AuthContext)
  return context
}

export { AuthProvider, useAuth }

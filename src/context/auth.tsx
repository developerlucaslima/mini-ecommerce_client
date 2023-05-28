import { api } from '@/lib/api'
import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react'

interface AuthData {
  user: string
  token: string
}

interface AuthContextData {
  data: AuthData
  setData: React.Dispatch<React.SetStateAction<AuthData>>
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData)

function AuthProvider({ children }: { children: ReactNode }) {
  const [data, setData] = useState<AuthData>({ user: '', token: '' })

  useEffect(() => {
    const user = localStorage.getItem('@mini-ecommerce:user')
    const token = localStorage.getItem('@mini-ecommerce:token')

    if (token && user) {
      api.defaults.headers.authorization = `Bearer ${token}`

      setData({
        token,
        user: JSON.parse(user),
      })
    }
  }, [])

  return (
    <AuthContext.Provider value={{ data, setData }}>
      {children}
    </AuthContext.Provider>
  )
}

function useAuth() {
  const context = useContext(AuthContext)
  return context
}

export { AuthProvider, useAuth }

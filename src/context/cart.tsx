'use client'
import { ReactNode, createContext, useContext, useState } from 'react'
import { boolean } from 'zod'

const AuthContext = createContext({})

function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState(boolean)

  return (
    <AuthContext.Provider value={{ cart, setCart }}>
      {children}
    </AuthContext.Provider>
  )
}

function useAuth() {
  const context = useContext(AuthContext)
  return context
}

export { CartProvider, useAuth }

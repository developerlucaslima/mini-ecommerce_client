import React, { ReactNode, createContext, useContext, useState } from 'react'

interface AuthContextProps {
  sellProduct: boolean
  setSellProduct: (value: boolean) => void
}

const AuthContext = createContext<AuthContextProps>({} as AuthContextProps)

function NewProvider({ children }: { children: ReactNode }) {
  const [sellProduct, setSellProduct] = useState(false)

  return (
    <AuthContext.Provider value={{ sellProduct, setSellProduct }}>
      {children}
    </AuthContext.Provider>
  )
}

function useNew() {
  const context = useContext(AuthContext)
  return context
}

export { NewProvider, useNew }

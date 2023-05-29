'use client'
import Home from './home/page'
import SignIn from './sessions/signin/page'

export default function Page() {
  const user = localStorage.getItem('@mini-ecommerce:user')

  return <>{user ? <Home /> : <SignIn />}</>
}

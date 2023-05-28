'use client'
import { useAuth } from '@/context/auth'
import Home from './home/page'
import SignIn from './sessions/signin/page'

export default function Page() {
  const { user }: any = useAuth()
  return <>{user ? <Home /> : <SignIn />}</>
}

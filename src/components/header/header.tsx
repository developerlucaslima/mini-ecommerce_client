'use client'

import { useNew } from '@/context/new'
import { Container, Icons } from './styles'
import { Plus, SignOut, ShoppingCart } from 'phosphor-react'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/context/auth'

export default function Header() {
  const { data } = useAuth()
  const { setSellProduct } = useNew()
  const router = useRouter()
  return (
    <Container>
      <h1>Mini Ecommerce</h1>
      <Icons>
        <button
          className="Plus"
          onClick={() => {
            data.user ? setSellProduct(true) : router.push('/sessions/signin')
          }}
        >
          <Plus size={25} />
          Sell product
        </button>

        <button className="ShoppingCart">
          <ShoppingCart size={25} />
        </button>

        {data.user ? (
          <button className="SignOut">
            <SignOut size={25} />
          </button>
        ) : (
          ' '
        )}
      </Icons>
    </Container>
  )
}

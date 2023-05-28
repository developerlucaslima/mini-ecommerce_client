'use client'

import { useNew } from '@/context/new'
import { Container, Icons } from './styles'
import { Plus, SignOut, ShoppingCart } from 'phosphor-react'

export default function Header() {
  const { setSellProduct } = useNew()
  return (
    <Container>
      <h1>Mini Ecommerce</h1>
      <Icons>
        <button
          className="Plus"
          onClick={() => {
            setSellProduct(true)
          }}
        >
          <Plus size={25} />
          Sell product
        </button>

        <button className="ShoppingCart">
          <ShoppingCart size={25} />
        </button>

        <button className="SignOut">
          <SignOut size={25} />
        </button>
      </Icons>
    </Container>
  )
}

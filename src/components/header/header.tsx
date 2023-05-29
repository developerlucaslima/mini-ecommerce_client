'use client'

import { useNew } from '@/context/new'
import { Container, Icons } from './styles'
import { SignOut, ShoppingCart, Funnel, CurrencyDollar } from 'phosphor-react'
import { useRouter } from 'next/navigation'

export default function Header({ value, onChange, onClick, sortByPrice }: any) {
  const user = localStorage.getItem('@mini-ecommerce:user')
  const { setSellProduct } = useNew()
  const router = useRouter()
  return (
    <Container>
      <h1>Mini Ecommerce</h1>
      <div className="filter">
        <div className="search">
          <Funnel size={25} />
          <input
            type="text"
            placeholder="Search"
            value={value}
            onChange={onChange}
          />
        </div>
        <button onClick={onClick}>
          Sort by Price ({sortByPrice === 'asc' ? 'Low to High' : 'High to Low'}
          )
        </button>
      </div>
      <Icons>
        <button
          className="Plus"
          onClick={() => {
            !localStorage.getItem('@mini-ecommerce:user')
              ? router.push('/sessions/signin')
              : setSellProduct(true)
          }}
        >
          <CurrencyDollar size={25} />
          Sell product
        </button>

        <button className="ShoppingCart">
          <ShoppingCart size={25} />
        </button>

        <button
          className="SignOut"
          onClick={() => {
            router.push('/sessions/signin')
            if (user) {
              localStorage.removeItem('@mini-ecommerce:user')
              localStorage.removeItem('@mini-ecommerce:token')
            }
          }}
        >
          <SignOut size={25} />
        </button>
      </Icons>
    </Container>
  )
}

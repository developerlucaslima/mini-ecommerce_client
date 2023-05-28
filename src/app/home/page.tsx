'use client'
import Image from 'next/image'
import { Display } from './styles'
import Link from 'next/link'
import { Plus } from 'phosphor-react'
import NewProduct from '../../components/new/page'
import Header from '@/components/header/header'
import { useNew } from '@/context/new'
import { api } from '@/lib/api'
import { Product } from '@prisma/client'
import { useState, useEffect } from 'react'
import session from '../../assets/session.jpg'

export default function Home() {
  const { sellProduct } = useNew()

  const [products, setProducts] = useState<Product[]>([])
  const [search, setSearch] = useState<string>('')
  const [sortByPrice, setSortByPrice] = useState<'asc' | 'desc'>('asc')

  useEffect(() => {
    fetchProducts()
  }, [])

  async function fetchProducts() {
    try {
      const response = await api.get('/products')
      setProducts(response.data)
    } catch (error) {
      console.error('Error fetching products:', error)
    }
  }

  function handleSearchInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    setSearch(event.target.value.toLowerCase())
  }

  function handleSortByPrice() {
    setSortByPrice(sortByPrice === 'asc' ? 'desc' : 'asc')
  }

  // Filter by name and description
  const filteredProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(search) ||
      product.description.toLowerCase().includes(search),
  )

  // Order by price
  const sortedProducts = filteredProducts.sort((a, b) => {
    if (sortByPrice === 'asc') {
      return a.price - b.price
    } else {
      return b.price - a.price
    }
  })

  return (
    <>
      <Header
        onChange={handleSearchInputChange}
        onClick={handleSortByPrice}
        sortByPrice={sortByPrice}
        value={search}
      />
      <Display>
        <ul>
          {sortedProducts.map((product) => (
            <li key={product.id}>
              <h3>{product.name}</h3>
              <Image
                src={session}
                alt=""
                width={592}
                height={280}
                className="img"
              />
              <p>{product.description}</p>
              <h3 className="price">
                Price: {product.price}
                <Link href="#">
                  <Plus size={25} />
                </Link>
              </h3>
            </li>
          ))}
        </ul>
        <div className="sell">{sellProduct ? <NewProduct /> : ''}</div>
      </Display>
    </>
  )
}

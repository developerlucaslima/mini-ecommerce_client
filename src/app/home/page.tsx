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
  const [itensPerPage, setItensPerPage] = useState<number>(12)
  const [currentPage, setCurrentPage] = useState<number>(0)

  const pages = Math.ceil(products.length / itensPerPage)
  const startIndex = currentPage * itensPerPage
  const endIndex = startIndex + itensPerPage
  const currentProducts = products.slice(startIndex, endIndex)

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

  // Filtrar produtos com base no texto de pesquisa
  const filteredProducts = currentProducts.filter(
    (product) =>
      product.name.toLowerCase().includes(search) ||
      product.description.toLowerCase().includes(search),
  )

  // Ordenar produtos por preço
  const sortedProducts = filteredProducts.sort((a, b) => {
    if (sortByPrice === 'asc') {
      return a.price - b.price
    } else {
      return b.price - a.price
    }
  })

  function formatPrice(price: number) {
    return price.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
    })
  }

  return (
    <>
      <Header
        onChange={handleSearchInputChange}
        onClick={handleSortByPrice}
        sortByPrice={sortByPrice}
        value={search}
      />
      <Display>
        <div className="pages">
          <h3>Pages</h3>
          {Array.from(Array(pages), (item, index) => {
            return (
              <button
                value={index}
                key={index}
                onClick={(e) => setCurrentPage(Number(e.target.value))}
              >
                {index + 1}
              </button>
            )
          })}
        </div>

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
                Price: {formatPrice(product.price)}
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

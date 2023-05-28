'use client'
import Image from 'next/image'
import session from '@/assets/session.jpg'
import { Container, Display } from './styles'
import Link from 'next/link'
import { Plus } from 'phosphor-react'
import NewProduct from '../../components/new/page'
import Header from '@/components/header/header'
import { useNew } from '@/context/new'

export default function Home() {
  const { sellProduct } = useNew()

  return (
    <>
      <Header />
      <Display>
        <ul>
          <li>
            <h3>Name</h3>
            <Image
              src={session}
              alt=""
              width={592}
              height={280}
              className="img"
            />
            <p>
              Description Lorem ipsum dolor sit, amet consectetur adipisicing
              elit. Animi, minima tempore libero...
            </p>
            <h3 className="price">
              Price: R$ 30,00
              <Link href="#">
                <Plus size={25} />
              </Link>
            </h3>
          </li>
        </ul>
        <div className="sell">{sellProduct ? <NewProduct /> : ''}</div>
      </Display>
    </>
  )
}

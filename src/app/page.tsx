'use client'
import Image from 'next/image'
import session from '@/assets/session.jpg'
import { Container } from './styles'
import Link from 'next/link'
import { Plus } from 'phosphor-react'

export default function Home() {
  return (
    <Container>
      <h1>Product List</h1>
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
    </Container>
  )
}

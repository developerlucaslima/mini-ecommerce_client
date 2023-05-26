import Image from 'next/image'
import signIn from '../assets/img-signin.jpg'
import { FormRegister } from '@/components/formRegister/FormRegister'
import { Container } from './stlyles'

export default function Home() {
  return (
    <Container>
      <div className="hero">
        <h1>Mini Ecommerce</h1>
        <FormRegister />
      </div>
      <div className="img">
        <Image src={signIn} alt="" height={700} />
      </div>
    </Container>
  )
}

import { Container } from './styles'
import Image from 'next/image'
import signIn from '../assets/img-signin.jpg'
import { FormSignIn } from '@/components/formSignIn/FormSignIn'

export default function Home() {
  return (
    <Container>
      <div className="hero">
        <h1>Mini Ecommerce</h1>
        <FormSignIn />
      </div>
      <div className="img">
        <Image src={signIn} alt="" height={700} />
      </div>
    </Container>
  )
}

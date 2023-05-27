import Image from 'next/image'
import session from '@/assets/session.jpg'
import { Container } from './stlyles'
import { FormSignIn } from '@/components/formSignIn/FormSignIn'

export default function SignIn() {
  return (
    <Container>
      <div className="hero">
        <h1>Mini Ecommerce</h1>
        <FormSignIn />
      </div>
      <div className="img">
        <Image
          src={session}
          alt=""
          height={1080}
          style={{ objectFit: 'scale-down' }}
        />
      </div>
    </Container>
  )
}

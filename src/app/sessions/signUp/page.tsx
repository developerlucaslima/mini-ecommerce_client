import Image from 'next/image'
import session from '@/assets/session.jpg'
import { Container } from './stlyles'
import { FormSignUp } from '@/components/formSignUp/FormSignUp'

export default function SignIn() {
  return (
    <Container>
      <div className="hero">
        <h1>Mini Ecommerce</h1>
        <FormSignUp />
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

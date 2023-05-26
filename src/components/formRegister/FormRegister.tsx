'use client'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Container, Form } from './styles'

const RegisterFormSchema = z.object({
  username: z
    .string()
    .min(3, { message: 'The username must have at least 3 characters.' })
    .regex(/^([a-z\\-]+)$/i, {
      message: 'The username can only contain letters and hyphens.',
    })
    .transform((username) => username.toLowerCase()),
  password: z
    .string()
    .min(3, { message: 'The password must have at least 3 characters.' }),
})

type FormData = z.infer<typeof RegisterFormSchema>

export function FormRegister() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(RegisterFormSchema),
  })

  async function handleClaimUsername(data: FormData) {
    const { username, password } = data
    console.log(username, password)
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit(handleClaimUsername)}>
        <p>{errors.username?.message ?? 'Username'}</p>
        <input
          type="text"
          placeholder="Your username"
          {...register('username')}
        />

        <p>{errors.password?.message ?? 'Password'}</p>
        <input
          type="password"
          placeholder="Password"
          {...register('password')}
        />

        <button type="submit">Go</button>
      </Form>
    </Container>
  )
}

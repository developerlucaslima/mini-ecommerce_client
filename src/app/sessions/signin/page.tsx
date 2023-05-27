'use client'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { api } from '@/lib/api'
import { Container, Form } from './stlyles'

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
    .min(6, { message: 'The username must have at least 6 characters.' })
    .regex(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{6,}$/, {
      message:
        'It should contain special characters, uppercase and lowercase letters, and numbers.',
    }),
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
    try {
      await api.post('/users', {
        username: data.username,
        password: data.password,
      })
    } catch (err) {
      console.error(err)
    }
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

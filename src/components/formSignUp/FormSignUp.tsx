'use client'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Form } from './styles'
import { api } from '@/lib/api'
import { useState } from 'react'
import { ArrowLeft } from 'phosphor-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

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

export function FormSignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(RegisterFormSchema),
  })

  const [appError, setAppError] = useState('')

  const router = useRouter()

  function handleClaimUsername(data: FormData) {
    api
      .post('/users', {
        username: data.username,
        password: data.password,
      })
      .then(() => {
        router.push('/sessions/signin')
        alert('Registered successfully')
      })
      .catch((err) => {
        if (err.response) {
          setAppError(err.response.data.message)
        }
      })
  }

  return (
    <Form>
      <form onSubmit={handleSubmit(handleClaimUsername)}>
        <label>{appError || errors.username?.message}</label>
        <input
          type="text"
          placeholder="Your username"
          {...register('username')}
        />

        <label>{errors.password?.message}</label>
        <input
          type="password"
          placeholder="Password"
          {...register('password')}
        />

        <button type="submit">Sign Up</button>

        <Link href="/sessions/signin">
          <ArrowLeft />
          Back to Log In
        </Link>
      </form>
    </Form>
  )
}

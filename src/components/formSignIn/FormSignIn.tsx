'use client'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Form } from './styles'
import { api } from '@/lib/api'
import { useState } from 'react'
import { ArrowRight } from 'phosphor-react'
import Link from 'next/link'

const RegisterFormSchema = z.object({
  username: z
    .string()
    .min(3, { message: 'The username must have at least 3 characters.' })
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

export function FormSignIn() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(RegisterFormSchema),
  })

  const [appError, setAppError] = useState('')

  function handleClaimUsername(data: FormData) {
    api
      .post('/sessions/signin', {
        username: data.username,
        password: data.password,
      })
      .then(() => {
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

        <button type="submit">Sign in</button>

        <Link href="/sessions/signup">
          Go to Sign Up
          <ArrowRight />
        </Link>
      </form>
    </Form>
  )
}

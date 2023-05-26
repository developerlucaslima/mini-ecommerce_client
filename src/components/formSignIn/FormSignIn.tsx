'use client'
import { AddressBook, ArrowRight } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import { Input } from '../Input/Input'
import { Button } from '../button/Button'
import { Container } from './styles'

const ClaimUsernameFormSchema = z.object({
  username: z
    .string()
    .min(3, { message: 'O usuário precisa ter pelo menos 3 letras.' })
    .regex(/^([a-z\\-]+)$/i, {
      message: 'O usuário pode ter apenas letras e hifens.',
    })
    .transform((username) => username.toLowerCase()),
})

type ClaimUserFormData = z.infer<typeof ClaimUsernameFormSchema>

export function FormSignIn() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ClaimUserFormData>({
    resolver: zodResolver(ClaimUsernameFormSchema),
  })

  async function handleClaimUsername(data: ClaimUserFormData) {
    console.log(data)
  }

  return (
    <Container>
      <form onSubmit={handleSubmit(handleClaimUsername)}>
        <Input
          icon={AddressBook}
          placeholder="Your username"
          {...register('username')}
        />
        <div className="text">
          <p>
            {errors.username
              ? errors.username.message
              : 'Enter your username or create a new one'}
          </p>
          <Button submit icon={ArrowRight} title="Go" />
        </div>
      </form>
    </Container>
  )
}

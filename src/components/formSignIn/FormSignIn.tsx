'use client'
import { AddressBook, ArrowRight } from 'phosphor-react'
import { Input } from '../Input/Input'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Button } from '../button/Button'

const userNameSchema = z.object({
  username: z.string(),
})
type user = z.infer<typeof userNameSchema>

async function handleUser(data: user) {
  console.log(data)
}

export function FormSignIn() {
  const { register, handleSubmit } = useForm<user>({
    resolver: zodResolver(userNameSchema),
  })

  return (
    <form onSubmit={handleSubmit(handleUser)}>
      <Input
        icon={AddressBook}
        placeholder="Your username"
        {...register('username')}
      />
      <Button submit icon={ArrowRight} title="Go" />
    </form>
  )
}

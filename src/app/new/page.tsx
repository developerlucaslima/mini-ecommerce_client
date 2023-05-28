'use client'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Form } from './styles'
import { Plus } from 'phosphor-react'
import { useState } from 'react'
import { api } from '@/lib/api'
import { useAuth } from '@/hooks/auth'
import { MediaPicker } from '@/components/MediaPicker/MediaPicker'
// import { useRouter } from 'next/navigation'

const RegisterFormSchema = z.object({
  userId: z.string(),
  name: z.string().min(3),
  description: z.string().min(15),
  price: z.number().min(3).positive(),
  image: z.string().url(),
})

type FormData = z.infer<typeof RegisterFormSchema>

export default function NewProduct() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(RegisterFormSchema),
  })

  const [appError, setAppError] = useState('')

  // const router = useRouter()
  const { user }: any = useAuth()

  function handleClaimUsername(data: FormData) {
    api
      .post('/products', {
        userId: user.id,
        name: data.name,
        image: data.image,
        description: data.description,
        price: data.price,
      })
      .then(() => {
        // router.push('/sessions/signin')
        alert('Product registered successfully')
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
        {/* Name */}
        <label>
          <input
            type="text"
            placeholder="Your username"
            {...register('name')}
          />
          {appError || errors.name?.message}
        </label>

        {/* Description */}
        <label>
          {appError || errors.description?.message}
          <input
            type="text"
            placeholder="Product description"
            {...register('description')}
          />
        </label>

        {/* Price */}
        <label>
          {appError || errors.price?.message}
          <input
            type="number"
            placeholder="Product price"
            {...register('price')}
          />
        </label>

        {/* Image */}
        <label htmlFor="media">
          {appError || errors.image?.message}
          <MediaPicker {...register('image')} />
        </label>

        <button type="submit">
          <Plus />
          Add this product
        </button>
      </form>
    </Form>
  )
}

'use client'
import { ChangeEvent, useState } from 'react'
import { Container } from './styles'
import { Camera, Plus, X } from 'phosphor-react'
import { api } from '@/lib/api'
import { useNew } from '@/context/new'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const productFormSchema = z.object({
  name: z.string().nonempty(),
  description: z.string().nonempty(),
  price: z.unknown(),
  media: z.unknown(),
})

type FormData = z.infer<typeof productFormSchema>

export default function NewProduct() {
  const [preview, setPreview] = useState<string | null>(null)
  const { setSellProduct } = useNew()
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(productFormSchema),
  })

  const [appError, setAppError] = useState('')

  function onFileSelected(event: ChangeEvent<HTMLInputElement>) {
    const { files } = event.target

    if (!files || files.length === 0) {
      return
    }

    const file = files[0]
    const previewURL = URL.createObjectURL(file)

    setPreview(previewURL)
    setValue('media', file) // Definir o valor do campo 'media' usando setValue
  }

  async function handleCreateProduct(data: FormData) {
    const { name, description, price, media } = productFormSchema.parse(data)
    console.log(data)

    let image = ''

    if (media) {
      const uploadFormData = new FormData()
      uploadFormData.set('file', media)

      const uploadResponse = await api.post('/upload', uploadFormData)

      image = uploadResponse.data.fileUrl
      console.log(image)
    }

    await api
      .post('/products', {
        name,
        description,
        price,
        image,
      })
      .then(() => {
        console.log('Successfully uploaded')
        alert('Product registered successfully')
      })
      .catch((err) => {
        if (err.response) {
          setAppError(err.response.data.message)
        }
      })
  }

  return (
    <Container>
      <div className="title">
        <h1>Sell product</h1>
        <button className="ShoppingCart">
          <X
            size={25}
            onClick={() => {
              setSellProduct(false)
            }}
          />
        </button>
      </div>
      <form onSubmit={handleSubmit(handleCreateProduct)}>
        {/* Name */}
        <label>
          {errors.name?.message}
          <input type="text" placeholder="Product name" {...register('name')} />
        </label>

        {/* Description */}
        <label>
          {appError && <span>{errors.description?.message}</span>}
          <input
            type="text"
            placeholder="Product description"
            {...register('description')}
          />
        </label>

        {/* Price */}
        <label>
          {appError && <span>{errors.price?.message}</span>}
          <input
            type="number"
            placeholder="Product price"
            {...register('price')}
          />
        </label>

        {/* Image */}
        <label htmlFor="media">
          <div className="camera">
            <Camera size={25} />
            <p>Add media</p>
          </div>
          <input
            {...register('media')}
            onChange={onFileSelected}
            type="file"
            name="media"
            id="media"
            accept="image/*"
            className="hidden"
          />
          {/* eslint-disable-next-line */}
          {preview && <img src={preview} alt="" className="img" />}
        </label>

        <button type="submit">
          <Plus />
          Add this product
        </button>
      </form>
    </Container>
  )
}

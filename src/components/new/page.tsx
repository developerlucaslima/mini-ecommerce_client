'use client'
import { FormEvent } from 'react'
import { Form } from './styles'
import { Plus, X } from 'phosphor-react'
import { api } from '@/lib/api'
import { MediaPicker } from '@/components/MediaPicker/MediaPicker'
import { useAuth } from '@/context/auth'
import { useNew } from '@/context/new'

export default function NewProduct() {
  const { user }: any = useAuth()
  const userId = user.id

  async function handleCreateProduct(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const fileToUpload = formData.get('media')
    let image = ''

    if (fileToUpload) {
      const uploadFormData = new FormData()
      uploadFormData.set('file', fileToUpload)

      const uploadResponse = await api.post('/upload', uploadFormData)

      image = uploadResponse.data.fileUrl
    }

    await api
      .post('/products', {
        userId,
        name: formData.get('name'),
        description: formData.get('description'),
        price: formData.get('price'),
        image,
      })
      .then(() => {
        alert('Product registered successfully')
      })
      .catch((err) => {
        if (err.response) {
          // setAppError(err.response.data.message)
        }
      })
  }

  const { setSellProduct } = useNew()

  return (
    <Form>
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
      <form onSubmit={handleCreateProduct}>
        {/* Name */}
        <label>
          {/* {appError || errors.name?.message} */}
          <input type="text" name="name" placeholder="Product name" />
        </label>

        {/* Description */}
        <label>
          {/* {appError || errors.description?.message} */}
          <input
            type="text"
            name="description"
            placeholder="Product description"
          />
        </label>

        {/* Price */}
        <label>
          {/* {appError || errors.price?.message} */}
          <input type="number" name="price" placeholder="Product price" />
        </label>

        {/* Image */}
        <label htmlFor="media">
          {/* {appError || errors.image?.message} */}
          <MediaPicker />
        </label>

        <button type="submit">
          <Plus />
          Add this product
        </button>
      </form>
    </Form>
  )
}

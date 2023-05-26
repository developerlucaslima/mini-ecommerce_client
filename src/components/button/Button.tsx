import { ForwardRefExoticComponent } from 'react'
import { Container } from './styles'

interface InputProps {
  submit: boolean
  icon?: ForwardRefExoticComponent<any>
  title: string
  loading?: boolean
}

// loading = false, para caso ele não seja informado, será false
export function Button({
  submit,
  icon: Icon,
  title,
  loading = false,
  ...rest
}: InputProps) {
  return (
    <Container type={submit ? 'submit' : 'button'} disabled={loading}>
      {Icon && <Icon size={20} />}
      {loading ? 'Carregando...' : title}
    </Container>
  )
}

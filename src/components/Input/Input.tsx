'use client'
import { ForwardRefExoticComponent } from 'react'
import { Container } from './styles'

interface InputProps {
  icon?: ForwardRefExoticComponent<any>
  placeholder?: string
}

export function Input({ icon: Icon, ...rest }: InputProps) {
  return (
    <Container>
      {Icon && <Icon size={20} />}
      <input {...rest} />
    </Container>
  )
}

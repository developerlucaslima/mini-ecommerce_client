'use client'
import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;

  padding: 1.2rem;
  color: ${({ theme }) => theme.white};

  .fakeInput {
    display: flex;
    align-items: center;
    gap: 1.6rem;
    p {
      font-size: 1.6rem;
      width: 100%;
    }
  }

  input {
    visibility: hidden;
    height: 0;
    width: 0;
    background-color: red;
  }

  img,
  .img {
    aspect-ratio: 16 / 9;
    width: 100%;
    border-radius: 10px;
    object-fit: cover;
  }
`

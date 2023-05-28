'use client'
import styled from 'styled-components'

export const Container = styled.div`
  max-width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 3.2rem;

  > ul {
    li {
      max-width: 48rem;
      gap: 1.6rem;
      padding: 1.2rem;
      border-radius: 10px;

      display: flex;
      flex-direction: column;
      align-items: center;

      background: ${({ theme }) => theme.bg700};

      h3 {
        display: flex;
        align-items: center;
        justify-content: space-around;
        text-align: center;
        height: 5.6rem;
        width: 100%;

        padding: 1.2rem;
        color: ${({ theme }) => theme.orange};
        background: ${({ theme }) => theme.bg900};
        border-radius: 10px;

        a {
          display: flex;
          align-items: center;
          color: ${({ theme }) => theme.orange};
          background: ${({ theme }) => theme.bg900};
          padding: 0.8rem;
          border-radius: 99%;
        }
      }

      .price {
        color: ${({ theme }) => theme.bg900};
        background: ${({ theme }) => theme.gray100};
      }

      img,
      .img {
        aspect-ratio: 16 / 9;
        width: 100%;
        border-radius: 10px;
        object-fit: cover;
      }
    }
  }
`
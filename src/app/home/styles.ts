'use client'
import styled from 'styled-components'

export const Display = styled.div`
  margin-top: 8rem;
  max-width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 3.2rem;
  justify-content: center;

  .pages {
    margin-top: 1.6rem;
    margin-bottom: -1.6rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;

    button {
      height: 5.6rem;
      width: 5.6rem;
      background: ${({ theme }) => theme.bg900};
      color: ${({ theme }) => theme.white};
      padding: 0.8rem;
      border-radius: 10px;
      border: none;
    }
  }

  > ul {
    padding: 0 3.2rem;
    gap: 3.2rem;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;

    li {
      max-width: 40rem;
      gap: 1.6rem;
      padding: 1.6rem;
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

        padding: 1.6rem;
        color: ${({ theme }) => theme.orange};
        background: ${({ theme }) => theme.bg900};
        border-radius: 10px;

        a {
          display: flex;
          align-items: center;
          color: ${({ theme }) => theme.orange};
          background: ${({ theme }) => theme.bg900};
          padding: 0.8rem;
          border-radius: 50%;
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

  > .sell {
    position: fixed;
    right: 0;
  }
`

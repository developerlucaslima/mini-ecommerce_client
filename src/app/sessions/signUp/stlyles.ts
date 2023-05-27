'use client'
import styled from 'styled-components'

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
  overflow: hidden;

  > .hero {
    padding: 0 13.6rem;
    display: flex;
    gap: 3.2rem;

    flex-direction: column;
    justify-content: center;

    > h1 {
      font-size: 4.8rem;
      color: ${({ theme }) => theme.orange};
    }
  }

  > .img {
    flex: 1;
  }
`

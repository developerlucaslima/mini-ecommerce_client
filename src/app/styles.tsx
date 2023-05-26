'use client'
import styled from 'styled-components'

export const Container = styled.div`
  height: 100vh;
  max-width: calc(100vw - (100vw - 1160px) / 2);
  margin-left: auto;

  display: flex;
  align-items: center;
  gap: 2rem;
  overflow: hidden;

  .hero {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;

    max-width: 48rem;
    min-width: 30rem;

    gap: 1rem;
    padding-left: 2rem;

    > h1 {
      color: #ffc03c;
      font-size: 8rem;
      justify-content: start;
      text-align: start;
    }
  }

  .img {
    padding-right: 8rem;
    overflow: hidden;
  }
`

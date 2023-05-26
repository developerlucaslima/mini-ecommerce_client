'use client'
import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100%;

  background: #fe6d79;
  border-radius: 10px;
  padding: 1rem;

  display: flex;
  flex-direction: column;
  gap: 1rem;

  .text {
    display: flex;
    align-items: center;
    justify-content: center;

    > p {
      color: #000000;

      height: 5.6rem;
      border: 0;
      padding: 0 1.6rem;
      margin-top: 1.6rem;
      border-radius: 10px;
      font-weight: 500;

      display: flex;
      align-items: center;
    }
  }
`

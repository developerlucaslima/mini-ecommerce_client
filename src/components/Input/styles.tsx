'use client'
import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  background-color: #151515;
  color: #d3d3d3;

  margin-bottom: 0.8rem;
  border-radius: 10px;

  > svg {
    margin-left: 1.6rem;
  }

  > input {
    height: 5.6rem;
    width: 100%;

    padding: 1.2rem;
    color: #d3d3d3;
    background: transparent;
    border: 0;

    &:placeholder {
      color: #b9b9b9;
    }
  }
`

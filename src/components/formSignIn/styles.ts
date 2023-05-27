'use client'
import styled from 'styled-components'

export const Form = styled.div`
  > form {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1.6rem;

    > label {
      font-size: 1.4rem;
      color: ${({ theme }) => theme.gray100};
    }

    > input {
      height: 5.6rem;
      width: 100%;

      padding: 1.2rem;
      color: ${({ theme }) => theme.white};
      background: ${({ theme }) => theme.bg900};
      border-radius: 10px;
      border: none;

      &:placeholder {
        color: ${({ theme }) => theme.gray300};
      }
    }

    > button {
      background-color: ${({ theme }) => theme.orange};
      color: ${({ theme }) => theme.bg800};

      width: 100%;
      height: 5.6rem;
      border: 0;
      padding: 0 1.6rem;
      margin-top: 1.6rem;
      border-radius: 10px;
      font-weight: 500;

      &:disabled {
        opacity: 0.5;
      }
    }

    > a {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      gap: 1rem;
      color: ${({ theme }) => theme.orange};
    }
  }
`

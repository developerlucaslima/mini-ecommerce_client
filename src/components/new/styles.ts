'use client'
import styled from 'styled-components'

export const Container = styled.div`
  height: 100vh;
  max-width: 40rem;
  padding: 1.6rem;
  background-color: ${({ theme }) => theme.gray300};

  .title {
    display: flex;
    align-items: center;
    justify-content: space-between;

    height: 5.6rem;
    margin-bottom: 1.6rem;
    padding: 0 1.6rem;
    border-radius: 10px;

    color: ${({ theme }) => theme.bg900};

    button {
      border: none;
      display: flex;
      align-items: center;

      padding: 0.4rem;
      border-radius: 50%;
      background-color: ${({ theme }) => theme.red};

      svg {
        color: ${({ theme }) => theme.bg900};
      }
    }
  }

  > form {
    max-width: 56rem;
    display: flex;
    flex-direction: column;
    gap: 1.6rem;

    > label {
      font-size: 1.4rem;
      color: ${({ theme }) => theme.red};

      .hidden {
        visibility: hidden;
        height: 0;
        width: 0;
        background-color: red;
      }

      input {
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

      .camera {
        color: ${({ theme }) => theme.white};
        display: flex;
        align-items: center;
        gap: 1.6rem;
        p {
          font-size: 1.6rem;
          width: 100%;
        }
      }

      img,
      .img {
        aspect-ratio: 16 / 9;
        width: 100%;
        border-radius: 10px;
        object-fit: cover;
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
    }

    > a {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      gap: 1rem;
      color: ${({ theme }) => theme.orange};
    }
  }
`

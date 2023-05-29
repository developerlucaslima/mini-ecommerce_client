import styled from 'styled-components'

export const Container = styled.header`
  position: fixed;
  top: 0;
  height: 8rem;
  width: 100%;
  background-color: ${({ theme }) => theme.bg800};

  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${({ theme }) => theme.bg700};

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 8rem;

  > h1 {
    color: ${({ theme }) => theme.orange};
  }

  .filter {
    display: flex;
    gap: 1rem;

    button {
      background: ${({ theme }) => theme.bg900};
      color: ${({ theme }) => theme.white};
      padding: 0.8rem;
      border-radius: 10px;
      border: none;
    }

    .search {
      display: flex;
      gap: 1rem;
      background: ${({ theme }) => theme.bg900};
      height: 5.6rem;
      align-items: center;
      padding: 0.8rem;
      border-radius: 10px;

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
    }
  }
`

export const Icons = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  gap: 8rem;

  .Plus {
    display: flex;
    align-items: center;
    gap: 0.8rem;
    color: ${({ theme }) => theme.orange};
    border: none;
    background: ${({ theme }) => theme.bg900};
    padding: 2rem;
    border-radius: 10px;
    > svg {
      color: ${({ theme }) => theme.orange};
    }
  }

  .ShoppingCart {
    display: flex;
    align-items: center;
    color: ${({ theme }) => theme.orange};
    border: none;
    background: ${({ theme }) => theme.bg900};
    padding: 2rem;
    border-radius: 50%;
  }

  .SignOut {
    display: flex;
    align-items: center;
    color: ${({ theme }) => theme.red};
    border: none;
    background: ${({ theme }) => theme.bg900};
    padding: 2rem;
    border-radius: 50%;
  }
`

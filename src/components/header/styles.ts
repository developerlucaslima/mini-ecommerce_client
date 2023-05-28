import styled from 'styled-components'

export const Container = styled.header`
  height: 10.5rem;
  width: 100%;

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

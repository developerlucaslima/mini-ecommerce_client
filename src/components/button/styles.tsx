import styled from 'styled-components'

export const Container = styled.button`
  background-color: #ffc03c;
  color: #000000;

  height: 5.6rem;
  border: 0;
  padding: 0 1.6rem;
  margin-top: 1.6rem;
  border-radius: 10px;
  font-weight: 500;
  margin-left: auto;

  display: flex;
  align-items: center;
  justify-content: flex-end;

  &:disabled {
    opacity: 0.5;
  }

  > svg {
    color: #000000;
  }
`

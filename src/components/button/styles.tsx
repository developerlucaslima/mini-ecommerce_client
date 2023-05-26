import styled from 'styled-components'

export const Container = styled.button`
  background-color: #ffc03c;
  color: #000000;

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
`

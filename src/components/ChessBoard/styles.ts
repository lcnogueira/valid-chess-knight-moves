import styled from 'styled-components'

export const ErrorMessage = styled.span`
  margin-bottom: 2rem;
  font-size: 1.4rem;
`

export const BoardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: repeat(8, 1fr);
  width: 100%;
  max-width: 70rem;
  border: 1rem solid ${({ theme }) => theme.colors.white};
`

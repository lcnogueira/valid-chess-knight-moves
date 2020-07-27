import styled, { css } from 'styled-components'

export const Container = styled.div`
  max-width: 70rem;
  width: 100%;
`

export const ButtonsContainer = styled.div`
  ${({ theme: { screens } }) => css`
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: stretch;
    margin-bottom: 2rem;

    @media (min-width: ${screens.small}) {
      flex-direction: row;
      justify-content: center;
    }
  `}
`

export const Steps = styled.span`
  margin: 1rem;
  font-size: 2rem;
`

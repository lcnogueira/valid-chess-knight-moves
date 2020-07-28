import styled, { css } from 'styled-components'

export const Container = styled.div`
  max-width: 70rem;
  width: 100%;
  margin-top: 2rem 0;
`

export const ButtonsContainer = styled.div`
  ${({ theme: { screens } }) => css`
    display: flex;
    flex-direction: column;
    align-items: stretch;
    margin-bottom: 4rem;

    @media (min-width: ${screens.small}) {
      flex-direction: row;
      justify-content: center;
    }
  `}
`

export const Steps = styled.span`
  display: block;
  margin-bottom: 2rem;
  font-size: 2rem;
`

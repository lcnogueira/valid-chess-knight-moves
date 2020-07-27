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

export const NavigationButton = styled.button`
  ${({ theme: { colors, border } }) => css`
    background-color: ${colors.secondary};
    color: ${colors.white};
    margin: 1rem;
    min-width: 15rem;
    padding: 1rem 2rem;
    border-radius: ${border.radius};
    font-size: 1.6rem;

    :hover {
      background-color: ${colors.white};
      color: ${colors.secondary};
    }
  `}
`

export const Steps = styled.span`
  margin: 1rem;
  font-size: 2rem;
`

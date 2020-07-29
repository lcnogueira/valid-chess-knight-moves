import styled, { css } from 'styled-components'

export const H1 = styled.h1`
  ${({ theme: { screens } }) => css`
    font-size: 2.5rem;
    margin-bottom: 2rem;

    @media (min-width: ${screens.small}) {
      font-size: 3rem;
    }
  `};
`

export const H2 = styled.h2`
  ${({ theme: { screens } }) => css`
    font-size: 2rem;
    font-weight: 400;
    margin-bottom: 2rem;

    @media (min-width: ${screens.small}) {
      font-size: 2.5rem;
    }
  `};
`

export const H3 = styled.h3`
  ${({ theme: { screens } }) => css`
    font-size: 1.8rem;
    font-weight: 500;
    margin-bottom: 2rem;

    @media (min-width: ${screens.small}) {
      font-size: 2.3rem;
    }
  `};
`

export const Paragraph = styled.p`
  ${({ theme: { screens, colors } }) => css`
    font-size: 1.8rem;
    line-height: 1.6;
    margin-bottom: 1rem;
    text-align: justify;

    @media (min-width: ${screens.small}) {
      line-height: 2;
      font-size: 2rem;
      text-align: center;
    }

    a {
      font-weight: bold;
      color: ${colors.primary};
      :hover {
        color: ${colors.white};
      }
    }
  `};
`

export const Img = styled.img`
  max-width: 100%;
  height: auto;
`

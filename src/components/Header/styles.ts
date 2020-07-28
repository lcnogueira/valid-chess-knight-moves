import styled, { css } from 'styled-components'

interface MenuLinksData {
  selected: boolean
}

export const Header = styled.nav`
  ${({ theme: { colors } }) => css`
    margin: 0 auto;
    position: sticky;
    top: 0;
    z-index: 10;
    background-color: ${colors.mainBg};
    border-bottom: 1px solid ${colors.white};
  `}
`

export const MenuLinks = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 6.5rem;
  width: 100%;
`

export const MenuLinksItem = styled.li<MenuLinksData>`
  ${({ selected, theme: { colors } }) => css`
    font-size: 1.5rem;
    display: flex;

    a {
      display: flex;
      align-items: center;
      font-weight: bold;
      padding: 0 5rem;
      color: ${selected ? colors.primary : colors.white};

      :hover {
        color: ${colors.primary};
      }
    }
  `}
`

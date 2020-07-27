import { createGlobalStyle, css } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  html, body, #__next {
    height: 100%;
  }

  ${({ theme }) => css`
    html {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
        Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }

    body {
      background-color: ${theme.colors.mainBg};
      color: ${theme.colors.white};
    }
  `}

  a{
    text-decoration:none;
  }

  a, button {
		cursor: pointer;
    transition: all 0.2s ease;
	}

  ul {
		list-style: none;
	}
`

export default GlobalStyles

import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    border: {
      radius: string
    }

    screens: {
      huge: string
      large: string
      medium: string
      small: string
    }

    colors: {
      primary: string
      secondary: string
      mainBg: string
      white: string
      green: string
      red: string
    }
  }
}

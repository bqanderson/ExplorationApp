import { Colors } from '../styles'

export const LightTheme = {
  dark: false,
  colors: {
    primary: Colors.solarized.blue,
    background: Colors.solarized.base3,
    card: Colors.solarized.base2,
    text: Colors.solarized.base00,
    border: Colors.solarized.base1,
    notification: Colors.solarized.yellow,
  },
}

export const DarkTheme = {
  dark: true,
  colors: {
    primary: Colors.solarized.blue,
    background: Colors.solarized.base03,
    card: Colors.solarized.base02,
    text: Colors.solarized.base0,
    border: Colors.solarized.base01,
    notification: Colors.solarized.yellow,
  },
}

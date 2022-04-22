type Neutral =
  | 'white'
  | 's100'
  | 's150'
  | 's200'
  | 's250'
  | 's300'
  | 's400'
  | 's500'
  | 's600'
  | 's700'
  | 's800'
  | 's900'
  | 'black'
export const neutral: Record<Neutral, string> = {
  white: '#F1F1F2',
  s100: '#EAEAEC',
  s150: '#DADADD',
  s200: '#CAC9CE',
  s250: '#BCBBC1',
  s300: '#A2A0A8',
  s400: '#87858F',
  s500: '#524F5E',
  s600: '#373445',
  s700: '#2A2739',
  s800: '#232033',
  s900: '#1F1C2F',
  black: '#1C192C',
}

type Primary = 'brand' | 's200' | 's600'
export const primary: Record<Primary, string> = {
  s200: '#7BA7CC',
  brand: '#4682B4',
  s600: '#336084',
}

type Secondary = 'brand' | 's200' | 's600'
export const secondary: Record<Secondary, string> = {
  s200: '#ADFF5C',
  brand: '#7FFF00',
  s600: '#66CC00',
}

type Danger = 's400'
export const danger: Record<Danger, string> = {
  s400: '#A43C2A',
}

type Success = 's400'
export const success: Record<Success, string> = {
  s400: '#809556',
}

type Warning = 's400'
export const warning: Record<Warning, string> = {
  s400: '#FFC300',
}

type Solarized =
  | 'base03'
  | 'base02'
  | 'base01'
  | 'base00'
  | 'base0'
  | 'base1'
  | 'base2'
  | 'base3'
  | 'yellow'
  | 'orange'
  | 'red'
  | 'magenta'
  | 'violet'
  | 'blue'
  | 'cyan'
  | 'green'
export const solarized: Record<Solarized, string> = {
  base03: '#002b36',
  base02: '#073642',
  base01: '#586e75',
  base00: '#657b83',
  base0: '#839496',
  base1: '#93a1a1',
  base2: '#eee8d5',
  base3: '#fdf6e3',
  yellow: '#b58900',
  orange: '#cb4b16',
  red: '#dc322f',
  magenta: '#d33682',
  violet: '#6c71c4',
  blue: '#268bd2',
  cyan: '#2aa198',
  green: '#859900',
}

const applyOpacity = (hexColor: string, opacity: number): string => {
  const red = parseInt(hexColor.slice(1, 3), 16)
  const green = parseInt(hexColor.slice(3, 5), 16)
  const blue = parseInt(hexColor.slice(5, 7), 16)

  return `rgba(${red}, ${green}, ${blue}, ${opacity})`
}

type Transparent = 'clear' | 'lightGray' | 'darkGray'
export const transparent: Record<Transparent, string> = {
  clear: 'rgba(255, 255, 255, 0)',
  lightGray: applyOpacity(neutral.s300, 0.4),
  darkGray: applyOpacity(neutral.s800, 0.8),
}

export const shadeColor = (hexColor: string, percent: number): string => {
  const redGamut: number = parseInt(hexColor.slice(1, 3), 16)
  const greenGamut: number = parseInt(hexColor.slice(3, 5), 16)
  const blueGamut: number = parseInt(hexColor.slice(5, 7), 16)

  const rgb: Array<number> = [redGamut, greenGamut, blueGamut]

  const toShadedGamut = (gamut: number): number => {
    return Math.floor(Math.min(gamut * (1 + percent / 100), 255))
  }

  const toHex = (gamut: number): string => {
    return gamut.toString(16).length === 1
      ? `0${gamut.toString(16)}`
      : gamut.toString(16)
  }

  const shadedRGB: Array<number> = rgb.map(toShadedGamut)
  const shadedHex: Array<string> = shadedRGB.map(toHex)

  const hexString: string = shadedHex.join('')

  return `#${hexString}`
}

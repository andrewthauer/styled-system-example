import chroma from 'chroma-js'

const darken = (color) =>
  chroma(color)
    .darken(0.5)
    .hex()

const brighten = (color) =>
  chroma(color)
    .brighten(0.5)
    .hex()

const transparent = 'transparent'
const black = '#000e1a'
const white = '#fff'
const gray = '#bbb'
const lightGray = '#ddd'
const darkGray = '#666'
const red = '#cc222c'
const lightRed = brighten(red)
const darkRed = darken(red)
const green = '#30aa00'
const lightGreen = brighten(green)
const darkGreen = darken(green)
const blue = '#007ce0'
const lightBlue = brighten(blue)
const darkBlue = darken(blue)
const orange = '#dd8800'
const lightOrange = brighten(orange)
const darkOrange = darken(orange)
const purple = '#914175'
const lightPurple = brighten(purple)
const darkPurple = darken(purple)
const yellow = '#ddcc00'

// style
const text = white
const border = lightGray

// shades
const blues = [lightBlue, lightBlue, blue, blue]
const grays = [lightGray, lightGray, gray, gray]
const greens = [lightGreen, lightGreen, green, green]
const reds = [lightRed, lightRed, red, red]
const oranges = [lightOrange, lightOrange, orange, orange]
const purples = [lightPurple, lightPurple, purple, purple]

// semantic
const primary = blue
const secondary = gray
const success = green
const danger = red
const warning = yellow
const info = lightBlue
const light = lightGray
const dark = darkGray

// constrast
const primaryContrast = white
const secondaryContrast = black
const successContrast = white
const dangerContrast = white
const warningContrast = black
const infoContrast = white
const lightContrast = dark
const darkContrast = light

// styles
const styles = {
  primary: {
    main: primary,
    contrast: primaryContrast,
  },
  secondary: {
    main: secondary,
    contrast: secondaryContrast,
  },
  success: {
    main: success,
    contrast: successContrast,
  },
  danger: {
    main: danger,
    contrast: dangerContrast,
  },
  warning: {
    main: warning,
    contrast: warningContrast,
  },
  info: {
    main: info,
    contrast: infoContrast,
  },
  dark: {
    main: dark,
    contrast: darkContrast,
  },
  light: {
    main: light,
    contrast: lightContrast,
  },
}

export const colors = {
  transparent,
  black,
  white,
  gray,
  lightGray,
  darkGray,
  red,
  lightRed,
  darkRed,
  green,
  lightGreen,
  darkGreen,
  blue,
  lightBlue,
  darkBlue,
  orange,
  lightOrange,
  darkOrange,
  purple,
  lightPurple,
  darkPurple,
  yellow,
  // shades
  grays,
  blues,
  greens,
  reds,
  oranges,
  purples,
  // style
  text,
  border,
  // semantic
  primary,
  secondary,
  success,
  danger,
  warning,
  info,
  light,
  dark,
  // styles
  styles,
}

export default colors

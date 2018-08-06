import chroma from 'chroma-js'

const darken = (color) =>
  chroma(color)
    .darken(0.25)
    .hex()

const brighten = (color) =>
  chroma(color)
    .brighten(0.25)
    .hex()

const transparent = 'transparent'
const black = '#000e1a'
const white = '#fff'
const text = white
const gray = '#bbb'
const lightGray = '#ddd'
const darkGray = '#666'
const border = darkGray
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
const blues = [lightBlue, lightBlue, blue, blue]
const grays = [lightGray, lightGray, gray, gray]
const greens = [lightGreen, lightGreen, green, green]
const reds = [lightRed, lightRed, red, red]
const oranges = [lightOrange, lightOrange, orange, orange]
const purples = [lightPurple, lightPurple, purple, purple]

export const colors = {
  transparent,
  black,
  white,
  text,
  gray,
  lightGray,
  darkGray,
  border,
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
  blues,
  grays,
  greens,
  reds,
  oranges,
  purples,
}

export default colors

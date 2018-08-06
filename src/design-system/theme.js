import colors from './colors'

const space = [0, 4, 8, 16, 32, 64, 128, 256, 512]
const fontSizes = [12, 14, 16, 20, 24, 36, 48]

const radii = [0, 2, 4, 16, 9999, '100%']
const width = [16, 32, 64, 128, 256]
const heights = [16, 32, 64, 128, 256]
const maxWidths = [16, 32, 64, 128, 256, 512, 768, 1024, 1536]

const fontWeights = {
  normal: 400,
  subtle: 100,
  bold: 600,
}

const lineHeights = {
  solid: 1,
  title: 1.25,
  copy: 1.5,
}

const letterSpacings = {
  normal: 'normal',
  tracked: '0.1em',
  tight: '-0.05em',
  mega: '0.25em',
}

const fonts = {
  serif: 'athelas, georgia, times, serif',
  sansSerif:
    '"avenir next", avenir, "helvetica neue", helvetica, ubuntu, roboto, noto, "segoe ui", arial, sans-serif',
}

const borders = [
  0,
  '1px solid',
  '2px solid',
  '4px solid',
  '8px solid',
  '16px solid',
  '32px solid',
]

const breakpoints = ['40em', '52em', '64em']

// variants

const colorStyles = {
  normal: {},
  warning: {
    color: 'orange',
    backgroundColor: 'blue',
  },
  error: {
    color: 'white',
    backgroundColor: 'red',
  },
}

const textStyles = {
  caps: {
    textTransform: 'uppercase',
    letterSpacing: '0.2em',
  },
  smallcaps: {
    fontVariant: 'small-caps',
  },
}

const buttons = {
  default: {
    color: colors.text,
    backgroundColor: colors.gray,
  },
  primary: {
    color: colors.text,
    backgroundColor: colors.blue,
    '&:hover': {
      backgroundColor: colors.lightBlue,
    },
  },
  secondary: {
    color: colors.white,
    backgroundColor: colors.purple,
    '&:hover': {
      backgroundColor: colors.lightPurple,
    },
  },
}

// custom

const maxContainerWidth = '1024px'

const cardStyles = {
  normal: {},
  selected: {
    color: colors.white,
    background: colors.blue,
    borderColor: colors.border,
  },
}

const buttonTypes = buttons

const buttonSizes = {
  normal: {},
  small: {},
  large: {},
  xlarge: {},
}

const buttonStyles = {
  outline: {
    backgroundColor: colors.transparent,
    // borderColor: 'default',
  },
}

export const theme = {
  borders,
  breakpoints,
  buttons,
  colors,
  colorStyles,
  fonts,
  fontSizes,
  fontWeights,
  heights,
  letterSpacings,
  lineHeights,
  maxWidths,
  radii,
  space,
  textStyles,
  width,
  // custom
  maxContainerWidth,
  // custom variants
  buttonSizes,
  buttonStyles,
  buttonTypes,
  cardStyles,
}

export default theme

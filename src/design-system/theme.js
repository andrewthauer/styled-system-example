import colors from './colors'

// Core

const space = [0, 4, 8, 16, 32, 64, 128, 256, 512]
const breakpoints = ['40em', '52em', '64em']
const width = [16, 32, 64, 128, 256]
const maxWidths = [16, 32, 64, 128, 256, 512, 768, 1024, 1536]
const heights = [16, 32, 64, 128, 256]

// Typography

const fontSizes = [12, 14, 16, 20, 24, 36, 48]

const fonts = {
  serif: 'athelas, georgia, times, serif',
  sansSerif:
    '"avenir next", avenir, "helvetica neue", helvetica, ubuntu, roboto, noto, "segoe ui", arial, sans-serif',
}

const fontWeights = {
  normal: 400,
  subtle: 100,
  bold: 600,
}

const letterSpacings = {
  normal: 'normal',
  tracked: '0.1em',
  tight: '-0.05em',
  mega: '0.25em',
}

const lineHeights = {
  solid: 1,
  title: 1.25,
  copy: 1.5,
}

// Borders

const radii = [0, 2, 4, 16, 9999, '100%']

const borders = [
  0,
  '1px solid',
  '2px solid',
  '4px solid',
  '8px solid',
  '16px solid',
  '32px solid',
]

// misc

const shadows = ['none', `inset 0 0 0 1px ${colors.gray}`]

const opacity = {}

// Variants

const textStyles = {
  capitalize: {
    textTransform: 'capitalize',
  },
  lowercase: {
    textTransform: 'lowercase',
  },
  caps: {
    textTransform: 'uppercase',
  },
  smallcaps: {
    fontVariant: 'small-caps',
  },
}

const colorStyles = {
  primary: {
    backgroundColor: colors.styles.primary.main,
    color: colors.styles.primary.contrast,
  },
  secondary: {
    backgroundColor: colors.styles.secondary.main,
    color: colors.styles.secondary.contrast,
  },
  success: {
    backgroundColor: colors.styles.success.main,
    color: colors.styles.success.contrast,
  },
  danger: {
    backgroundColor: colors.styles.danger.main,
    color: colors.styles.danger.contrast,
  },
  warning: {
    backgroundColor: colors.styles.warning.main,
    color: colors.styles.warning.contrast,
  },
  info: {
    backgroundColor: colors.styles.info.main,
    color: colors.styles.info.contrast,
  },
  light: {
    backgroundColor: colors.styles.light.main,
    color: colors.styles.light.contrast,
  },
  dark: {
    backgroundColor: colors.styles.dark.main,
    color: colors.styles.dark.contrast,
  },
}

const buttons = {}

// Custom

const maxContainerWidth = '1024px'

// Custom Variants

const cardStyles = {
  normal: {},
  selected: {
    color: colors.white,
    background: colors.blue,
    borderColor: colors.border,
  },
}

const buttonStyles = {
  outline: {
    backgroundColor: colors.transparent,
    // borderColor: 'red',
  },
}

export const theme = {
  // core
  space,
  breakpoints,
  width,
  maxWidths,
  heights,
  // color
  colors,
  // typography
  fonts,
  fontSizes,
  fontWeights,
  letterSpacings,
  lineHeights,
  // borders
  radii,
  borders,
  // misc
  shadows,
  opacity,
  // variants
  textStyles,
  colorStyles,
  buttons,
  // custom
  maxContainerWidth,
  // custom variants
  buttonStyles,
  cardStyles,
}

export default theme

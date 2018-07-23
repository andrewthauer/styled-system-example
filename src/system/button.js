import system from 'system-components'
import { themeGet } from 'styled-system'

const defaultColors = {
  color: 'black',
  bg: 'light-gray',
}

const defaultButtonStyle = (props) => ({
  color: themeGet(`colors.${defaultColors.color}`)(props),
  backgroundColor: themeGet(`colors.${defaultColors.bg}`)(props),
})

const primaryButtonStyle = (props) => ({
  color: themeGet('colors.white')(props),
  backgroundColor: themeGet('colors.blue')(props),
  '&:hover': {
    backgroundColor: themeGet('colors.navy')(props),
  },
})

export const Button = system(
  {
    is: 'button',
    fontSize: 1,
    m: 0,
    px: 3,
    py: 2,
    border: 0,
    borderRadius: 2,
    color: defaultColors.color,
    bg: defaultColors.bg,
  },
  {
    cursor: 'pointer',
  },
  (props) => props.default && defaultButtonStyle(props),
  (props) => props.primary && primaryButtonStyle(props),
  'color',
)

Button.displayName = 'Button'

export default Button

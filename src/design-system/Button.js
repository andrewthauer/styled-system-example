import React from 'react'
// import PropTypes from 'prop-types'
import system from 'system-components'
import { css } from 'styled-components'
import { themeGet } from 'styled-system'
import { borderRadii } from './styles'
import theme from './theme'

const colors = theme.colors
const colorStyles = colors.styles
const buttonTypeKey = 'buttonType'

const defaults = {
  colorStyle: 'secondary',
  color: colorStyles.secondary.color,
  background: colorStyles.secondary.backgroundColor,
}

const defaultStyle = (colorStyle) => ({
  backgroundColor: colorStyle.main,
  borderColor: colors.border,
  color: colorStyle.contrast,
})

const outlineStyle = (colorStyle, props) => ({
  backgroundColor: 'transparent',
  border: themeGet('borders.2')(props),
  borderColor: colorStyle.main,
  color: colorStyle.main,
})

const buttonStyle = (props) => {
  const type = props[buttonTypeKey] || 'secondary'
  const colorStyle = colorStyles[type]
  const style = props.buttonStyle || 'default'
  return style === 'outline'
    ? outlineStyle(colorStyle, props)
    : defaultStyle(colorStyle, props)
}

const buttonCursorStyle = css`
  cursor: ${(props) => (props.disabled ? 'default' : 'pointer')};
  opacity: ${(props) => (props.disabled ? 0.5 : 1.0)};
`

const buttonHoverStyle = (props) => {
  if (props.disable) return {}
  return {
    '&:hover': {
      opacity: 0.5,
    },
  }
}

export const Button = system(
  {
    is: 'button',
    fontSize: 1,
    p: 2,
    border: 1,
    borderRadius: 2,
    color: defaults.color,
    bg: defaults.background,
  },
  'space',
  'color',
  // 'colorStyle',
  // 'buttons',
  buttonStyle,
  buttonCursorStyle,
  buttonHoverStyle,
  borderRadii,
)

Button.displayName = 'Button'

Button.Small = (props) => <Button {...props} fontSize={1} p={2} />
Button.Small.displayName = 'Button.Small'

Button.Large = (props) => <Button {...props} fontSize={3} p={3} />
Button.Large.displayName = 'Button.Large'

export default Button

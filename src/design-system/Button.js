import React from 'react'
import PropTypes from 'prop-types'
import { space } from 'styled-system'
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
  (props) => ({
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: themeGet('colors.navy')(props),
    },
  }),
  (props) => props.default && defaultButtonStyle(props),
  (props) => props.primary && primaryButtonStyle(props),
  (props) => props.large && { fontSize: 3, space },
  'color',
  'buttonStyle',
)

Button.displayName = 'Button'

Button.propTypes = {
  default: PropTypes.bool,
  primary: PropTypes.bool,
  large: PropTypes.bool,
}

Button.Small = (props) => <Button {...props} fontSize={1} px={1} py={1} />
Button.Small.displayName = 'Button.Small'

Button.Large = (props) => <Button {...props} fontSize={3} p={2} />
Button.Large.displayName = 'Button.Large'

export default Button

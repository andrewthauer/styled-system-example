import styled from 'styled-components'
import PropTypes from 'prop-types'
import { theme } from './theme'
import { Box } from './Box'

const maxWidth = (props) =>
  props.maxWidth
    ? { maxWidth: `${props.maxWidth}px` }
    : { maxWidth: props.theme.maxContainerWidth }

export const Container = styled(Box)`
  margin: auto;
  ${maxWidth};
`

Container.propTypes = {
  maxWidth: PropTypes.number,
}

Container.defaultProps = {
  theme: theme,
}

Container.displayName = 'Container'

export default Container

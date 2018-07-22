import styled from 'styled-components'
import {
  color,
  flex,
  fontSize,
  order,
  space,
  width,
  alignSelf,
} from 'styled-system'

export const Box = styled.div`
  box-sizing: 'border-box';
  ${space};
  ${width};
  ${color};
  ${flex};
  ${fontSize};
  ${order};
  ${alignSelf};
`

Box.propTypes = {
  ...space.propTypes,
  ...width.propTypes,
  ...color.propTypes,
}

Box.displayName = 'Box'

export default Box

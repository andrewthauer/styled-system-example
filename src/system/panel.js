import styled from 'styled-components'
import system from 'system-components'
import { border, color, space } from 'styled-system'
import { borderTopLeftRadius, borderTopRightRadius } from './functions'
import { Box } from './box'
import { Heading } from './heading'

const panelDefaults = {
  border: 1,
  borderRadius: 3,
  borderColor: 'blacks.5',
}

export const Panel = system(
  {
    is: Box,
    border: panelDefaults.border,
    borderRadius: panelDefaults.borderRadius,
    borderColor: panelDefaults.borderColor,
  },
  'borderRadius',
)

Panel.displayName = 'Panel'

Panel.Header = styled(Heading.h3)`
  ${color};
  ${space};
  ${border};
  ${borderTopLeftRadius};
  ${borderTopRightRadius};
  + p {
    padding: 0 16px;
  }
`

Panel.Header.defaultProps = {
  bg: 'blacks.8',
  fontSize: 4,
  p: 3,
  borderBottom: panelDefaults.border,
  borderTopLeftRadius: panelDefaults.borderRadius,
  borderTopRightRadius: panelDefaults.borderRadius,
}

Panel.Header.displayName = 'Panel.Header'

export default Panel

import system from 'system-components'
import { Box } from './box'

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
  {
    overflow: 'hidden',
  },
)

Panel.displayName = 'Panel'

Panel.Header = system({
  is: 'header',
  fontSize: 2,
  p: 2,
  bg: 'white',
  borderBottom: 1,
  borderColor: 'gray',
})

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

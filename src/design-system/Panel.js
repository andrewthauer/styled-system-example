import system from 'system-components'
import { Box } from './Box'

export const Panel = system(
  {
    is: Box,
    border: 1,
    borderColor: 'darkGray',
    borderRadius: 2,
  },
  'borders',
  'borderColor',
  'borderRadius',
  {
    overflow: 'hidden',
  },
)

Panel.displayName = 'Panel'

Panel.Header = system(
  {
    is: 'header',
    fontSize: 2,
    py: 2,
    px: 3,
    bg: 'white',
    borderBottom: 1,
    borderColor: 'gray',
  },
  'borders',
  'borderColor',
  'borderRadius',
)

Panel.Header.displayName = 'Panel.Header'

export default Panel

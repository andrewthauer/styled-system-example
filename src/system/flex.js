import system from 'system-components'
import { Box } from './box'

export const Flex = system(
  {
    is: Box,
  },
  { display: 'flex' },
  'flexWrap',
  'flexDirection',
  'alignItems',
  'justifyContent',
)

Flex.displayName = 'Flex'

export default Flex

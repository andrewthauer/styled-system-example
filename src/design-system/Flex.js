import system from 'system-components'
import { Box } from './Box'

export const Flex = system(
  {
    is: Box,
  },
  { display: 'flex' },
  'alignItems',
  'flexWrap',
  'flexDirection',
  'justifyContent',
)

Flex.displayName = 'Flex'

export default Flex

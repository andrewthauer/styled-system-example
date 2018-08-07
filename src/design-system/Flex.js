import system from 'system-components'
import { Box } from './Box'
import { flexbox } from './styles'

export const Flex = system(
  {
    is: Box,
  },
  { display: 'flex' },
  flexbox,
)

Flex.displayName = 'Flex'

export default Flex

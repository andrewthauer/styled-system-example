import sys from 'system-components'
import { Box } from './Box'

export const Column = sys({
  is: Box,
  px: 3,
  mb: 2,
  flex: '1 1 auto',
})

Column.displayName = 'Column'

export default Column

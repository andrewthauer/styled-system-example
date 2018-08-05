import system from 'system-components'
import { borderRadii, gridArea } from './styles'

export const Box = system(
  {},
  () => ({ boxSizing: 'border-box' }),
  'alignSelf',
  'color',
  'flex',
  'fontSize',
  'order',
  'space',
  'width',
  'textAlign',
  gridArea,
  borderRadii,
)

Box.displayName = 'Box'

export default Box

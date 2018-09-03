import system from 'system-components'
import { flexbox } from './styles'

export const Box = system(
  {},
  () => ({ boxSizing: 'border-box' }),
  'alignSelf',
  'color',
  'flex',
  'fontSize',
  'order',
  'space',
  'display',
  'width',
  'minWidth',
  'maxWidth',
  'height',
  'minHeight',
  'maxHeight',
  'textAlign',
  flexbox,
)

Box.displayName = 'Box'

export default Box

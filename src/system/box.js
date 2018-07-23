import system from 'system-components'

export const Box = system(
  {},
  (props) => ({ boxSizing: 'border-box' }),
  'space',
  'width',
  'color',
  'display',
  'flex',
  'fontSize',
  'order',
  'textAlign',
  'alignSelf',
  'alignItems',
)

Box.displayName = 'Box'

export default Box

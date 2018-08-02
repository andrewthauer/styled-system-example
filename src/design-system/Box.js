import system from 'system-components'

export const Box = system(
  {},
  (props) => ({ boxSizing: 'border-box' }),
  'alignSelf',
  'color',
  'flex',
  'fontSize',
  'order',
  'space',
  'width',
)

Box.displayName = 'Box'

export default Box

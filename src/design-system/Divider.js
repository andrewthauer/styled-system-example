import system from 'system-components'

export const Divider = system(
  {
    is: 'hr',
    my: 4,
  },
  'border',
  'color',
)

Divider.displayName = 'Divider'

export default Divider

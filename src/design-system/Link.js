import system from 'system-components'

export const Link = system(
  {
    is: 'a',
  },
  'color',
  'fontFamily',
  'fontSize',
)

Link.displayName = 'Link'

export default Link

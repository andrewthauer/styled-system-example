import system from 'system-components'

export const Avatar = system(
  {
    is: 'img',
    size: 48,
    borderRadius: 3,
  },
  { display: 'inline-block' },
  'space',
  'color',
  'size',
)

Avatar.displayName = 'Avatar'

export default Avatar

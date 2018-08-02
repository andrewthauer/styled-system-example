import system from 'system-components'

export const styleNavLink = (link) => {
  return system(
    {
      is: link,
      fontSize: 3,
      m: 0,
      px: 2,
    },
    'color',
    'fontFamily',
    'fontSize',
  )
}

export const NavLink = styleNavLink('a')

NavLink.displayName = 'NavLink'

export default NavLink

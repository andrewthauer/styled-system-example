import PropTypes from 'prop-types'
import { styledNavLink } from '../design-system'
import { Link } from 'react-router-dom'

export const NavLink = styledNavLink(Link)

NavLink.propTypes = {
  to: PropTypes.string,
  children: PropTypes.any,
}

export default NavLink

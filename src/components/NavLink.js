import React from 'react'
import { styleNavLink } from '../design-system'
import { Link } from 'react-router-dom'

const StyledLink = styleNavLink(Link)

export const NavLink = ({ ...props, to, children }) => <StyledLink to={props.to} {...props}>{children}</StyledLink>

export default NavLink

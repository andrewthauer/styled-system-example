import React from 'react'
import { Container } from './design-system'
import { NavLink, RouteSwitch } from './components'
import { routes, visiblePredicate } from './routes'
import { ListUnstyled, ListItem } from './design-system'

export const AppShell = () => (
  <Container>
    <ListUnstyled>
      {routes.filter(visiblePredicate).map((route) => (
        <ListItem key={route.path}>
          <NavLink to={route.path}>{route.title}</NavLink>
        </ListItem>
      ))}
    </ListUnstyled>
    <RouteSwitch routes={routes} />
  </Container>
)

export default AppShell

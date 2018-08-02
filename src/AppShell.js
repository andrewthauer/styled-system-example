import React from 'react'
import { Container } from './design-system'
import { NavLink, RouteSwitch } from './components'
import { routes, visiblePredicate } from './routes'
import { List, ListItem } from './design-system'

export const AppShell = () => (
  <Container>
    <List>
      {routes.filter(visiblePredicate).map((route) => (
        <ListItem>
          <NavLink to={route.path}>{route.title}</NavLink>
        </ListItem>
      ))}
    </List>
    <RouteSwitch routes={routes} />
  </Container>
)

export default AppShell

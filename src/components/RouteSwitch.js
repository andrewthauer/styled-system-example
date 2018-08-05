import React from 'react'
import PropTypes from 'prop-types'
import { Switch, Route } from 'react-router-dom'

export const RouteSwitch = ({ routes }) => (
  <Switch>
    {routes.map((route, index) => (
      <Route
        key={index}
        path={route.path}
        exact={route.exact}
        component={route.component}
      />
    ))}
  </Switch>
)

RouteSwitch.displayName = 'RouteSwitch'

RouteSwitch.propTypes = {
  routes: PropTypes.array,
}

export default RouteSwitch

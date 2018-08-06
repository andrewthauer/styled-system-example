/* eslint-disable react/display-name */

import React from 'react'
import { Boxes, Buttons, Home, Grids, NotFound, Responsive } from './pages'

export const routes = [
  {
    path: '/',
    exact: true,
    title: 'Home',
    component: () => <Home />,
  },
  {
    path: '/boxes',
    title: 'Boxes',
    component: () => <Boxes />,
  },
  {
    path: '/buttons',
    title: 'Buttons',
    component: () => <Buttons />,
  },
  {
    path: '/grids',
    title: 'Grids',
    component: () => <Grids />,
  },
  {
    path: '/responsive',
    title: 'Responsive',
    component: () => <Responsive />,
  },
  {
    path: '',
    title: '404',
    hidden: true,
    component: () => <NotFound />,
  },
]

export const visiblePredicate = (route) => !route.hidden

export default routes

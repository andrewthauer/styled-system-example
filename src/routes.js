/* eslint-disable react/display-name */

import React from 'react'
import {
  Buttons,
  Home,
  GridLayout,
  NotFound,
  Responsive,
  Typography,
} from './pages'

export const routes = [
  {
    path: '/',
    exact: true,
    title: 'Home',
    component: () => <Home />,
  },
  {
    path: '/typography',
    title: 'Typography',
    component: () => <Typography />,
  },
  {
    path: '/buttons',
    title: 'Buttons',
    component: () => <Buttons />,
  },
  {
    path: '/grid',
    title: 'Grid',
    component: () => <GridLayout />,
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

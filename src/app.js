import React, { Component } from 'react'
import { ThemeProvider } from 'styled-components'
import { BrowserRouter as Router } from 'react-router-dom'

import theme from './design-system/theme'
import AppShell from './AppShell'

export class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Router>
          <AppShell />
        </Router>
      </ThemeProvider>
    )
  }
}

export default App

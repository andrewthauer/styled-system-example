import React, { Component } from 'react'
import { ThemeProvider } from 'styled-components'
import theme from './system/theme'
import { Home } from './home'

export class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Home />
      </ThemeProvider>
    )
  }
}

export default App

import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider } from 'styled-components'
import App from './App'
import { AppProvider } from './providers/appProvider'
import { GlobalStyle } from './styles/globalStyles'
import theme from './styles/theme'

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <AppProvider>
        <GlobalStyle />
        <App />
      </AppProvider>
    </ThemeProvider>
  </React.StrictMode >,
  document.getElementById('root')
)

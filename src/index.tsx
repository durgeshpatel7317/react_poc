import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App/App'
import Theme from './Theme/AppTheme'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)
root.render(
  <React.StrictMode>
    <Theme>
      <App />
    </Theme>
  </React.StrictMode>
)

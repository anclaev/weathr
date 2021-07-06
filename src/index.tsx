import { StrictMode } from 'react'
import { render } from 'react-dom'

import App from './app'
import './styles/index.sass'

render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.body
)

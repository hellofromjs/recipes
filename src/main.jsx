import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App/App'
import './scss/_custom.scss';
import './scss/index.scss'

import "bootstrap/dist/js/bootstrap.min.js";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

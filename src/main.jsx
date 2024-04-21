import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom';
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { all } from '@awesome.me/kit-KIT_CODE/icons'

// library.add(...all)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
  </React.StrictMode>,
)

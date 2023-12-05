import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  // React 的严格模式 ( props state context ) 只读
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

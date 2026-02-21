import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className="noise-overlay"></div>
    <div className="bg-orb orb-1"></div>
    <div className="bg-orb orb-2"></div>
    <App />
  </React.StrictMode>,
)

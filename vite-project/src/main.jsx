import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { AppStorage } from './AppContent.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppStorage> 
      <App />
    </AppStorage>
    
  </React.StrictMode>,
)

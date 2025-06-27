import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import "./assets/css/index.css"

// 1. Root elementni topish
const rootElement = document.getElementById('root')

// 2. ReactDOM.createRoot() orqali root yaratish
const root = ReactDOM.createRoot(rootElement)

// 3. App komponentini render qilish
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
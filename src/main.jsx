import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import "./assets/css/index.css"

// Debug uchun
console.log('Main.jsx yuklandi');

const rootElement = document.getElementById('root')
const root = ReactDOM.createRoot(rootElement)

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
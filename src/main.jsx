import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import Scroll from './Components/Scroll.jsx'
import ContextProvider from './assets/Context/Context.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <BrowserRouter>

      <ContextProvider>

        <Scroll />
    
        <App />

      </ContextProvider>

    </BrowserRouter>
  </React.StrictMode>,
)

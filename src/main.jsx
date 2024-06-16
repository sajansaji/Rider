import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App.jsx'
import './index.css'
import Login from './components/Login.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    
    <BrowserRouter>
      <Routes>
        <Route path='/auth' element={<Login />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)

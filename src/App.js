import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import MainPage from './pages/MainPage'
import './App.css'
import Documentation from './pages/Documentation'
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainPage/> } />
          <Route path='doc' element={<Documentation />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

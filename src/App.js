import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import MainPage from './pages/MainPage'
import './App.css'
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainPage/> } />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Catalog from './components/Catalog'
import Navbar from './components/Navbar'
import Home from './components/Home'

function App() {
  

  return (
    <>
    
    <div className="app">
      
      <Navbar />
      <div className="content">
        <Routes>
          
          <Route path='/' element={<Home />} />
          <Route path='/catalog' element={<Catalog />} />

        </Routes>
      </div>
    </div>
    </>
  )
}

export default App

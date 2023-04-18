import './App.css'
import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'

import Home from './components/Home/Home'
import Login from './components/Login/Login'
import Register from './components/Register/Register'

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  return (
    <Routes>
        <Route path="/" element={<Home isLoggedIn={isLoggedIn}/>} />
        <Route path="/login" element={<Login isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/register" element={<Register isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />} />
      </Routes>
  )
}

export default App

import { useState } from 'react'
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './auth/Login';
import Main  from "./main/Index";
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Router basename='/QuickKasir/'>
          <Routes>
            <Route path='/' element={<Main />}></Route>
            <Route path='/login' element={<Login />}></Route>
          </Routes>
      </Router>
    </>
  )
}

export default App

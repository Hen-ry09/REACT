import React from 'react'
import Home from './pages/Home'
import About from './pages/About'
import Details from './pages/Details'
import Items from './pages/Items'
import { Routes,Route } from 'react-router-dom'
import ErrorPage from './pages/ErrorPage'
import NavBar from './Components/NavBar'
import Hero from './pages/Hero'
import Contact from './pages/Contact'

const App = () => {
  return (
    <>
    <NavBar/>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/About" element={<About/>}></Route>
      <Route path="/Details" element={<Details/>}></Route>
      <Route path="/Items" element={<Items/>}></Route>
      <Route path="*" element={<ErrorPage/>}></Route>
      <Route path="/Hero" element={<Hero />}></Route>
      <Route path="/Contact" element={<Contact/>}></Route>
    </Routes>
    </>
    
  )
}

export default App
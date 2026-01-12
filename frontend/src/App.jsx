import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Homepage from './pages/Homepage'
import AboutUs from './pages/AboutUs'

const App = () => {
  return (
    <div>
      <Routes>
         <Route path="/" element={<Homepage/>}/>
         <Route path="/about-us" element={<AboutUs/>}/>
      </Routes>
    </div>
  )
}

export default App
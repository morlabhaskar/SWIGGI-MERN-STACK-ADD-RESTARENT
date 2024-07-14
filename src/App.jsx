import React from 'react'
import LandingPage from './vendorDashboard/pages/LandingPage'
import {Routes,Route} from 'react-router-dom'
import Hero from './vendorDashboard/pages/Hero'
import Navbar from './vendorDashboard/components/Navbar'


const App = () => {
  return (
    <>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Hero/>} />
        <Route path='/dashboard' element={<LandingPage/>} />
      </Routes>
      
    </>
  )
}

export default App
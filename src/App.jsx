import React from 'react'
import LandingPage from './vendorDashboard/pages/LandingPage'
import {Routes,Route} from 'react-router-dom'


const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<LandingPage/>} />
      </Routes>
      
    </>
  )
}

export default App
import React from 'react'
import LandingPage from './vendorDashboard/pages/LandingPage'
import { Routes, Route, Outlet } from 'react-router-dom'
import Hero from './vendorDashboard/pages/Hero'
import Navbar from './vendorDashboard/components/Navbar'
import PageNotFound from './vendorDashboard/components/PageNotFound'


const App = () => {
  const Layout = () => (
    <>
    <Navbar/>
    <Outlet/>
    </>
  )
  
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Hero />} />
          <Route path='dashboard' element={<LandingPage />} />
        </Route>
        <Route path='*' element={<PageNotFound />} />
      </Routes>

    </>
  )
}

export default App
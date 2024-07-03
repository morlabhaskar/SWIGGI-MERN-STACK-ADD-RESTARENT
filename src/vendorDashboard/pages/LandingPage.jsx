import React, { useState } from 'react'
import Navbar from '../components/Navbar';
import SideBar from '../components/SideBar';
import AddFirm from '../components/forms/AddFirm';
import AddProduct from '../components/forms/AddProduct';
import AllProducts from '../components/AllProducts';
import Profile from '../components/Profile';

const LandingPage = () => {
  const [showaddfirm,setShowaddfirm] = useState(false)
  const [showaddproduct,setShowaddproduct] = useState(false)
  const [allproducts,setAllproducts] = useState(false)
  const [profile,setProfile] = useState(true)

  const showaddfirmHandler = () => {
    setShowaddfirm(true)
    setShowaddproduct(false)
    setAllproducts(false)
    setProfile(false)
  }
  const showaddproductHandler = () => {
    setShowaddproduct(true)
    setShowaddfirm(false)
    setAllproducts(false)
    setProfile(false)
  }
  const allproductsHandler = () => {
    setAllproducts(true)
    setShowaddfirm(false)
    setShowaddproduct(false)
    setProfile(false)
  }
  const profileHandler = () => {
    setProfile(true)
    setShowaddfirm(false)
    setShowaddproduct(false)
    setAllproducts(false)
  }

  return (
    <>
      <Navbar/>
      <div className="layout flex">
        <SideBar showaddfirmHandler={showaddfirmHandler} showaddproductHandler={showaddproductHandler} allproductsHandler={allproductsHandler} profileHandler={profileHandler} />
        {showaddfirm && <AddFirm  />}
        {showaddproduct && <AddProduct/>}
        {allproducts && <AllProducts/>}
        {profile && <Profile/>}
      </div>

    </>

  )
}

export default LandingPage
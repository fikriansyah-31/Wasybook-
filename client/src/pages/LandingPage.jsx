import React from 'react'
import background from "../assets/img/background.png";
import AdminNav from '../component/navbar/AdminNav'
import Navbar from "../component/navbar/PublicNavbar"
import CustomerNavbar from "../component/navbar/Customer"
import { useState } from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import SlideBook from '../component/halaman utama/SlideBook'
import ListBook from '../component/halaman utama/ListBook'
import IMG from '../../src/assets/img/background.png'
import Login from '../component/halaman utama/Login'
import Register from '../component/halaman utama/Register'
import { useStat } from 'react'

function LandingPage() {

  document.body.style.backgroundImage = IMG;
  document.body.style.backgroundColor="#fff"

  const [openLogin, setOpenLogin] = useState(null);

  const [openRegister, setOpenRegister] =useState(false)

  const handleClickLogin = () => {
    setOpenLogin(true)
  }

  const handleClickRegister = () => {
    setOpenRegister(true)
  }

  return (
    <div
    style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "100%",
        width: "100%",
      }}>
      <div className="navbar" style={{display : "flex", height : "7vh"}}>
          <Navbar handleClickLogin={handleClickLogin} handleClickRegister={handleClickRegister}/>
      </div>
    
    { openLogin ? <Login/> : null }

    { openRegister ? <Register/> : null }

      <div className="body"style={{minHeight : "93vh"}}>
        <div className="slider" style={{marginLeft : "1%", marginRight : "1%"}}>
          <SlideBook/>
        </div>

        <div className="listBook" style={{marginTop : "50px"}}>
          <ListBook/>
        </div>
      </div>
      
    </div>
  )
}

export default LandingPage
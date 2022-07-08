import React, { useState, useEffect} from 'react'
import AdminNavbar from '../components/navbar/AdminNav'
import PublicNavbar from "../components/navbar/Navbar"
import CustomerNavbar from "../components/navbar/Customer"
import { useNavigate } from 'react-router-dom'
import SlideBook from '../components/halaman utama/SlideBook'
import ListBook from '../components/halaman utama/ListBook'
import IMG from '../../src/assets/img/background.png'
import Login from '../components/halaman utama/Login'
import Register from '../components/halaman utama/Register'

function LandingPage() {

  document.body.style.backgroundImage = IMG;
  document.body.style.backgroundColor="#fff"

  const [openLogin, setOpenLogin] = useState(false);

  const [openRegister, setOpenRegister] =useState(false)

  const handleClickLogin = () => {
    setOpenLogin(true)
  }

  const handleOpenRegister = () => {
    setOpenRegister(true)
  }

  return (
    <div>
      <div className="navbar" style={{display : "flex", height : "7vh"}}>
          <PublicNavbar handleClickLogin={handleClickLogin} handleOpenRegister={handleOpenRegister}/>
      </div>

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
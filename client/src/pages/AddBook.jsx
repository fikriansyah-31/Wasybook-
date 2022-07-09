import React from 'react'
import background from "../assets/img/background.png";
import Form from '../component/addBook/form'
import AdminNav from '../component/navbar/AdminNav'

function AddBook() {
  return (
    <div
    style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "100%",
        width: "100%",
      }}>
      <div className="navbar">
        <AdminNav/>
      </div>

      <div className="form" style={{marginLeft : "10%", marginRight : "10%", marginTop : "50px"}}>
        <Form/>
      </div>
    </div>
  )
}

export default AddBook
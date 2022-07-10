import React from 'react'
import CustomerNavbar from '../component/navbar/Customer'
import MyBook from '../component/profile/myBook'
import Profiles from '../component/profile/profiles'

function Profile() {
  return (
    <div>
      <div className="navbar" style={{height : "7vh"}}>
          <CustomerNavbar/>
      </div>

      <div className="All" style={{marginLeft : "10%", marginRight : "10%", minHeight : "93vh", marginTop : "100px"}}>
        <div className="Profiles">
          <Profiles/>
        </div>

        <div className="Mybook" style={{marginTop : "50px"}}>
          <myBook/>
        </div>
      </div>
    </div>
  )
}

export default Profile
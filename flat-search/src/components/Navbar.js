import React from "react"
import logo from '../images/house.png'
import '../stylesheets/Navbar.css';

function Navbar(){
  return (
     <nav>
        <img src={logo} className="nav--logo"/>
     </nav>
   )
}

export default Navbar

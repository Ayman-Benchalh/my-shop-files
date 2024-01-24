import { NavLink } from "react-router-dom"
import { FaCartShopping } from "react-icons/fa6";
import { useEffect, useState } from "react";
// import CardTotle from "./CardTotle";
// import { useState } from "react";

function Navbar(props) {
  const [counter,setcounter]=useState(0)
  
  useEffect(()=>{setcounter(props.data)}, [props.data])
  

  return (
    <div className="containerNav">
        <div className="logo"> <h1>Shop-my</h1></div>
        <div className="navpart">
            <ul>
              <li><NavLink to='/'> Home</NavLink></li>
                   {/*  
                    <li><NavLink to='/aboute'> Aboute</NavLink></li>
                    <li><NavLink to='/contact'> Contact</NavLink></li>
                    <li><NavLink to='/account'> Account</NavLink></li> */}
                <li><NavLink to='/CardTotle'><FaCartShopping/> ({counter}) </NavLink></li>
            </ul>
            
        </div>
    </div>
  )
}

export default Navbar
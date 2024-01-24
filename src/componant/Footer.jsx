import { NavLink } from "react-router-dom"
import { FaFacebookSquare,FaInstagram,FaGithub,FaLinkedin ,FaRegCopyright } from "react-icons/fa";
function Footer() {
  return (
    <div className="containerfooter">
        <div className="party1"><h1>shop-my <FaRegCopyright/>copyrghit</h1></div>
        <div className="party2">
            <ul>
                <li><NavLink to='#'><FaFacebookSquare/></NavLink></li>
                <li><NavLink to='#'><FaInstagram/></NavLink></li>
                <li><NavLink to='#'><FaGithub/></NavLink></li>
                <li><NavLink to='#'><FaLinkedin/></NavLink></li>
            
        </ul>
        </div>
    </div>
  )
}

export default Footer
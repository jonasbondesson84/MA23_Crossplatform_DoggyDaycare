import { Link } from "react-router-dom";
import logo from '../assets/logo.webp'
import {MdOutlineMenu} from 'react-icons/md'
import { useState } from "react";
import NavLinks from "./NavLinks";


const NavbarMobile = ({menuOpen, setMenuOpen}) => {

    
    const Hamburger = <MdOutlineMenu className="hamburgerMenu"
            size="30px" color="black" onClick={()=> {
                
                setMenuOpen(!menuOpen)}}/>

    
    return ( 
        <nav className="navbarMobile">
            <Link to='/'>
                <img src={logo} alt="" id="navbar-logo"/>
            </Link>
            {Hamburger }
            <div className="menuOpen">
            {menuOpen && <NavLinks setMenuOpen={setMenuOpen}/>}
            </div>
        </nav>
     );
}
 
export default NavbarMobile;
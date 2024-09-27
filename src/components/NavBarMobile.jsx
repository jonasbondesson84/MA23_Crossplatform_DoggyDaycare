import { Link } from "react-router-dom";
import logo from '../assets/logo.webp'
// import {MdOutlineMenu} from 'react-icons/md'
import { useState } from "react";
import NavLinks from "./NavLinks";
import HamburgerMenu from "./HamburgerMenu";
import '../css/Catalog.css'


const NavbarMobile = ({menuOpen, setMenuOpen}) => {

    return ( 
        <nav className="navbarMobile">
            <img src={logo} alt="" className="navbar-logo border-primary"/>
            <HamburgerMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
            <div className={`menuOpen ${menuOpen ? 'change' : ' '}`}>
                {<NavLinks setMenuOpen={setMenuOpen} menuOpen={menuOpen}/>}
            </div>
        </nav>
     );
}
 
export default NavbarMobile;
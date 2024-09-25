import { Link } from "react-router-dom";
import logo from '../assets/logo.webp'
// import {MdOutlineMenu} from 'react-icons/md'
import { useState } from "react";
import NavLinks from "./NavLinks";
import HamburgerMenu from "./HamburgerMenu";


const NavbarMobile = ({menuOpen, setMenuOpen}) => {

    
    // const Hamburger = <MdOutlineMenu className="hamburgerMenu"
    //         size="30px" color="black" onClick={()=> {
                
    //             setMenuOpen(!menuOpen)}}/>

    
    

    
    return ( 
        <nav className="navbarMobile">
            <Link to='/'>
                <img src={logo} alt="" className="navbar-logo border-primary"/>
            </Link>
            {/* {Hamburger } */}
            {/* <div className="hamburgerMenu" onClick={()=> {setMenuOpen(!menuOpen)}}>Menu</div> */}
            <HamburgerMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
            <div className={`menuOpen ${menuOpen ? 'change' : ''}`}>
            {menuOpen && <NavLinks setMenuOpen={setMenuOpen}/>}
            </div>
        </nav>
     );
}
 
export default NavbarMobile;
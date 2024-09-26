import { Link } from "react-router-dom";
import logo from '../assets/logo.webp'
import NavLinks from "./NavLinks";
import '../css/Navbar.css'


const Navbar = ({menuOpen, setMenuOpen}) => {
    
    return ( 
        <nav className="navbar">
            <Link to='/'>
                <img src={logo} alt="" className="navbar-logo border-primary"/>
            </Link>
            <NavLinks setMenuOpen={setMenuOpen}/>
            
        </nav>
     );
}
 
export default Navbar;
import { Link } from "react-router-dom";
import logo from '../assets/logo.webp'
import NavLinks from "./NavLinks";


const Navbar = ({menuOpen, setMenuOpen}) => {
    
    return ( 
        <nav className="navbar">
            <Link to='/'>
                <img src={logo} alt="" id="navbar-logo"/>
            </Link>
            <NavLinks setMenuOpen={setMenuOpen}/>
            
        </nav>
     );
}
 
export default Navbar;
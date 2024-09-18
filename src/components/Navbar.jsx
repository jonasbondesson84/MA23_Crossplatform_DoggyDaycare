import { Link } from "react-router-dom";
import logo from '../assets/logo.webp'

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <img src={logo} alt="" id="navbar-logo"/>
            <div className="links">
            <Link to='/'> 
                <div className="links">
                    Home        
                    <div className="underline"></div>
                </div>
            </Link>
            <Link to='/catalog'> 
                <div className="links">
                    Catalog        
                    <div className="underline"></div>
                </div>
            </Link>
            </div>
        </nav>
     );
}
 
export default Navbar;
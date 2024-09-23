import { Link } from "react-router-dom";
import { useState } from "react";

const NavLinks = ({setMenuOpen}) => {
    return ( 
        <div className="links">
            <Link to='/' onClick={() => {setMenuOpen(false)}}> 
                <div className="link">
                    Home        
                    <div className="underline"></div>
                </div>
            </Link>
            <Link to='/catalog' onClick={() => {setMenuOpen(false)}}> 
                <div className="link">
                    Catalog        
                    <div className="underline"></div>
                </div>
            </Link>
            
            </div>
     );
}
 
export default NavLinks;
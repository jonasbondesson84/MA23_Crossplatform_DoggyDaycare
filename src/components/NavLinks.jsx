import { Link } from "react-router-dom";

import {motion} from 'framer-motion';

const NavLinks = ({setMenuOpen, menuOpen}) => {
    
    return ( 
        <div className={`links ${menuOpen ? 'change' : ''}`}>
            <Link to='/' 
                onClick={() => {setMenuOpen(false)}}
                
                > 
                <motion.div className="link"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{scale: 0.95}}>
                        Home        
                    <div className="underline"></div>
                </motion.div>
            </Link>
            <Link to='/catalog' onClick={() => {setMenuOpen(false)}}> 
                <motion.div className="link"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{scale: 0.95}}>
                        Catalog        
                    <div className="underline"></div>
                </motion.div>
            </Link>
            
            </div>
     );
     
}
 
export default NavLinks;
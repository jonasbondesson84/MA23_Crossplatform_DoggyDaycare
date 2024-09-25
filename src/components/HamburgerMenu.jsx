const HamburgerMenu = ({menuOpen, setMenuOpen}) => {
    return ( 
        <div className={`hamburgerMenu ${menuOpen ? 'change': ''}`} onClick={()=> setMenuOpen(!menuOpen) }>
            <div className="bar1"></div>
            <div className="bar2"></div>
            <div className="bar3"></div>
            
        </div>

     );
}
 
export default HamburgerMenu;
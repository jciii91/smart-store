import React, { useState } from "react";
import { Link } from 'react-router-dom';
import './Navbar.css';
import Dropdown  from '../Dropdown/Dropdown';
import Auth from '../../utils/auth';

function Navbar () {
    const [click, setClick] = useState(false);
    const [dropdown, setDropdown] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    const logout = event => {
        event.preventDefault();
        Auth.logout();
    };

    const onMouseEnter = () => {
        if (window.innerWidth < 960) {
          setDropdown(false);
        } else {
          setDropdown(true);
        }
    };
    
    const onMouseLeave = () => {
        if (window.innerWidth < 960) {
          setDropdown(false);
        } else {
          setDropdown(false);
        }
    };
        
    return(
        <>
        <nav className="navbar">
            <Link to='/' className="navbar-logo" onClick={closeMobileMenu}>
                <i className="fas fa-store"/>
                 SMART STORE
            </Link>
            <div className="menu-icon" onClick={handleClick}>
                <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li className="nav-item">
                    <Link to='/' className="nav-links" onClick={closeMobileMenu}>
                        Home
                    </Link>
                </li>
                <li className='nav-item'
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
                >
                    <Link to='/categories' className="nav-links" onClick={closeMobileMenu}>
                        Categories
                        <i className="fas fa-caret-down"/>
                        {dropdown &&<Dropdown/>}
                    </Link>
                   
                </li>
                <li className="nav-item">
                {Auth.loggedIn() ? (
                <>
                <Link to="cart" className="nav-links">Cart</Link>
                <Link to="/" onClick={logout} className="nav-links">Logout</Link>
                </>
                ) : (
                    <Link to="sign-up" className="nav-links">Sign Up/Login</Link>
                )}
                </li>
            </ul>
        </nav>
        </>
    )
}

export default Navbar;
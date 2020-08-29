import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { Button } from './Button';

import './NavBar.css'

function NavBar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
          setButton(false);
        } else {
          setButton(true);
        }
      };
    
    useEffect(() => {
        showButton();
      }, []);

    window.addEventListener('resize', showButton);

    return (
    <>
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                JME_SULL <i class="fas fa-code"></i> 
                </Link>
                <div className="menu-icon" onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/' className="nav-links" onClick={closeMobileMenu}>
                            Home
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/projects' className="nav-links" onClick={closeMobileMenu}>
                            Projects
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/bio' className="nav-links" onClick={closeMobileMenu}>
                            Bio
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/contact' className="nav-links" onClick={closeMobileMenu}>
                            Contact Me
                        </Link>
                    </li>
                </ul>
                {button && <Button buttonStyle='btn--outline'>CONTACT ME</Button>}

            </div>
        </nav> 
    </>
    )
}


export default NavBar

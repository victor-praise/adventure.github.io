import React, { useState,useEffect } from 'react'

import { Link } from 'react-router-dom'
import { Button } from './button'
import '../styles/navbar.scss'

export function Navbar(props) {

    const [click, setclick] = useState(false)
    const [button, setbutton] = useState(true)
    const closeMobileMenu = () => {
        setclick(false)
    }
    const showButton=()=>{
        if(window.length <= 960){
            setbutton(false)
        }
        else{
            setbutton(true)
        }
    }
    useEffect(() => {
        showButton();
    }, [])
window.addEventListener('resize',showButton)
    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                        SZN <i class="fab fa-typo3"></i>
                    </Link>
                    <div className="menu-icon" onClick={
                        () => {
                            setclick(!click)
                        }
                    }>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li>
                            <Link to='/' className="nav-links" onClick={closeMobileMenu}>
                                Home
                       </Link>
                        </li>
                        <li>
                            <Link to='/services' className="nav-links" onClick={closeMobileMenu}>
                                Services
                       </Link>
                        </li>
                        <li>
                            <Link to='/products' className="nav-links" onClick={closeMobileMenu}>
                                Products
                       </Link>
                        </li>
                        <li>
                            <Link to='/sign-up' className="nav-links-mobile" onClick={closeMobileMenu}>
                                Sign Up
                       </Link>
                        </li>

                        
                    </ul>
                    {button && <Button buttonStyle='btn--outline'>Sign up</Button>}
                </div>
            </nav>
        </>
    )
}

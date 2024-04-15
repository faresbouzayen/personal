// Header.js

import React from 'react';
import { Link } from 'react-router-dom';

import './Header.css';
import logo from '../assets/logo.svg'; 

function Header() {
    return (
        <header className="header">
            <div className="logo" style={{ display: 'flex', justifyContent: 'center' }}>
                <img src={logo} alt="logo" />
            </div>
            <nav className="nav">
                <Link to='/' className='nav-link'>
                    Home
                </Link>
                <Link to='/projects' className='nav-link'>
                    Projects
                </Link>
                
                <Link to='/contact' className='nav-link'>
                    Contact
                </Link>
            </nav>
        </header>
    );
}

export default Header;

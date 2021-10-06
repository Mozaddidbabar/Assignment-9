import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div className="header-container mx-auto opacity-25" >
            <h1 className="text-info">A Online Learning Website</h1>
            <div className="nav">
                <NavLink className="nav-link" to="/home">Home</NavLink>
                <NavLink className="nav-link" to="/services">Services</NavLink>
                <NavLink className="nav-link" to="/about">About</NavLink>
                <NavLink className="nav-link" to="/alternative">Alternative</NavLink>
            </div>
        </div>
    );
};

export default Header;
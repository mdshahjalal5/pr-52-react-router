import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
        <nav className='header'>
            <NavLink className={({isActive})=>isActive ? 'active' : undefined} to='/home'>Home</NavLink>
            <NavLink to='/about'>About</NavLink>
            <NavLink to='/products'>Products</NavLink>
            <NavLink to='/freinds'>Freinds</NavLink>
        </nav>
    );
};

export default Header;
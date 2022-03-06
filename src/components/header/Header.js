import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='header-area'>
            <div className="header">
                <div className="logo"><a href="">Home</a></div>
                <nav>
                    <ul>
                        <li><a href="">About</a></li>
                        <li><a href="">Skills</a></li>
                        <li><a href="">Projects</a></li>
                        <li><a href="">Contact</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default Header;
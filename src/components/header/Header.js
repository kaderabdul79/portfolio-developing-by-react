import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='header-area'>
            <header>
                <div className="logo"><a href="">Home</a></div>
                <div className="nav-area">
                    <ul>
                        <li><a href="">About</a></li>
                        <li><a href="">Skills</a></li>
                        <li><a href="">Projects</a></li>
                        <li><a href="">Contact</a></li>
                    </ul>
                </div>
            </header>
            {/* <section className='banner'></section> */}
        {
            window.addEventListener("scroll",function(){
                var header = this.document.querySelector("header");
                header.classList.toggle("sticky",window.scrollY > 0);
            })
        }
        </div>
    );
};

export default Header;
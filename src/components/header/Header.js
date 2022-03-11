import React from 'react';
import './Header.css';
// import { Link } from 'react-router-dom';
// import {Link} from "react-scroll";
import { NavHashLink,HashLink as Link } from 'react-router-hash-link';

const Header = () => {
    return (
        <div className='header-area'>
            <header>
                <div className="logo"><Link to="/">Hello</Link></div>
                <div className="nav-area">
                    <ul>
                        <li><Link to="#about" smooth>About</Link></li>
                        <li><Link to="#skills" smooth>Skills</Link></li>
                        <li><Link to="#projects" smooth>Projects</Link></li>
                        <li><Link to="#contact" smooth>Contact</Link></li>
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
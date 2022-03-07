import React from 'react';
import './Hero.css';
import myimg from '../../assets/myimg.jpg';
import { Col, Container, Row } from 'react-bootstrap';
import { FaFacebookF, FaGithub, FaLinkedinIn, FaArrowRight } from "react-icons/fa";

const Hero = () => {
    return (
        <div className='hero-area'>
            <div className="hero">
                <div className="hero-left"><img src={myimg} alt="" /></div>
                <div className="hero-right">
                    <h1>Abdul Kader</h1>
                    <p>Data Science Enthusiast, Web Developer</p>
                    <div className="description">
                        <div className="desc">Age:<span>24years</span></div>
                        <div className="desc">Phone:<span>+88 018 5575 9092</span></div>
                        <div className="desc">Email:<span>kaderabdul7980@gmail.com</span></div>
                        <div className="desc">Aaddress:<span>408/1, Kuratoli,Kuril Bishwa Road.</span></div>
                    </div>
                    <div className="media-container">
                    <li><FaFacebookF /></li>
                    <li><FaLinkedinIn /></li>
                    <li><FaGithub /></li>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
import React from 'react';
import './Hero.css';
import { FaFacebookF, FaGithub, FaLinkedinIn, FaArrowRight } from "react-icons/fa";

const Hero = () => {
    return (
        <div className='hero-area'>
            <div className="hero-left">
                <div className="hero-text">
                    <h5>Hello Dhaka</h5>
                    <h1>I'm Abdul Kader</h1>
                    <h4>A Full-Stack Developer</h4>
                </div>
                <div className="media-container">
                    <div className="social-media facebook"><FaFacebookF /></div>
                    <div className="social-media linkedin"><FaLinkedinIn /></div>
                    <div className="social-media github"><FaGithub /></div>
                </div>
                <div className="hero-btn">
                    <div className="btn-text">View My Work</div><FaArrowRight />
                </div>
            </div>
            <div className="hero-right">
                
            </div>
        </div>
    );
};

export default Hero;
import React from 'react';
import './About.css';
import { FaDownload } from "react-icons/fa";
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div className='about-area' id="about">
            <div className="about-title">Hi_</div>
            <div className="about-left">
                <p>I am an industrious , self-motivated Software Engineer with excellent knowledge. I have already completed my BSc in Computer Science & Engineering . As a Computer Science Graduate ,I have a strong Programming knowledge Which I want to utilize a company where also I will get opportunity to learning and sharing knowledge.</p>
                <p>Software Development is my passion. I really enjoy to build something which will helpful for our Tech. Industry also people will get benifited. So I think I can assist my best for any company as a Software Enginner or Web Developer.</p>
                <div className="download-cv"><Link to="">download cv<FaDownload /></Link></div>
            </div>
            <div className="about-right">
            </div>
        </div>
    );
};

export default About;
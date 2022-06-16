import React from 'react';
import './About.css';
import { FaDownload } from "react-icons/fa";
import { Link } from 'react-router-dom';

const About = () => {
    function downloadCV(url) {
        // console.log(url)
        window.location.replace(`${url}`)
    }
    return (
        <div className='about-area' id="about">
            <div className="about-title">Hi_</div>
            <div className="about-left">
                <p>I am an industrious , self-motivated Software Engineer with excellent knowledge. I have already completed BSc in Computer Science & Engineering . As a Computer Science Graduate ,I have a strong Programming knowledge Which I want to utilize a company where also I will get opportunity to learning and sharing knowledge.</p>
                <p>I am Passionate about learning and staying up to date with the latest technologies & a clear communicator.</p>
                <div className="download-cv"><Link  onClick={() => downloadCV('https://drive.google.com/file/d/1MngdSJ6Nf8GZClSJn4fGU0Abj_EANnGt/view?usp=sharing')} to="">download cv<FaDownload /></Link></div>
            </div>
            <div className="about-right">
            </div>
        </div>
    );
};

export default About;
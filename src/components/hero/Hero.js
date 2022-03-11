import React from 'react';
import './Hero.css';
import myimg from '../../assets/myimg.jpg';
import { Col, Container, Row } from 'react-bootstrap';
import { FaFacebookF, FaGithub, FaLinkedinIn, FaArrowRight } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Hero = () => {
    // recv the url and replace the current url which social media wants to check
    function visitSocialAcc(url) {
        // console.log(url)
        window.location.replace(`${url}`)
    }
    return (
        <div className='hero-area'>
            <div className="hero">
                <div className="hero-left"><img src={myimg} alt="" /></div>
                <div className="hero-right">
                    <h1 style={{letterSpacing: '3px'}}>Abdul Kader</h1>
                    <p>Looking for Junior Software Engineer or Web Developer (position)</p>
                <div className="contact-info">
                    <dl>
                        <dt>Age:</dt>
                        <dd>24y</dd>
                    </dl>
                    <dl>
                        <dt>Phone:</dt>
                        <dd>+88 018 5575 9092</dd>
                    </dl>
                    <dl>
                        <dt>EMAIL:</dt>
                        <dd>kaderabdul7980@gmail.com</dd>
                    </dl>
                    <dl>
                        <dt>ADDRESS:</dt>
                        <dd>Ka-93-D, Kuratoli,Kuril Bishwa Road.</dd>
                    </dl>
                </div>
                    <div className="media-container">
                    <li><Link onClick={() => visitSocialAcc('https://github.com/kaderabdul79')} to=""><FaGithub /></Link></li>
                    <li><Link onClick={() => visitSocialAcc('https://www.linkedin.com/in/kader-abdul/')} to=""><FaLinkedinIn /></Link></li>
                    <li><Link onClick={() => visitSocialAcc('https://www.facebook.com/kaderabdulakd/')} to=""><FaFacebookF /></Link></li>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
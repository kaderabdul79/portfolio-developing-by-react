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
                        <dd>408/1, Kuratoli,Kuril Bishwa Road.</dd>
                    </dl>
                </div>
                    <div className="media-container">
                    <li><FaGithub /></li>
                    <li><FaLinkedinIn /></li>
                    <li><FaFacebookF /></li>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
import React from 'react';
import './Footer.css';
import { FaFacebookF, FaGithub, FaLinkedinIn} from "react-icons/fa";
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='footer-area' id="contact">
            <div className="footer_heading">Get in touch_</div>
            <div className="foo">
            <div className="contact-form">
                <input type="text" id="fname" name="firstname" placeholder="Your name.." />
                <input type="text" id="lname" name="lastname" placeholder="Your last name.." />
                <textarea id="subject" name="subject" placeholder="Write something.." style={{height: '100px'}} />
                <input type="submit" value="Submit" />
            </div>
            <div className="contact-info">
            <dl>
                <dt>PHONE:</dt>
                <dd>+88 018 5575 9092</dd>
            </dl>
            <dl>
                <dt>SKYPE:</dt>
                <dd>kader79</dd>
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
            <div className="contact-media">
            <dl>
                <Link to="">
                <dt><FaGithub /></dt>
                <dd>Github</dd>
                </Link>
            </dl>
            <dl>
                <Link to="">
                <dt><FaLinkedinIn /></dt>
                <dd>Linkedin</dd>
                </Link>
            </dl>
            <dl>
                <Link to="">
                <dt><FaFacebookF /></dt>
                <dd>Facebook</dd>
                </Link>
            </dl>

            </div>
            </div>
            <footer>&copy; {(new Date().getFullYear())} Abdul Kader. All Rights Reserved</footer>
        </div>
    );
};

export default Footer;
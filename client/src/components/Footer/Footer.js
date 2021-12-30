import React from 'react';
import { NavLink } from 'react-router-dom';
import './Footer.css';



const Footer = () => {
    return (
        <div className="footer-container">
            <div className="footer-link-container">
                <div style={{display:"flex",flexDirection:'column'}}>
                    <NavLink className="footer-link" to="/">Support At Dentalians</NavLink>
                    <NavLink className="footer-link" to="/">About Us</NavLink>
                    <NavLink className="footer-link" to="/">Contact us</NavLink>
                </div>
                <div style={{display:"flex",flexDirection:'column'}}>
                    <NavLink className="footer-link" to="/">Our Doctors</NavLink>
                    <NavLink className="footer-link" to="/">Help and Support</NavLink>
                    <NavLink className="footer-link" to="/">Affiliate</NavLink>
                </div>
                <div style={{display:"flex",flexDirection:'column'}}>
                    <NavLink className="footer-link" to="/">Terms</NavLink>
                    <NavLink className="footer-link" to="/">Privacy policy</NavLink>
                    <NavLink className="footer-link" to="/">Sitemap</NavLink>
                </div>
            </div>
            <div className="bottom-logo">
                <div className="logo-container">
                <h2 className="logo-title"><span style={{color:'black'}}>Den</span>talians</h2>
                </div>
                <p>©2021 DevLearn.Inc.</p>
            </div>
        </div>
    );
};

export default Footer;
import React from 'react';
import './About.css';
import AboutImg from '../../images/Doctors-pana.png'

const About = () => {
    return (
        <div className="about-container">
            <div className="img-side"><img className="about-img" src={AboutImg} alt="" /></div>
            <div className="heading-side">
                <h1 className="about-heading"><span class="primary-color">About</span> Dentalians</h1>
                <p className="about-para">Creating Beautiful Smiles Since 1999
                    Dentalians is a modern dental clinic, specialised in advanced diagnostics and treatment of dental disorders. We guarantee comprehensive diagnostics and offer various forms of dental care, surgical procedures, and cosmetic dental services.</p>
            </div>
        </div>
    );
};

export default About; <h1>This is about page</h1>
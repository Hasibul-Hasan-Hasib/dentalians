import React from 'react';
import './Banner.css';
import { Button } from '@mui/material';
import logo from '../../images/Doctors-bro.png'


const Banner = () => {
    return (
        <div className="banner-container">
            <div className="heading-side">
                <h1 className="banner-heading"><span class="primary-color">We</span> Create Beautiful Smiles</h1>
                <p className="banner-para">Dentalians is a modern dental clinic, specialized in advanced diagnostics and treatment of dental and oral disorders.

                    We offer comprehensive services from all fields of dentistry. In addition to high-end dental equipment, all services are provided in a comfortable, luxury environment. New patients are welcomed with a complimentary oral health consultation.</p>
                <Button variant="contained">Get Started</Button>
            </div>
            <div className="img-side"><img className="banner-img" src={logo} alt="" /></div>
        </div>
    );
};

export default Banner;

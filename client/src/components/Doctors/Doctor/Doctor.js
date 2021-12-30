import { Button } from '@mui/material';
import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import '../../Header/Header.css'

const Doctor = (props) => {
    const { name, title, about, img } = props.doctor;
    return (
        <div>
            <Col className='doc'>
                <div className='card-img'>
                    <Card.Img variant="top" src={img} /></div>
                <Card.Body className='doctor'>
                    <p>{title}</p>
                    <Card.Title> {name} </Card.Title>
                    <Card.Text className='doc-about'>{about}
                    </Card.Text>
                    <NavLink className="link" to='/contact'>
                        <Button variant="contained">Set Appointment</Button></NavLink>
                    <div>
                        <i className="fab fa-facebook-f p-2"></i>
                        <i className="fab fa-twitter p-2"></i>
                        <i className="fab fa-instagram p-2"></i>
                    </div>
                </Card.Body>
            </Col>
        </div>
    );
};

export default Doctor;
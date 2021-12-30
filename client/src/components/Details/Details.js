import React, { useEffect } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import Rating from 'react-rating';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import '../Header/Header.css'
import { Button } from '@mui/material';

const Details = () => {
    const { serviceId } = useParams();
    const serviceIdNumber = parseInt(serviceId)
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('/FakeData.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    const serviceDetails = services?.find(service => service.id === serviceIdNumber);

    return (
        <div className='mt-5 pt-3'>
            {
                serviceDetails && <Row xs={1} md={2} className="g-4 ">
                    <Col className="container my-5">
                        <Card className=' pb-2'>
                            <Card.Img variant="top" src={serviceDetails.img} />
                            <Card.Body>
                                <Card.Title>{serviceDetails.name}</Card.Title>
                                <Card.Text className='doc-about'>{serviceDetails.description}
                                </Card.Text>
                                <p>Price:${serviceDetails.price}</p>
                                <Rating
                                    initialRating={serviceDetails.rating}
                                    emptySymbol="far fa-star rating"
                                    fullSymbol="fas fa-star rating"
                                    readonly
                                >
                                </Rating>
                            </Card.Body>
                            <Link to='/contact'><Button variant="contained">Purchase now</Button></Link>
                        </Card>
                    </Col>
                </Row>
            }
        </div>
    );
};

export default Details;
import { Button } from '@mui/material';
import React from 'react';
import { Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useData from '../../hooks/useData';
import Banner from '../Banner/Banner';
import Doctors from '../Doctors/Doctors';
import Service from '../Service/Service';
import TopHome from '../TopHome/TopHome';

const Home = () => {
    const services = useData();
    return (
        <div className='pt-5 container'>
            <Banner></Banner>
            <TopHome></TopHome>
            <h1 className="primary-color">Our services</h1>
            <hr className='w-25 mx-auto text-success ' />
            <Row xs={1} sm={2} xl={3} className='g-4 pb-3'>
                {
                    services?.slice(0, 6).map(service => <Service
                        key={service.id}
                        service={service}
                    ></Service>)
                }
            </Row>
            <Link to='/services'>
                <Button>View all services</Button></Link>
            <Doctors></Doctors>
        </div>
    );
};

export default Home;
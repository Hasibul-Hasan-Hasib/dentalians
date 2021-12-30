import React from 'react';
import { Row } from 'react-bootstrap';
import useDocData from '../../hooks/useDocData';
import Doctor from './Doctor/Doctor';

const Doctors = () => {
    const doctors = useDocData();
    return (
        <div className='mt-3 p-2'>
            <h1>Our specialist</h1>
            <hr className='w-25 mx-auto text-success ' />
            <Row xs={1} md={3} sm={2} xl={3} className="g-4">
                {
                    doctors?.map(doctor => <Doctor
                        key={doctor.id}
                        doctor={doctor}
                    ></Doctor>)
                }
            </Row>
        </div>
    );
};

export default Doctors;
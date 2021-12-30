import React from 'react';
import DocImage from '../../images/pexels-anna-shvets-4167541.jpg'
import '../Header/Header.css'

const TopHome = () => {
    return (
        <div className="my-5">
            <div className='row m-4 d-flex align-items-center justify-content-center'>
                <div className='col-md-6 col-sm-12'>
                    <img className='w-100 p-3' style={{borderRadius: "30px"}} src={DocImage} alt="" />
                </div>
                <div className='col-md-6 col-sm-12 doc-about p-3'>
                    <h1 className="primary-color">We will help to find health, to everyone.</h1>
                    <h5>The optimum ratio of price and quality responsible and conscientious approach</h5>
                    <p>On the basis of the medical center “Nordis” can be given a thorough examination of the body and get the advice of highly qualified specialists in various fields of medicine. According to studies, our doctors will make an individual program of prevention and treatment of identified diseases, directed to a surgical treatment if necessary. In today’s operational department conducted a wide range of operations under local and general anesthesia.</p>
                    <h3>Dr. Sarah wilson</h3>
                </div>
            </div>
        </div>
    );
};

export default TopHome;
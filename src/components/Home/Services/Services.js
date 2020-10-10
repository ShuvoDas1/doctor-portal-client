import React from 'react';
import fluoride from '../../../images/fluoride.png'
import cavity from '../../../images/cavity.png'
import whitening from '../../../images/whitening.png'
import ServiceDetail from '../ServiceDetail/ServiceDetail';

const Services = () => {

    const servicesDate = [
        {
            name: 'Fluoride',
            img: fluoride
        },
        {
            name: 'Cavity',
            img: cavity
        },
        {
            name: 'Whitening',
            img: whitening
        }
    ]

    return (
        <section>
            <div className='text-center mt-5'>
                <h5 style={{ color: '#1CC7C1' }}>OUR SERVICES</h5>
                <h2 style={{ color: '#3A4256' }}>Services we provide</h2>
            </div>
            <div className='d-flex justify-content-center'>
                <div className='row w-75'>
                    {
                        servicesDate.map(service => <ServiceDetail service={service}></ServiceDetail>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Services;
import React from 'react';

const ServiceDetail = ({ service }) => {
    return (

        <div className='col-md-4 text-center justify-content-center'>
            <img style={{width:'50px'}} className='mt-5' src={service.img} alt="" />
            <h5 className='my-3'>{service.name}</h5>
            <p className='text-secondary'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel repudiandae, at hic harum totam inventore.</p>
        </div>

    );
};

export default ServiceDetail;
import React from 'react';
import InfoCard from '../InfoCard/InfoCard';

import { faClock,faPhone,faMapMarker } from '@fortawesome/free-solid-svg-icons'

const infosData = [
    {
        title: 'Opening Hour',
        description: 'We are open 24/7 days',
        icon: faClock,
        background: 'primary'
    },
    {
        title: 'Visit Our Location',
        description: 'GEC Circle,Chittagong,Bangladesh',
        icon: faMapMarker,
        background: 'dark'
    },
    {
        title: 'Contact Us',
        description: '01837108853',
        icon: faPhone,
        background: 'primary'
    }
]

const BusinessInfo = () => {
    return (
        <section className='d-flex justify-content-center'>
            <div className='row w-75'>
                {
                    infosData.map(info => <InfoCard info={info}></InfoCard> )
                }
            </div>
        </section>
    );
};

export default BusinessInfo;
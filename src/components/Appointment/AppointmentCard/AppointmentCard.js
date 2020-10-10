import React from 'react';

const AppointmentCard = ({ booking }) => {
    return (
        <div className='col-md-4'>
            <div class="card mt-3" style={{ width: "18rem" }}>
                <div class="card-body text-center">
                    <h5 class="card-title text-brand">{booking.subject}</h5>
                    <h6 class="card-subtitle mb-2 ">{booking.visitingHour}</h6>
                    <p class="card-text text-secondary">{booking.totalSpace} Spaces Available</p>
                    <button className='btn btn-info'>Book Appointment</button>
                </div>
            </div>
        </div>
    );
};

export default AppointmentCard;
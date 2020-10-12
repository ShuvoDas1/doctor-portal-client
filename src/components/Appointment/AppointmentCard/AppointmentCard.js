import React, { useState } from 'react';
import AppointmentForm from '../AppointmentForm/AppointmentForm';

const AppointmentCard = ({ booking,date }) => {
    const [modalIsOpen,setIsOpen] = useState(false);
    function openModal() {
      setIsOpen(true);
    }
  
    function closeModal(){
      setIsOpen(false);
    }
    return (
        <div className='col-md-4'>
            <div class="card mt-3" style={{ width: "18rem" }}>
                <div class="card-body text-center">
                    <h5 class="card-title text-brand">{booking.subject}</h5>
                    <h6 class="card-subtitle mb-2 ">{booking.visitingHour}</h6>
                    <p class="card-text text-secondary">{booking.totalSpace} Spaces Available</p>
                    <button onClick={openModal} className='btn btn-info'>Book Appointment</button>
                    <AppointmentForm modalIsOpen={modalIsOpen} date={date} AppointmentOn={booking.subject} closeModal={closeModal}></AppointmentForm>
                </div>
            </div>
        </div>
    );
};

export default AppointmentCard;
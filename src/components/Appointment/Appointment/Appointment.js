import React from 'react';
import { useState } from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import AppointmentBooking from '../AppointmentBooking/AppointmentBooking';
import AppointmentHeader from '../AppointmentHeader/AppointmentHeader';

const Appointment = () => {
    const [selectedDate,setSelectedDate] = useState(new Date())
    const handleDate = date => {
        setSelectedDate(date)
        console.log(selectedDate);
    }
    
    return (
        <div>
            <Navbar></Navbar>
            <AppointmentHeader handleDate={handleDate}></AppointmentHeader>
            <AppointmentBooking date={selectedDate}></AppointmentBooking>
        </div>
    );
};

export default Appointment;
import React, { useEffect, useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import AppointmentByDate from '../AppointmentByDate/AppointmentByDate';

const containerStyle = {
    height: '100%',
    backgroundColor:'lightGrey'
}

const Dashboard = () => {
    const [selectedDate,setSelectedDate] = useState(new Date())
    const [appointments,setAppointments] = useState([])
    const handleDate = date => {
        setSelectedDate(date)
    }

    useEffect(()=>{
        fetch('http://localhost:4000/appointmentByDate',{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({date:selectedDate})
        })
        .then(res => res.json())
        .then(data => setAppointments(data))
    },[selectedDate])

    return (
        <section>
            <div style={containerStyle} className="row container-fluid">
                <div className="col-md-2">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-5">
                    <Calendar
                        onChange={handleDate}
                        value={new Date()}
                    />
                </div>
                <div className="col-md-5">
                    <AppointmentByDate  key={appointments._id} appointments={appointments}></AppointmentByDate>
                </div>
            </div>
        </section>
    );
};

export default Dashboard;
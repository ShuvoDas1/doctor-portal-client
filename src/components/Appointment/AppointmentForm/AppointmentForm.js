import React from 'react';
import Modal from 'react-modal';
import { useForm } from "react-hook-form";

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};

Modal.setAppElement('#root')

const AppointmentForm = ({ modalIsOpen, closeModal, AppointmentOn,date }) => {
    const { register, handleSubmit, errors } = useForm();
    
    const onSubmit = data =>{
        data.service = AppointmentOn;
        data.date= date;
        data.created= new Date();
        
        fetch('http://localhost:4000/addappointment',{
            method: 'POST',
            headers:{'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(success => {
            closeModal();
            alert('Appointment submit successfully')
        })
        

    };

    return (
        <div>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >

                <h2 className='text-brand text-center'>{AppointmentOn}</h2>
                <p className='text-secondary text-center'><small>On {date.toDateString()}</small></p>
                <form onSubmit={handleSubmit(onSubmit)}>

                    <div className="form-group">
                        <input name="name" className='form-control' placeholder='Enter Your Name' ref={register} />
                        {errors.name && <span>This field is required</span>}
                    </div>
                    <div className="form-group">
                        <input name="phoneNumber" className='form-control' placeholder='Enter Your Phone Number'  ref={register} />
                        {errors.phoneNumber && <span>This field is required</span>}
                    </div>
                    <div className="form-group">
                        <input name="email" className='form-control' placeholder='Enter Your email'  ref={register} />
                        {errors.email && <span>This field is required</span>}
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-4">
                            <select className="custom-select mr-sm-2" name='gender' id="inlineFormCustomSelect"  ref={register}>
                                <option selected value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Others">Others</option>
                            </select>
                            {errors.gender && <span>This field is required</span>}
                        </div>
                        <div className="form-group col-md-4">
                            <input type="text" placeholder='Age' name='age' className='form-control'  ref={register} />
                            {errors.age && <span>This field is required</span>}
                        </div>
                        <div className="form-group col-md-4">
                            <input type="text" placeholder='Weight' name='weight' className='form-control'  ref={register} />
                            {errors.weight && <span>This field is required</span>}
                        </div>
                    </div>
                    <div className="form-group">
                    <input type="submit" className='btn btn-info'/>
                    </div>
                </form>
            </Modal>
        </div>
    );
};

export default AppointmentForm;
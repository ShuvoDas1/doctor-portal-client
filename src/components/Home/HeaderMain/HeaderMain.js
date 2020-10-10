import React from 'react';
import chair from '../../../images/chair.png'
const HeaderMain = () => {
    return (
        <main style={{height:'500px'}} className='row d-flex align-items-center'>
            <div className="col-md-4 offset-md-1">
                <h1>Your New Smile <br/> Starts Here</h1>
                <p className='text-secondary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt tempora eum, cumque quidem qui rem?</p>
                <button className='btn btn-warning'>GET APPOINMENT</button>
            </div>
            <div className="col-md-6">
                <img src={chair} alt="" className='img-fluid'/>
            </div>
        </main>
    );
};

export default HeaderMain;
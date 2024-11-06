import React from 'react';
import { Link } from 'react-router-dom';
import './SignUp.css';
import Barber from '../img/barber.jpg'
import Customer from '../img/customer.jpg'
import Navbar from './Navbar';

function SignUp() {
    return (
        <div className='outer-container'>
            <Navbar/>
            <div className="signup-container">

                <div className="signup-box">
                    <div className="signup-half barber-signup">
                        <Link to="/signup/barber">
                            <div className="signup-content">
                                <img src={Barber} className='signup-image' alt='Barber'/>
                                <span>Sign up as Barber</span>
                            </div>
                        </Link>
                    </div>
                    <div className="signup-half customer-signup">
                        <Link to="/signup/customer">
                            <div className="signup-content">
                                <img src={Customer} className='signup-image' alt='Customer'/>
                                <span>Sign up as Customer</span>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>



    );
}

export default SignUp;
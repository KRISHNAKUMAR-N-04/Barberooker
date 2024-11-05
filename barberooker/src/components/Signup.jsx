import React from 'react';
import { Link } from 'react-router-dom';
import './SignUp.css';

function SignUp() {
    return (
        <div className="signup-container">
            <div className="signup-box">
                <div className="signup-half barber-signup">
                    <Link to="/signup/barber">
                        <div className="signup-content">
                            <img src="barber-image.jpg" alt="Barber" className="signup-image" />
                            <span>Sign up as Barber</span>
                        </div>
                    </Link>
                </div>
                <div className="signup-half customer-signup">
                    <Link to="/signup/customer">
                        <div className="signup-content">
                            <img src="customer-image.jpg" alt="Customer" className="signup-image" />
                            <span>Sign up as Customer</span>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default SignUp;
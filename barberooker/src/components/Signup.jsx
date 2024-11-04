import React from 'react';
import { Link } from 'react-router-dom';

function SignUp() {
    return (
        <div>
            <Link to="/signup/barber">Sign up as Barber</Link>
            <Link to="/signup/customer">Sign up as Customer</Link>
        </div>
    );
}

export default SignUp;

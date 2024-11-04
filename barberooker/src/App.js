import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUp from './components/Signup';
import SignUpBarber from './components/SignupBarber';
import SignUpCustomer from './components/SignupCustomer';
import Login from './components/login';


function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/signup/barber" element={<SignUpBarber />} />
                <Route path="/signup/customer" element={<SignUpCustomer />} />
            </Routes>
        </Router>
        
    );
}

export default App;
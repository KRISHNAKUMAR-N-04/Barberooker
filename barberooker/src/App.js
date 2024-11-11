import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUp from './components/Signup';
import SignUpBarber from './components/SignupBarber';
import SignUpCustomer from './components/SignupCustomer';
import Login from './components/login';
import LandingOut, { LandingPage } from './components/Landing';
import Navbar from './components/Navbar';


function App() {
    return (
            
            <Router>
            <Routes>
            
                <Route path="/login" element={<Login />} />
                <Route path='/signup/barber/login' element={<Login/>}/>
                <Route path='/signup/customer/login' element={<Login/>}/>
                <Route path="/signup" element={<SignUp />} />
                <Route path="/signup/barber" element={<SignUpBarber />} />
                <Route path="/signup/customer" element={<SignUpCustomer />} />
                <Route path='/barberooker' element={<LandingPage/>}/>
                <Route path='/' element={<LandingOut/>}/>
            </Routes>
        </Router>
        
        
    );
}

export default App;

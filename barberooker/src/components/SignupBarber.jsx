import React, { useState } from 'react';
import api from '../api';
import { useNavigate } from 'react-router-dom';
import './Signuprole.css'

function SignUpBarber() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        await api.post('/register', { username, password, role: 'barber' });
        alert('Barber Registered');
        navigate('/login')
    };

    return (

            <form onSubmit={handleSubmit} className='Login'>
            <h1>Barberooker</h1>
            <p>Barber Signup!</p>
                <div className='input'>
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" />
                </div>
                <div className='input'>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Create Password" />
                </div>
            <div className='loginbutton' onClick={handleSubmit}><button type="submit">Register</button></div>
        </form>
    );
}

export default SignUpBarber;

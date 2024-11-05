import React, { useState } from 'react';
import api from '../api';
import { useNavigate } from 'react-router-dom';
import '../components/Login.css'

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await api.post('/login', { username, password });
            navigate('./barberooker')
            alert('Login Successful');
            
        } catch {
            alert('invalid credentials');
        }
    };

    const handleSignUpClick = ()=>{
        navigate('/signup');
    }

    return (
        <div>
            
            <form onSubmit={handleSubmit} className='Login'>
            <h1>Barberooker</h1>
                <div className='input'>
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" />
                </div>
                <div className='input'>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                </div>
            <div className='loginbutton'><button type="submit">Login</button></div>
            
            <h6 onClick={handleSignUpClick} className="signup-text">Register Yourself!</h6>
        </form>
        </div>
        
    );
}

export default Login;

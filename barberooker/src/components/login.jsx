import React, { useState } from 'react';
import api from '../api';
import '../components/Login.css'

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await api.post('/login', { username, password });
            alert('Login Successful');
        } catch {
            alert('Login Failed');
        }
    };

    return (
        <div>
            
            <form onSubmit={handleSubmit} className='Login'>
            <h2>Login</h2>
                <div className='input'>
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" />
                </div>
                <div className='input'>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                </div>
            
            <button type="submit">Login</button>
        </form>
        </div>
        
    );
}

export default Login;

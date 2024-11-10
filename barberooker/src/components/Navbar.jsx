import React from "react";
import './Navber.css'
import { useNavigate } from "react-router-dom";

const Navbar = () => {

    const navigate = new useNavigate();
    const handleroutelogin =() =>{
        navigate('/login')
    }

    return (
        <div>
            <div className='Navbar'>
                <div className='left'>
                    <h1>Barberooker.</h1>
                </div>
                <div className="right">
                    <h4 onClick= {handleroutelogin}>login/Register</h4>
                </div>
            </div>
        </div>
    )
}

const NavbarLater = () => {

    const navigate = new useNavigate();
    const handleroutelogin =() =>{
        navigate('/login')
    }

    return (
        <div>
            <div className='Navbar'>
                <div className='left'>
                    <h1>Barberooker.</h1>
                </div>
                <div className="right">
                    <h4 onClick= {handleroutelogin}>Logout</h4>
                </div>
            </div>
        </div>
    )
}
export {NavbarLater};
export default Navbar;
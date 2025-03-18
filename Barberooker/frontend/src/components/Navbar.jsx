import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { assets } from '../assets/assets'

const Navbar = () => {

    const navigate = useNavigate();
    const [showMenu, setShowMenu] = useState(false);
    const [token, setToken] = useState(true);

  return (
    <div className='flex ml-4  mr-4 items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400'>
      
      <p className='text-xl text-black font-bold leading-tight md:leading-tight lg:leading-tight mb-2'>Barberooker.</p>
      <ul className='hidden md:flex items-start gap-8 font-medium'> 
        <NavLink to='/'>
            <li className='py-1'>Home</li>
            <hr className=' outline-none h-0.5 bg-primary w-3/5 m-auto hidden'/>
        </NavLink>
        <NavLink to='barbers'>
            <li className='py-1'>All Barber</li>
            <hr className=' outline-none h-0.5 bg-primary w-3/5 m-auto hidden'/>
        </NavLink>
        <NavLink to='/about'>
            <li className='py-1'>About</li>
            <hr className=' outline-none h-0.5 bg-primary w-3/5 m-auto hidden'/>
        </NavLink>
        <NavLink to='/contact'>
            <li className='py-1'>Contact</li>
            <hr className=' outline-none h-0.5 bg-primary w-3/5 m-auto hidden'/>
        </NavLink>
      </ul>
      <div className='flex item-center gap-4'>
        {
            token
            ?<div className='flex item-center gap-2 cursor-pointer group relative'>
                <img className='w-6 rounded-full' src={assets.profile_pic} alt=''/>
                <img className='w-2.5' src={assets.dropdown_icon} alt=''/>
                <div className='absolute top-0 right-0 pt-16 text-base font-medium text-gray-600 z-30 hidden group-hover:block'>
                    <div className='min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4'>
                        <p onClick={()=>navigate('/myprofile')} className='hover:text-black cursor-pointer'>My Profile</p>
                        <p onClick={()=> navigate('/appoinments')} className='hover:text-black cursor-pointer'>My Appoinments</p>
                        <p onClick={()=> setToken(false)} className='hover:text-black cursor-pointer'>Logout</p>
                    </div>
                </div>
            </div>
            : <button onClick={()=> navigate('/login')} className='cursor-pointer bg-black text-white px-8 py-3 rounded-full font-light hidden md:block'>Create Account</button>
        }
        
      </div>
    </div>
  )
}

export default Navbar

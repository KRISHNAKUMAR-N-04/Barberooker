import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Banner = () => {
    const navigate = useNavigate();
    return (
        <div className='flex  bg-neutral-800 rounded-lg px-6 sm:px-10 md:px-14 my-20 lg:px-12 md:mx-10 bottom-0 '>
            <div className='flex-1 py-8 sm:py-10 md:py-16 lg:py-24 lg:pl-5 '>
                <div className='text-xl sm:text-2xl md:text-3xl lg:text-5xl font-semibold text-white'>
                    <p >Book Appoinment</p>
                    <p className='mt-4'>With 100+ Trusted barbers</p>
                </div>
                <button onClick={()=> {navigate('/login'); scrollTo(0,0)}} className='bg-black text-white rounded-full sm:text-base px-8 py-3 mt-4 hover:scale-105 transition-all'>Create account</button>

            </div>


            <div className='hidden md:block lg:block lg:w-[370px]  relative '>
                <img src={assets.appointment_img} className='w-full absolute bottom-31 right-25 scale-200 ' alt='' />

            </div>
        </div>
    )
}

export default Banner

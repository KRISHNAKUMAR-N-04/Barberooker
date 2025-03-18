import React from 'react'
import { assets } from '../assets/assets'

const Header = () => {
  return (
    <div className='flex flex-col md:flex-row flex-wrap bg-neutral-800 rounded-lg px-6 md:px-10 lg:px-20 justify-around align-middle shadow-2xl '>
        <div className='md:w-1/2 flex flex-col items-start justify-center gap-0 py-10 m-auto md:py-[9vw] md:mb-[-30px]'>
            <p className='text-3xl md:text-4xl lg:text-5xl text-white font-semibold leading-tight md:leading-tight lg:leading-tight mb-2'>
                Book Appoinment <br/> With Trusted Hair Stylist
            </p>
            <div className='flex flex-col md:flex-row  gap-4 text-sm mb-3 font-light'>
                <img className='w-28' src={assets.group_profiles} alt=''/>
                <p className='text-amber-100'>Casually browse through our talented Stylists, <br className='hidden sm:block'/> Schedule your appoinment hassle-free.</p>
            </div>
            <a href='#speciality' className='flex  gap-2 bg-white px-8 py-3 rounded-full text-sm m-auto md:m-0 hover:scale-105 transition-all duration-300'>
                Book Appoinment <img className='w-3' src={assets.arrow_icon} alt=''/>
            </a>
        </div>

        <div className='md:w-1/2 relative justify-center align-middle lg:pl-16 md:pl-6' >
            <img className='w-140 md:absolute bottom-0 rounded-lg ' src={assets.header_img} alt=''  />
        </div>

      
    </div>
  )
}

export default Header

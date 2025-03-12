import React from 'react'
import { specialityData } from '../assets/assets'
import { Link } from 'react-router-dom'

const Specialitymenu = () => {
  return (
    <div id='speciality' className='flex flex-col items-center gap-4 py-16 text-gray-800'>
      <h1 className='text-3xl font-medium '>Find By Specialization!</h1>
      <p className='sm:w-1/3 text-center text-sm'>Browse through specialized hair-stylist. Get your desired look.</p>
      <div className='flex sm:justify-center gap-4 pt-5 w-full overflow-scroll'>
          {specialityData.map((item, index)=> (
            <Link onClick={()=>scrollTo(0,0)} className='flex flex-col items-center text-sx cursor-pointer flex-shrink-0 hover:translate-y-[5px] transition-all duration-300 m-3' to={`/barbers/${item.speciality}`}>
              <img className='w-16 rounded-full shadow sm:w-24 mb-2' src={item.image} alt=''/>
              <p >{item.speciality}</p>
            </Link>
          ))}
      </div>
    </div>
  )
}

export default Specialitymenu

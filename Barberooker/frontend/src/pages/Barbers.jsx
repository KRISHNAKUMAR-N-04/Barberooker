import React, { useContext, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const Barbers = () => {

  const { speciality } = useParams()

  const dbarbers = useContext(AppContext);

  const { filterBarb, setFilterBarb } = useState([])

  const applyfilter = ()=>{
    if(speciality){
      setFilterBarb(dbarbers.filter(barb => barb.speciality === speciality))
    }else{
      setFilterBarb(dbarbers)
    }
  }

  return (
    <div>
      <p>Browse through the Barbers speciality.</p>

      <div>
        <div>
          <p>Haircut</p>
          <p>Hair Colouring</p>
          <p>Treatment</p>
          <p>Extentions</p>
          <p>Scalp Health</p>
          <p>Men's Grooming</p>
          <p>Wig & Hair piece</p>
        </div>
      </div>
      <div>
        {
          dbarbers.value.dbarbers.map((item, index) => (
            <div
              key={index}
              onClick={() => navigate(`/appoinment/${item._id}`)}
              className="border w-[32vh] border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:-translate-y-2 transition-all duration-300"
            >
              <img
                className="w-full h-40 sm:h-48 md:h-56 object-contain bg-gray-600"
                src={item.image}
                alt={item.name}
              />
              <div className="p-4 border-gray-950">
                <div className="flex items-center gap-2 text-sm text-green-500">
                  <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                  <p>Available</p>
                </div>
                <p className="text-gray-900 text-lg font-medium">{item.name}</p>
                <p className="text-gray-600 text-sm">{item.speciality}</p>
              </div>
            </div>
          ))
        }

      </div>
    </div>
  )
}

export default Barbers

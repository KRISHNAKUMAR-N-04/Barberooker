import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const Barbers = () => {

  const { speciality } = useParams()
  
  const dbarbers = useContext(AppContext);

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
      
      
    </div>
  )
}

export default Barbers

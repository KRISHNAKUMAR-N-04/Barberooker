import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Barbers from './pages/Barbers'
import About from './pages/About'
import Contact from './pages/Contact'
import Login from './pages/Login'
import MyAppoinments from './pages/MyAppoinments'
import MyProfile from './pages/Myprofile'
import Appoinment from './pages/Appoinment'
import Navbar from './components/Navbar'


const App = () => {
  return (
    <div className="mx-4 sm:mx-[10%]">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/barbers' element={<Barbers/>}/>
        <Route path='/barbers/:speciality' element={<Barbers/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/MyAppoinments' element={<MyAppoinments/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/myprofile' element={<MyProfile/>} />
        <Route path='/appoinment/:docId' element={<Appoinment/>} />

      </Routes>
    </div>
  )
}

export default App

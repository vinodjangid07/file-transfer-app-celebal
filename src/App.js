import React from 'react'
import "./App.css"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Share from './components/Share'
import Recive from './components/Recive'
import DashBoard from './components/DashBoard'
import LandingPage from './components/LandingPage'

const App = () => {
  return (
    <div>
         <BrowserRouter>
        <Routes>
         <Route path='/' element={<LandingPage/>}/>
         <Route path='/dashBoard' element={<DashBoard/>}/>
         <Route  path='/share' element={<Share/>}/>
         <Route  path='/recive' element={<Recive/>}/>

        </Routes>
        
        </BrowserRouter>
    </div>
  )
}

export default App

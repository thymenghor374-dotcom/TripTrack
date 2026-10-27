import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import TravelLanding from './pages/TravelLanding'
import Flights from './pages/Flights'
import Hotels from './pages/Hotels'
import Buses from './pages/Buses';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<TravelLanding/>}/>
          <Route path='/flights' element={<Flights/>}/>
          <Route path='/hotels' element={<Hotels/>}/>
          <Route path='/buses' element={<Buses/>}/>
        </Routes>
      </BrowserRouter>
      
    </div>
  )
}

export default App

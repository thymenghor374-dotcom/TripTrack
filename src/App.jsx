import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import TravelLanding from './pages/TravelLanding'
import Flights from './pages/Flights'
import Hotels from './pages/Hotels'
import Buses from './pages/Buses';
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import MoreDestination from './components/MoreDestination'
import ScrollToTop from './components/ScrollToTop'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <ScrollToTop/>
        <Navbar/>
        <Routes>
          <Route path='/' element={<TravelLanding/>}/>
          <Route path='/flights' element={<Flights/>}/>
          <Route path='/hotels' element={<Hotels/>}/>
          <Route path='/buses' element={<Buses/>}/>
          <Route path='/more/flights' element={<MoreDestination/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
      
    </div>
  )
}

export default App

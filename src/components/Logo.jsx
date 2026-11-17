import React from 'react'
import logo from '../assets/logo.svg';

const Logo = ({ light = true }) => {
  return (
    <a href="/" className="flex items-center" aria-label="TripTrack home">
      <img src={logo} alt="TripTrack" className="h-10 w-auto" />
    </a>
  );
}

export default Logo

import React from 'react'
import { Link } from 'react-router-dom'
import './global.css';

function Navbar() {
  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">
          <Link to="/"> Home  </Link>
        </div>
        <div className="nav-links">
          <Link to="/"> RGB Colorpicker </Link>
          <Link to="/2d"> 2D Colorpicker </Link>
          <Link to="/hsl"> HSL Colorwheel </Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar

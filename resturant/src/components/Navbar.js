import React, { useState } from 'react';
import { Link, NavLink } from "react-router-dom";


import logo from '../images/33.png'

function Navbar() {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  return (


<nav className="navbar navbar-dark bg-transparent navbar-expand-lg">
        <NavLink className="navbar-brand" to="/">
         <p className="text-warning logo">épices</p>
        </NavLink>
        <button
          className="custom-toggler navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded={!isNavCollapsed ? true : false}
          aria-label="Toggle navigation"
          onClick={handleNavCollapse}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`}  id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <NavLink to="/" className="nav-link active">
              Home <span className="sr-only">(current)</span>
            </NavLink>
            <NavLink to="/search" className="nav-link">
              Booking
            </NavLink>
            <NavLink to="/login" className="nav-link">
              Login
            </NavLink>
          </div>
        </div>
      </nav>

  );
}

export default Navbar;


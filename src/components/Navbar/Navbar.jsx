
import React from 'react';
import './Navbar.css'
import { Link } from 'react-router-dom'; 

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="https://c.animaapp.com/0ReT5wt9/img/group-4034-1.png" alt="Logo" />
      </div>
      <ul className="navbar-links">
        <li className="nav-item">
          <Link to="/services" className="nav-link">Services</Link>
        </li>
        <li className="nav-item">
          <Link to="/countryInfo" className="nav-link">Country Information</Link>
        </li>
        <li className="nav-item">
          <Link to="#course-search" className="nav-link">Course Search</Link>
        </li>
        <li className="nav-item">
          <Link to="#blogs" className="nav-link">Blogs</Link>
        </li>
        <li className="nav-item">
          <Link to="#test-prep" className="nav-link">Test Prep</Link>
        </li>
        <li className="nav-item">
          <Link to="/events" className="nav-link">Events</Link>
        </li>
        <li className="nav-item">
          <Link to="/contactus" className="nav-link btn-type">Contact Us</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

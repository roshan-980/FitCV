import React from 'react'

import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">FitCV</div>

      <div className="navLinks">
        <div>Resume Builder</div>
        <div>ATS Score</div>
        <div>Dashboard</div>
      </div>

      <div className="profile">
        Profile
      </div>
    </nav>
  );
};

export default Navbar

import React from 'react';
import {Link, NavLink} from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <nav className="navbar bg-dark border-bottom border-body mb-5" data-bs-theme="dark">
      <div className="container-fluid">
        <Link to='/' className="navbar-brand">Calorie tracker</Link>
        <ul className="navbar-nav flex-row flex-nowrap gap-3">
          <li className="nav-item">
            <NavLink to="/" className="nav-link">Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/add-meal" className="nav-link">Add meal</NavLink>
          </li>
        </ul>
      
      </div>
    </nav>
  
  );
};

export default Navbar;
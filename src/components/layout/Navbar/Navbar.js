import React from 'react';
import { Link } from 'react-router-dom';
import NavLink from './NavLink';
import { NAVIGATION_LINKS } from '../../../utils/constants';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/" style={{ color:"#dca7ff"}}>
          <i className="bi bi-person-circle"></i> Intervieo
        </Link>
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav" 
          aria-controls="navbarNav" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {NAVIGATION_LINKS.map((link, index) => (
              <NavLink key={index} {...link} />
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
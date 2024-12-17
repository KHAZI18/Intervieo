import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const NavLink = ({ path, label }) => (
  <li className="nav-item">
    <Link className="nav-link" to={path}>{label}</Link>
  </li>
);

NavLink.propTypes = {
  path: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired
};

export default NavLink;
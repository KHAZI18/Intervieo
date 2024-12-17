import React from 'react';
import PropTypes from 'prop-types';
import { ButtonProps } from './Button.types';
import './Button.css';

const Button = ({ 
  children, 
  onClick = () => {}, 
  className = '' 
}) => {
  return (
    <button 
      className={`btn ${className}`} 
      onClick={onClick}
    >
      {children}
    </button>
  );
};

Button.propTypes = ButtonProps;

export default Button;
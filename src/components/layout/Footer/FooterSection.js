import React from 'react';
import { FooterSectionType } from '../../../utils/types';
import './FooterSection.css';

const FooterSection = ({ 
  title, 
  links, 
  className = '' 
}) => (
  <div className={`col-md-4 ${className}`}>
    <h5>{title}</h5>
    <ul>
      {links.map((link, index) => (
        <li key={index}>
          <a href={link.path}>{link.label}</a>
        </li>
      ))}
    </ul>
  </div>
);

FooterSection.propTypes = FooterSectionType;

export default FooterSection;
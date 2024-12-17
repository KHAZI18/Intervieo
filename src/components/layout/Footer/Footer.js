import React from 'react';
import FooterSection from './FooterSection';
import { FOOTER_SECTIONS } from '../../../utils/constants';
import './Footer.css';

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row align-items-center">
          <FooterSection {...FOOTER_SECTIONS.company} />
          <FooterSection {...FOOTER_SECTIONS.getStarted} className="text-center" />
          <FooterSection {...FOOTER_SECTIONS.social} className="text-end" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
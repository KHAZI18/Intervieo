import React from 'react';
import PropTypes from 'prop-types';
import './ExperienceCard.css';

const ExperienceCard = ({ 
  image, 
  company, 
  role, 
  author, 
  date, 
  onReadMore 
}) => {
  return (
    <div className="experience-card">
      <img src={image} alt={company} className="experience-card-image" />
      <div className="experience-card-content">
        <h3 className="experience-card-company">{company}</h3>
        <p className="experience-card-role">{role}</p>
        <p className="experience-card-author">
          By {author} on {date}
        </p>
        <button 
          className="experience-card-button"
          onClick={onReadMore}
        >
          Read Experience
        </button>
      </div>
    </div>
  );
};

ExperienceCard.propTypes = {
  image: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  onReadMore: PropTypes.func.isRequired,
};

export default ExperienceCard;
import React from 'react';
import PropTypes from 'prop-types';
import JobCardContent from './JobCardContent';
import './JobCard.css';

const JobCard = (props) => {
  const { image, title } = props;
  
  return (
    <div className="job-card">
      <img src={image} alt={title} className="job-card-image" />
      <JobCardContent {...props} />
    </div>
  );
};

JobCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  salary: PropTypes.string.isRequired,
  applyLink: PropTypes.string.isRequired,
  onSave: PropTypes.func.isRequired
};

export default JobCard;
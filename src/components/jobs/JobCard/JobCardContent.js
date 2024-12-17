import React from 'react';
import PropTypes from 'prop-types';
import JobCardButtons from './JobCardButtons';

const JobCardContent = ({ 
  title, 
  company, 
  location, 
  salary, 
  applyLink, 
  onSave 
}) => (
  <div className="job-card-content">
    <h3 className="job-card-title">{title}</h3>
    <p className="job-card-company">{company}</p>
    <p className="job-card-location">{location}</p>
    <p className="job-card-salary">{salary}</p>
    <JobCardButtons applyLink={applyLink} onSave={onSave} />
  </div>
);

JobCardContent.propTypes = {
  title: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  salary: PropTypes.string.isRequired,
  applyLink: PropTypes.string.isRequired,
  onSave: PropTypes.func.isRequired
};

export default JobCardContent;
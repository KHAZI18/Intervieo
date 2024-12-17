import React from 'react';
import PropTypes from 'prop-types';

const JobCardButtons = ({ applyLink, onSave }) => (
  <div className="job-card-buttons">
    <a 
      href={applyLink} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="job-card-btn btn-apply"
    >
      Apply Now
    </a>
    <button 
      onClick={onSave} 
      className="job-card-btn btn-save"
    >
      Save Job
    </button>
  </div>
);

JobCardButtons.propTypes = {
  applyLink: PropTypes.string.isRequired,
  onSave: PropTypes.func.isRequired
};

export default JobCardButtons;
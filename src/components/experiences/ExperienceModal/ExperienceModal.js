import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import './ExperienceModal.css';

const ExperienceModal = ({ experience, onClose, show }) => {
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (show) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [show, onClose]);

  if (!experience) return null;

  return (
    <div className={`modal-backdrop ${show ? 'show' : ''}`} onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>&times;</button>
        <div className="modal-header">
          <h2 className="modal-title">{experience.company}</h2>
          <h3 className="modal-subtitle">{experience.role}</h3>
          <p className="modal-meta">
            By {experience.author} on {experience.date}
          </p>
        </div>
        <div className="modal-body">
          {experience.experience}
        </div>
      </div>
    </div>
  );
};

ExperienceModal.propTypes = {
  experience: PropTypes.shape({
    company: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    experience: PropTypes.string.isRequired,
  }),
  onClose: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired,
};

export default ExperienceModal;
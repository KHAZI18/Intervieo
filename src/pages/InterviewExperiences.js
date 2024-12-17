import React, { useState } from 'react';
import ExperienceCard from '../components/experiences/ExperienceCard/ExperienceCard';
import ExperienceModal from '../components/experiences/ExperienceModal/ExperienceModal';
import { INTERVIEW_EXPERIENCES } from '../utils/experienceData';
import './InterviewExperiences.css';

const InterviewExperiences = () => {
  const [selectedExperience, setSelectedExperience] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleReadMore = (experience) => {
    setSelectedExperience(experience);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setTimeout(() => setSelectedExperience(null), 300); // Wait for animation
  };

  return (
    <div className="container my-5">
      <h1 className="text-center mb-5">Interview Experiences</h1>
      <div className="experience-grid">
        {INTERVIEW_EXPERIENCES.map((experience) => (
          <ExperienceCard
            key={experience.id}
            {...experience}
            onReadMore={() => handleReadMore(experience)}
          />
        ))}
      </div>
      <ExperienceModal
        experience={selectedExperience}
        show={showModal}
        onClose={handleCloseModal}
      />
    </div>
  );
};

export default InterviewExperiences;
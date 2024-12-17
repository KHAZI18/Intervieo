import React from 'react';
import JobCard from '../components/jobs/JobCard/JobCard';
import { JOB_LISTINGS } from '../utils/jobData';
import useJobSave from '../utils/hooks/useJobSave';
import '../components/jobs/JobCard/JobCard.css';

const JobRecommendations = () => {
  const handleSaveJob = useJobSave();

  return (
    <div className="container my-5">
      <h1 className="text-center mb-5">Job Recommendations</h1>
      <div className="job-card-container">
        {JOB_LISTINGS.map((job) => (
          <JobCard 
            key={job.id} 
            {...job} 
            onSave={() => handleSaveJob(job.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default JobRecommendations;
import React from 'react';
import Button from '../../common/Button/Button';
import './HeroSection.css';

const HeroSection = () => {
    return (
        <div className="hero-section text-center">
            <h1>Prepare for Your Dream Job with InSyncInterview</h1>
            <p>Unlock new career opportunities with our comprehensive interview preparation tools.</p>
            <Button className="btn-start-preparation">
                Start Your Preparation
            </Button>
        </div>
    );
};

export default HeroSection;
import React from 'react';
import Card from './Card';
import { FEATURE_CARDS } from '../../../utils/cardData';
import './CardSection.css';

const CardSection = () => {
  return (
    <div className="card-container">
      {FEATURE_CARDS.map((card, index) => (
        <Card key={index} {...card} />
      ))}
    </div>
  );
};

export default CardSection;
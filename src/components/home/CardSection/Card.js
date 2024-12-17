import React from 'react';
import { CardType } from '../../../utils/types';
import './Card.css';

const Card = ({ image, title, description }) => {
  return (
    <div className="card">
      <img src={image} alt={title} />
      <h5>{title}</h5>
      <p>{description}</p>
    </div>
  );
};

Card.propTypes = CardType;

export default Card;
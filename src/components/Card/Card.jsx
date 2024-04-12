import React from 'react';
import data from '../../data/housing.json';
import './Card.scss';

const Card = ({ cover, title }) => {
  return (
    <div className="card">
      <img src={cover} alt={title} />
      <h3>{title}</h3>
    </div>
  );
};

const CardContainer = () => {
  return (
    <div className="card-container">
      {data.map((item, index) => (
        <Card key={index} cover={item.cover} title={item.title} />
      ))}
    </div>
  );
};

export default CardContainer;
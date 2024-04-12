import React from 'react';
import housingData from '../../data/housing.json';
import './Card.scss';
import { Link } from 'react-router-dom';

const Card = ({id, cover, title }) => {
  return (
  
    <div className="card">
      <Link to={`/housing/${id}`} className='link'>
      <img src={cover} alt={title} />
      <h3>{title}</h3>
      </Link>
    </div>
  );
};

const CardContainer = () => {
  return (
    <div className="card-container">
      {housingData.map((item) => (
        <Card key={item.id} id={item.id} cover={item.cover} title={item.title} />
      ))}
    </div>
  );
};

export default CardContainer;
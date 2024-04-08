import React from 'react';

const LogementCard = ({ cover, title }) => {
  return (
    <div className="logement-card">
      <img src={cover} alt={title} />
      <h3>{title}</h3>
    </div>
  );
};

export default LogementCard;
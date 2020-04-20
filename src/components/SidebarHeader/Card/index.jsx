import React from 'react';

const Card = ({ name, number }) => {
  return (
    <p className={`card ${name}`}>
      <span>{number ? number : 'no data'}</span> {name.replace('-', ' ')}
    </p>
  );
};

export default Card;

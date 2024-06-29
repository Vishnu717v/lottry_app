// CardComponent.js
import React from 'react';
import './CardComponent.css';

const CardComponent = ({ numbers, numberColor }) => {
  return (
    <div>
      <div className="cards-wrapper">
        {numbers.map((number, index) => (
          <div className="card" key={index}>
            <div className="card-content">
              <div className="number" style={{ color: numberColor }}>
                {number}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardComponent;

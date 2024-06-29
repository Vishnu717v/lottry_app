// PrintComponent.js
import React, { forwardRef } from 'react';

const PrintComponent = forwardRef((props, ref) => {
  const { numbers } = props;

  return (
    <div ref={ref}>
      <h2>Lottery Numbers</h2>
      <ul>
        {numbers.map((number, index) => (
          <li key={index}>{number}</li>
        ))}
      </ul>
    </div>
  );
});

export default PrintComponent;

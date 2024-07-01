import React, { useState, useRef } from 'react';
import axios from 'axios';
import ReactToPrint from 'react-to-print';
import CardComponent from './CardComponent';

function App() {
  const [start, setStart] = useState('');
  const [end, setEnd] = useState('');
  const [numbers, setNumbers] = useState([]);
  const [numberColor, setNumberColor] = useState('#000000'); // Default color black
  const printRef = useRef();

  const numbersArray = [];


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // const response = await axios.post('http://localhost:5000/generate', {
        // start: Number(start),
        // end: Number(end),
      // });
      for (let i = start; i <= end; i++) {
        numbersArray.push(i);
      }
      setNumbers(numbersArray);
    } catch (error) {
      console.error('Error generating numbers:', error);
    }
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          value={start}
          onChange={(e) => setStart(e.target.value)}
          placeholder="Starting number"
          required
        />
        <input
          type="number"
          value={end}
          onChange={(e) => setEnd(e.target.value)}
          placeholder="Ending number"
          required
        />
        <button type="submit">Generate Cards</button>
      </form>
      <div className="color-picker">
        <label>Choose Number Color:</label>
        <input type="color" value={numberColor} onChange={(e) => setNumberColor(e.target.value)} />
      </div>
      <div ref={printRef}>
        <CardComponent
          numbers={numbers}
          numberColor={numberColor}
        />
      </div>
      <ReactToPrint
        trigger={() => <button>Print Cards</button>}
        content={() => printRef.current}
      />
    </div>
  );
}

export default App;

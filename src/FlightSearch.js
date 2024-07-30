import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PlaneAnimation from './PlaneAnimation';
import './FlightSearch.css';

const FlightSearch = () => {
  const [flightNumber, setFlightNumber] = useState('');
  const [isPlaneVisible, setPlaneVisible] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setPlaneVisible(true); // Show the plane animation
    setTimeout(() => {
      navigate(`/results/${flightNumber}`);
      setPlaneVisible(false); // Hide the plane animation after navigation
    }, 3000); // Match the duration of the plane animation
  };

  return (
    <>
      <PlaneAnimation isVisible={isPlaneVisible} />
      <div className="box">
        <h1>Flight Checker</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter Flight Number"
            value={flightNumber}
            onChange={(e) => setFlightNumber(e.target.value)}
          />
          <button type="submit">Check Flight</button>
        </form>
      </div>
    </>
  );
};

export default FlightSearch;

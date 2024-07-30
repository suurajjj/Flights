// src/FlightResults.js
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './FlightResults.css'; // Import the CSS for the specific component

// Mock data
const mockData = {
  'abc123': {
    airline: 'Airline A',
    status: 'On Time',
    departure: '10:00 AM',
    arrival: '12:00 PM',
  },
  'xyz456': {
    airline: 'Airline B',
    status: 'Delayed',
    departure: '2:00 PM',
    arrival: '4:00 PM',
  },
};

const FlightResults = () => {
  const { flightNumber } = useParams();
  const navigate = useNavigate();
  const normalizedFlightNumber = flightNumber.toLowerCase();
  const flight = mockData[normalizedFlightNumber] || { airline: 'Unknown', status: 'Not Found', departure: 'N/A', arrival: 'N/A' };

  const [showNotificationForm, setShowNotificationForm] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [notificationStatus, setNotificationStatus] = useState('');
  const [error, setError] = useState('');

  const handleNotifySubmit = (e) => {
    e.preventDefault();
    if (!name || !phone || !email) {
      setError('Please fill out all fields.');
      return;
    }
    // Handle the notify me submission logic here
    console.log('Notify Me:', { name, phone, email });
    setNotificationStatus('Thank you! You will be notified.');
    setTimeout(() => {
      navigate('/');
    }, 2000); // Redirect to search page after 2 seconds
  };

  return (
    <div className="box">
      <h1>Flight Results</h1>
      {flight.airline === 'Unknown' ? (
        <p>No flight found for the given number. Please check and try again.</p>
      ) : (
        <div>
          <h2>Flight Number: {flightNumber}</h2>
          <p>Airline: {flight.airline}</p>
          <p>Status: {flight.status}</p>
          <p>Departure: {flight.departure}</p>
          <p>Arrival: {flight.arrival}</p>
        </div>
      )}
      <div className="button-container">
        <button onClick={() => setShowNotificationForm(!showNotificationForm)} className="notify-button">
          {showNotificationForm ? 'Cancel' : 'Notify Me'}
        </button>
        <button onClick={() => navigate('/')} className="search-button">
          Back to Search
        </button>
      </div>
      {showNotificationForm && (
        <div className="popup">
          <form onSubmit={handleNotifySubmit}>
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button type="submit">Submit</button>
            {error && <p className="error">{error}</p>}
          </form>
          {notificationStatus && <p>{notificationStatus}</p>}
        </div>
      )}
    </div>
  );
};

export default FlightResults;

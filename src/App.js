// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FlightSearch from './FlightSearch';
import FlightResults from './FlightResults';
import './App.css'; // Import global styles

function App() {
  return (
    <Router>
      <div className="container">
        <Routes>
          <Route path="/" element={<FlightSearch />} />
          <Route path="/results/:flightNumber" element={<FlightResults />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

import './App.css'; // Import global styles here
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LinesPage from './pages/LinesPage';
import AboutPage from './pages/AboutPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/lines/:color" element={<LinesPage />} />
      </Routes>
    </Router>
  );
};

export default App;

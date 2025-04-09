import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ProgressTracking from './pages/ProgressTracking';
import ConfidenceLevels from './pages/ConfidenceLevels';
import RecommendedResources from './pages/RecommendedResources';
import Profile from './pages/Profile';
import Goals from './pages/Goals';
import Feedback from './pages/Feedback';
import './App.css';

const App = () => {
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      document.body.classList.add('dark-mode');
    }
  }, []);

  return (
    <Router>
      <div className="App">
        <header className="app-header">
          <h1>Personalized Learning Dashboard</h1>
        </header>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/progress" element={<ProgressTracking />} />
          <Route path="/confidence-levels" element={<ConfidenceLevels />} />
          <Route path="/recommended-resources" element={<RecommendedResources />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/goals" element={<Goals />} />
          <Route path="/feedback" element={<Feedback />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

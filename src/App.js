import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ProgressTracking from './pages/ProgressTracking';
import RecommendedResources from './pages/RecommendedResources';
import Profile from './pages/Profile';
import Goals from './pages/Goals';
import Feedback from './pages/Feedback';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="App">
        {/* Display the title at the top */}
        <header className="app-header">
          <h1>Personalized Learning Dashboard</h1>
        </header>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/progress" element={<ProgressTracking />} />
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


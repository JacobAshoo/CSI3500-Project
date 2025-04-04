import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';  // Import useNavigate for navigation
import './ConfidenceLevels.css';

const ConfidenceLevels = () => {
  const navigate = useNavigate();  // Initialize useNavigate
  const subjects = [
    { name: 'Mathematics', confidence: 50 },
    { name: 'Science', confidence: 60 },
    { name: 'History', confidence: 70 },
    { name: 'Literature', confidence: 40 },
    { name: 'Art', confidence: 65 },
    { name: 'Music', confidence: 55 },
  ];

  // Initialize the state with values from localStorage if available, otherwise use default values
  const [confidenceLevels, setConfidenceLevels] = useState(() => {
    const savedConfidence = localStorage.getItem('confidenceLevels');
    if (savedConfidence) {
      return JSON.parse(savedConfidence);
    } else {
      // Create initial state from subjects array
      const initialState = subjects.reduce((acc, subject) => {
        acc[subject.name] = subject.confidence;
        return acc;
      }, {});
      return initialState;
    }
  });

  // Handle slider change and update state and localStorage
  const handleSliderChange = (subjectName, value) => {
    const updatedConfidenceLevels = {
      ...confidenceLevels,
      [subjectName]: value,
    };
    setConfidenceLevels(updatedConfidenceLevels);

    // Save updated confidence levels to localStorage
    localStorage.setItem('confidenceLevels', JSON.stringify(updatedConfidenceLevels));
  };

  return (
    <div className="confidence-page">
      {/* Back Button */}
      <button className="back-btn" onClick={() => navigate(-1)}>
        Back to Progress Tracking
      </button>

      <h2>Confidence Levels</h2>

      {/* List of subjects with sliders */}
      {subjects.map((subject, index) => (
        <div key={index} className="confidence-container">
          <h3>{subject.name}</h3>
          <input
            type="range"
            min="0"
            max="100"
            value={confidenceLevels[subject.name]}
            onChange={(e) => handleSliderChange(subject.name, e.target.value)}
            className="confidence-slider"
          />
          <p>{confidenceLevels[subject.name]}% Confidence</p>
        </div>
      ))}
    </div>
  );
};

export default ConfidenceLevels;

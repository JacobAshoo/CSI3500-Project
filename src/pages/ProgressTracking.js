import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ProgressTracking.css';

const ProgressTracking = () => {
  const navigate = useNavigate();

  const subjects = [
    {
      name: 'Mathematics',
      progress: 70,
      modules: [
        { name: 'Algebra', progress: 80 },
        { name: 'Calculus', progress: 60 },
        { name: 'Geometry', progress: 75 },
        { name: 'Statistics', progress: 50 },
      ]
    },
    {
      name: 'Science',
      progress: 50,
      modules: [
        { name: 'Physics', progress: 40 },
        { name: 'Chemistry', progress: 55 },
        { name: 'Biology', progress: 60 },
        { name: 'Astronomy', progress: 30 },
      ]
    },
    {
      name: 'History',
      progress: 80,
      modules: [
        { name: 'Ancient History', progress: 90 },
        { name: 'Modern History', progress: 70 },
        { name: 'World Wars', progress: 85 },
      ]
    },
    {
      name: 'Literature',
      progress: 65,
      modules: [
        { name: 'Shakespeare', progress: 80 },
        { name: 'Poetry', progress: 60 },
        { name: 'Modern Literature', progress: 50 },
      ]
    },
    {
      name: 'Art',
      progress: 55,
      modules: [
        { name: 'Painting', progress: 60 },
        { name: 'Sculpture', progress: 50 },
        { name: 'Photography', progress: 70 },
      ]
    },
    {
      name: 'Music',
      progress: 75,
      modules: [
        { name: 'Theory', progress: 80 },
        { name: 'Instruments', progress: 70 },
        { name: 'Composing', progress: 60 },
      ]
    },
  ];

  return (
    <div className="page-content progress-tracking">
      <button className="back-btn" onClick={() => navigate(-1)}>Back</button>

      <h2>Progress Overview</h2>

      {/* Confidence Levels Button placed next to Progress Overview */}
      <button className="navigate-btn" onClick={() => navigate('/confidence-levels')}>
        Go to Confidence Levels
      </button>

      {/* Iterate over subjects */}
      {subjects.map((subject, index) => (
        <div key={index} className="subject-container">
          <h3>{subject.name}</h3>
          <p>Overall Progress: {subject.progress}%</p>

          {/* Overall Progress Bar */}
          <div className="progress-bar-container">
            <div className="progress-bar">
              <div
                className="progress-bar-fill"
                style={{ width: `${subject.progress}%` }}
              ></div>
            </div>
          </div>

          {/* Modules for this subject */}
          <div className="modules">
            {subject.modules.map((module, index) => (
              <div key={index} className="module-card">
                <h4>{module.name}</h4>
                <p>{module.progress}% completed</p>
                <div className="progress-bar">
                  <div
                    className="progress-bar-fill"
                    style={{ width: `${module.progress}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProgressTracking;

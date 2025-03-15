import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ProgressTracking.css';

const ProgressTracking = () => {
  const navigate = useNavigate();

  const overallProgress = 60; // Example overall progress
  const modules = [
    { name: 'Module 1', progress: 80 },
    { name: 'Module 2', progress: 40 },
    { name: 'Module 3', progress: 60 },
  ];

  return (
    <div className="page-content progress-tracking">
      <button className="back-btn" onClick={() => navigate(-1)}>Back</button>

      <h2>Progress Overview</h2>

      {/* Overall Progress Bar */}
      <div className="progress-bar-container">
        <p>Overall Progress: {overallProgress}%</p>
        <div className="progress-bar">
          <div
            className="progress-bar-fill"
            style={{ width: `${overallProgress}%` }}
          ></div>
        </div>
      </div>

      {/* Course Modules */}
      <div className="progress-info">
        <h3>Course Progress</h3>
        <div className="modules">
          {modules.map((module, index) => (
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
    </div>
  );
};

export default ProgressTracking;


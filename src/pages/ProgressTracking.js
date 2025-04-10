import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ProgressTracking.css';

const ProgressTracking = () => {
  const navigate = useNavigate();

  const [subjects, setSubjects] = useState([
    {
      name: 'Mathematics',
      modules: [
        { name: 'Algebra', progress: 0 },
        { name: 'Calculus', progress: 0 },
        { name: 'Geometry', progress: 0 },
        { name: 'Statistics', progress: 0 },
      ]
    },
    {
      name: 'Science',
      modules: [
        { name: 'Physics', progress: 0 },
        { name: 'Chemistry', progress: 0 },
        { name: 'Biology', progress: 0 },
        { name: 'Astronomy', progress: 0 },
      ]
    },
    {
      name: 'History',
      modules: [
        { name: 'Ancient History', progress: 0 },
        { name: 'Modern History', progress: 0 },
        { name: 'World Wars', progress: 0 },
        { name: 'US History', progress: 0 },
      ]
    },
    {
      name: 'Literature',
      modules: [
        { name: 'Shakespeare', progress: 0 },
        { name: 'Poetry', progress: 0 },
        { name: 'Modern Literature', progress: 0 },
        { name: 'World Literature', progress: 0 },
      ]
    },
    {
      name: 'Art',
      modules: [
        { name: 'Painting', progress: 0 },
        { name: 'Sculpting', progress: 0 },
        { name: 'Photography', progress: 0 },
        { name: 'Drawing', progress: 0 },
      ]
    },
    {
      name: 'Music',
      modules: [
        { name: 'Theory', progress: 0 },
        { name: 'Instruments', progress: 0 },
        { name: 'Composing', progress: 0 },
      ]
    },
  ]);

  const handleModuleProgressChange = (subjectIndex, moduleIndex, value) => {
    const newSubjects = [...subjects];

    // handles users inputting progress percentagesd over 100
    if (value > 100) {
      value = 100; 
    }

    newSubjects[subjectIndex].modules[moduleIndex].progress = Number(value);
    setSubjects(newSubjects);
  };

  // for setting the overall progress for an entire subject by taking the average of the modules 
  const getSubjectProgress = (subject)  => {
    const totalModules = subject.modules.length;
    const totalProgress = subject.modules.reduce(
      (sum, module) => sum + module.progress,
      0
    );
    return Math.round(totalProgress / totalModules);
  };
  

  return (
    <div className="page-content progress-tracking">
      <button className="back-btn" onClick={() => navigate(-1)}>
        Back
      </button>

      <h2>Progress Overview</h2>

      <button className="navigate-btn" onClick={() => navigate('/confidence-levels')}>
        Go to Confidence Levels
      </button>

      {subjects.map((subject, sIndex) => {
        const subjectProgress = getSubjectProgress(subject);
        return (
          <div key={sIndex} className="subject-container">
            <h3>{subject.name}</h3>
            <p>Overall Progress: {subjectProgress}%</p>

            {/* Subject Progress Bar */}
            <div className="progress-bar-container">
              <div className="progress-bar">
                <div
                  className="progress-bar-fill"
                  style={{ width: `${subjectProgress}%` }}
                ></div>
              </div>
            </div>

            {/* Modules */}
            <div className="modules">
              {subject.modules.map((module, mIndex) => (
                <div key={mIndex} className="module-card">
                  <h4>{module.name}</h4>
                  <label>Progress:</label>
                  <input
                    type="number"
                    min="0"
                    max="100"
                    value={module.progress}
                    className="progress-input"
                    onChange={(e) =>
                      handleModuleProgressChange(sIndex, mIndex, e.target.value)
                    }
                  />
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
        );
      })}
    </div>
  );
};

export default ProgressTracking;

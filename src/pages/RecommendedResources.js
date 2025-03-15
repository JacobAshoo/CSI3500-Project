import React from 'react';
import { useNavigate } from 'react-router-dom';
import './RecommendedResources.css';

const RecommendedResources = () => {
  const navigate = useNavigate();

  // Sample resources data
  const resources = [
    { title: 'AI in Education', description: 'A comprehensive guide to AI in education.' },
    { title: 'React.js Basics', description: 'Learn the fundamentals of React.js for building dynamic websites.' },
    { title: 'Intro to Machine Learning', description: 'An introduction to machine learning and its applications.' },
    { title: 'Python Programming', description: 'Start learning Python with hands-on examples and exercises.' },
  ];

  return (
    <div className="recommended-resources-container">
      <button className="back-btn" onClick={() => navigate(-1)}>Back</button>
      <h2 className="page-title">Recommended Resources</h2>
      <div className="resources-grid">
        {resources.map((resource, index) => (
          <div key={index} className="resource-card">
            <h3 className="resource-title">{resource.title}</h3>
            <p className="resource-description">{resource.description}</p>
            <button className="view-btn">View Resource</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecommendedResources;


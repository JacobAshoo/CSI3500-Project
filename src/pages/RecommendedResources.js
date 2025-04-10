import React from 'react';
import { useNavigate } from 'react-router-dom';
import './RecommendedResources.css';

const RecommendedResources = () => {
  const navigate = useNavigate();

  const classesWithResources = [
    {
      className: 'Mathematics 101',
      resources: [
        { 
          title: 'Algebra Basics', 
          description: 'Master fundamental algebraic concepts with interactive exercises.',
          type: 'Video Tutorial'
        },
        { 
          title: 'Calculus Workbook', 
          description: 'Practice problems with step-by-step solutions.',
          type: 'E-book'
        }
      ]
    },
    {
      className: 'Computer Science 201',
      resources: [
        { 
          title: 'React.js Documentation', 
          description: 'Official React documentation for in-depth learning.',
          type: 'Documentation'
        },
        { 
          title: 'Python Crash Course', 
          description: 'Hands-on programming exercises for Python beginners.',
          type: 'Interactive Course'
        }
      ]
    },
    {
      className: 'History 150',
      resources: [
        { 
          title: 'World History Timeline', 
          description: 'Interactive timeline of major historical events.',
          type: 'Interactive Map'
        }
      ]
    },
    {
      className: 'Biology 210',
      resources: [
        { 
          title: 'Cell Biology Guide', 
          description: 'Comprehensive guide to cellular structures and functions.',
          type: 'Study Guide'
        }
      ]
    }
  ];

  return (
    <div className="recommended-resources-container">
      <button className="back-btn" onClick={() => navigate(-1)}>Back</button>
      <h2 className="page-title">Recommended Resources</h2>
      
      <div className="classes-grid">
        {classesWithResources.map((classItem, index) => (
          <section key={index} className="class-section">
            <h3 className="class-title">{classItem.className}</h3>
            <div className="resources-grid">
              {classItem.resources.map((resource, idx) => (
                <div key={idx} className="resource-card">
                  <div className="resource-header">
                    <span className="resource-type">{resource.type}</span>
                  </div>
                  <h3 className="resource-title">{resource.title}</h3>
                  <p className="resource-description">{resource.description}</p>
                  <button className="view-btn">View Resource</button>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default RecommendedResources;

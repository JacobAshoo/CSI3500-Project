import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Grades.css';

const Grades = () => {
  const navigate = useNavigate();

  const gradesData = [
    {
      className: 'Calculus',
      grades: [
        { assignment: 'Module 1 Quiz', score: '85%' },
        { assignment: 'Midterm Exam', score: '78%' },
        { assignment: 'Homework Set 2', score: '92%' }
      ]
    },
    {
      className: 'Chemistry',
      grades: [
        { assignment: 'Project 1', score: '100%' },
        { assignment: 'Unit Test', score: '88%' },
        { assignment: 'Periodic Table Review', score: '95%' }
      ]
    },
    {
      className: 'US History',
      grades: [
        { assignment: 'Essay 1', score: '91%' },
        { assignment: 'Quiz 3', score: '87%' }
      ]
    },
    {
      className: 'Biology',
      grades: [
        { assignment: 'Lab Report', score: '90%' },
        { assignment: 'Final Exam', score: '84%' }
      ]
    }
  ];

  return (
    <div className="grades-container">
      <button className="back-btn" onClick={() => navigate(-1)}>Back</button>
      <h2 className="page-title">Your Grades</h2>

      <div className="classes-grid">
        {gradesData.map((classItem, index) => (
          <section key={index} className="class-section">
            <h3 className="class-title">{classItem.className}</h3>
            <div className="grades-list">
              {classItem.grades.map((grade, idx) => (
                <div key={idx} className="grade-card">
                  <div className="grade-title">{grade.assignment}</div>
                  <div className="grade-score">{grade.score}</div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default Grades;

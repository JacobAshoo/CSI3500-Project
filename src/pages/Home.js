import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="page-content home">
      <div className="nav-bar">
        <Link to="/progress">Progress Tracking</Link>
        <Link to="/recommended-resources">Recommended Resources</Link>
        <Link to="/feedback">Feedback</Link>
        <Link to="/profile">Profile</Link>
      </div>

      <h2>Welcome, Student!</h2>

      {/* Overall Progress */}
      <div className="progress-box">
        <h3>Overall Progress</h3>
        <div className="progress-bar">
          <div className="filled" style={{ width: '60%' }}></div>
        </div>
        <p>60% Complete</p>
      </div>

      {/* Recent Activity */}
      <div className="activity-card">
        <h3>Recent Activity</h3>
        <ul>
          <li>Completed Module 1</li>
          <li>Finished Practice Quiz</li>
        </ul>
      </div>

      {/* Upcoming Tasks */}
      <div className="activity-card">
        <h3>Upcoming Tasks</h3>
        <ul>
          <li>Complete Module 2</li>
          <li>Review Lesson 4</li>
        </ul>
      </div>

      {/* User Input */}
      <div className="user-input-card">
        <h3>Set Learning Goals</h3>
        <input type="text" placeholder="Enter your goal" />
        <button>Save</button>
      </div>
    </div>
  );
};

export default Home;


import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Responsive as ResponsiveGridLayout } from 'react-grid-layout';
import './Home.css';
import '/node_modules/react-grid-layout/css/styles.css';
import '/node_modules/react-resizable/css/styles.css';

// Define components first
const ProgressBox = () => (
  <div className="progress-box">
    <h3>Overall Progress</h3>
    <div className="progress-bar">
      <div className="filled" style={{ width: '60%' }}></div>
    </div>
    <p>60% Complete</p>
  </div>
);

const ActivityCard = ({ title, items }) => (
  <div className="activity-card">
    <h3>{title}</h3>
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  </div>
);

const UserInputCard = () => {
  const [goal, setGoal] = useState("");
  const [goalsList, setGoalsList] = useState([]);

  // Load goals when component mounts
  useEffect(() => {
    const savedGoals = JSON.parse(localStorage.getItem("learningGoals")) || [];
    setGoalsList(savedGoals);
  }, []);

  const handleGoalSubmit = () => {
    if (goal.trim() !== "") {
      const updatedGoals = [...goalsList, goal];
      setGoalsList(updatedGoals);
      localStorage.setItem("learningGoals", JSON.stringify(updatedGoals));
      setGoal(""); // Clear input after saving
    }
  };

  return (
    <div className="user-input-card">
      <h3>Set Learning Goals</h3>
      <input 
        type="text" 
        placeholder="Enter your goal" 
        value={goal}
        onChange={(e) => setGoal(e.target.value)}
        onKeyPress={(e) => {
          if (e.key === 'Enter') {
            handleGoalSubmit();
          }
        }}
      />
      <button onClick={handleGoalSubmit}>Save</button>
      <div className="recent-goals">
        {goalsList.slice(-2).map((g, index) => (
          <p key={index}>{g}</p>
        ))}
      </div>
    </div>
  );
};

const Home = () => {
  const [layout, setLayout] = useState([]);
  const [widgets] = useState([
    { 
      id: 'progress', 
      component: ProgressBox,
      defaultSize: { w: 3, h: 2, minW: 2, minH: 2 }
    },
    { 
      id: 'recent', 
      component: () => <ActivityCard 
        title="Recent Activity" 
        items={['Completed Module 1', 'Finished Practice Quiz']} 
      />,
      defaultSize: { w: 2, h: 2, minW: 2, minH: 2 }
    },
    { 
      id: 'upcoming', 
      component: () => <ActivityCard 
        title="Upcoming Tasks" 
        items={['Complete Module 2', 'Review Lesson 4']} 
      />,
      defaultSize: { w: 2, h: 2, minW: 2, minH: 2 }
    },
    { 
      id: 'goals', 
      component: UserInputCard,
      defaultSize: { w: 3, h: 2, minW: 2, minH: 2 }
    }
  ]);

  // Load layout from localStorage
  useEffect(() => {
    const savedLayout = localStorage.getItem('dashboardLayout');
    if (savedLayout) {
      setLayout(JSON.parse(savedLayout));
    }
  }, []);

  // Save layout to localStorage
  const saveLayout = (newLayout) => {
    localStorage.setItem('dashboardLayout', JSON.stringify(newLayout));
  };

  const handleLayoutChange = (newLayout) => {
    setLayout(newLayout);
    saveLayout(newLayout);
  };


  const defaultLayout = widgets.map((widget, index) => ({
  i: widget.id,
  x: 0,  // All widgets start at x=0 (leftmost position)
  y: index * 2,  // Stack vertically with spacing
  w: 12,  // Full width (12 columns)
  h: widget.defaultSize.h,
  minW: 12, // Force single column
  minH: widget.defaultSize.minH
}));

  return (
    <div className="page-content home">
      <div className="nav-bar">
        <Link to="/progress">Progress Tracking</Link>
        <Link to="/recommended-resources">Recommended Resources</Link>
        <Link to="/feedback">Feedback</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/goals">Goals</Link>
      </div>

      <h2>Welcome, Student!</h2>

      <ResponsiveGridLayout
        className="layout"
        layouts={{ lg: layout.length ? layout : defaultLayout }}
        breakpoints={{ lg: 768 }}
        cols={{ lg: 12 }}
        rowHeight={100}
        width={800}
        onLayoutChange={handleLayoutChange}
        draggableHandle=".widget-header"
        compactType="vertical"
      >
        {widgets.map((widget) => (
          <div key={widget.id} className="widget">
            <div className="widget-header">
              <span>≡</span>
            </div>
            <widget.component />
          </div>
        ))}
      </ResponsiveGridLayout>
    </div>
  );
};

export default Home;

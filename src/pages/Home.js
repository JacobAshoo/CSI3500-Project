import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Responsive, WidthProvider } from 'react-grid-layout';
import './Home.css';
import '/node_modules/react-grid-layout/css/styles.css';
import '/node_modules/react-resizable/css/styles.css';


const ResponsiveGridLayout = WidthProvider(Responsive);

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
  const [goal, setGoal] = useState('');
  const [goalsList, setGoalsList] = useState([]);

  useEffect(() => {
    const savedGoals = JSON.parse(localStorage.getItem('learningGoals')) || [];
    setGoalsList(savedGoals);
  }, []);

  const handleGoalSubmit = () => {
    if (goal.trim() !== '') {
      const updatedGoals = [...goalsList, goal];
      setGoalsList(updatedGoals);
      localStorage.setItem('learningGoals', JSON.stringify(updatedGoals));
      setGoal('');
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
          if (e.key === 'Enter') handleGoalSubmit();
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

  const widgets = [
    {
      id: 'progress',
      component: ProgressBox
    },
    {
      id: 'recent',
      component: () => (
        <ActivityCard
          title="Recent Activity"
          items={['Completed Module 1', 'Finished Practice Quiz']}
        />
      )
    },
    {
      id: 'upcoming',
      component: () => (
        <ActivityCard
          title="Upcoming Tasks"
          items={['Complete Module 2', 'Review Lesson 4']}
        />
      )
    },
    {
      id: 'goals',
      component: UserInputCard
    }
  ];

  useEffect(() => {
    const savedLayout = localStorage.getItem('dashboardLayout');
    if (savedLayout) {
      setLayout(JSON.parse(savedLayout));
    }
  }, []);

  const saveLayout = (newLayout) => {
    setLayout(newLayout);
    localStorage.setItem('dashboardLayout', JSON.stringify(newLayout));
  };

  const defaultLayout = widgets.map((widget, index) => ({
    i: widget.id,
    x: 0,
    y: index * 2,
    w: 12,
    h: 2,
    minW: 12,
    minH: 2
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

      <div className="layout-container">
        <ResponsiveGridLayout
          className="layout"
          layouts={{ lg: layout.length ? layout : defaultLayout }}
          breakpoints={{ lg: 768 }}
          cols={{ lg: 12 }}
          rowHeight={100}
          onLayoutChange={saveLayout}
          draggableHandle=".widget-header"
          compactType="vertical"
          isDraggable={true}
          isResizable={false}
          useCSSTransforms={true}
        >
          {widgets.map((widget) => (
            <div key={widget.id} className="widget">
              <div className="widget-header"><span>≡</span></div>
              <widget.component />
            </div>
          ))}
        </ResponsiveGridLayout>
      </div>
    </div>
  );
};

export default Home;

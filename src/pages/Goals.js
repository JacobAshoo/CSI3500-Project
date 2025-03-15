import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Goals.css';

const Goals = () => {
  const navigate = useNavigate();
  
  // State to store user input (goals)
  const [goal, setGoal] = useState('');
  const [goalsList, setGoalsList] = useState([]);

  const handleGoalChange = (e) => {
    setGoal(e.target.value);
  };

  const handleAddGoal = () => {
    if (goal.trim() !== '') {
      setGoalsList([...goalsList, goal]);
      setGoal('');
    }
  };

  return (
    <div className="page-content goals">
      <button className="back-btn" onClick={() => navigate(-1)}>Back</button>

      <h2>Set Learning Goals</h2>

      {/* Input Form for Goals */}
      <div className="goal-input-card">
        <h3>Enter Your Goal</h3>
        <input 
          type="text" 
          value={goal} 
          onChange={handleGoalChange} 
          placeholder="Enter your learning goal"
        />
        <button onClick={handleAddGoal}>Add Goal</button>
      </div>

      {/* Display Goals */}
      <div className="goals-list">
        <h3>Your Goals</h3>
        <ul>
          {goalsList.map((goal, index) => (
            <li key={index}>{goal}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Goals;


import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Goals.css";

const Goals = () => {
  const navigate = useNavigate();
  
  // State to store user input (goals)
  const [goal, setGoal] = useState("");
  const [goalsList, setGoalsList] = useState([]);

  // 🔹 Load goals from Local Storage when the component mounts
  useEffect(() => {
    const savedGoals = JSON.parse(localStorage.getItem("learningGoals"));
    if (savedGoals && Array.isArray(savedGoals)) {
      setGoalsList(savedGoals);
    }
  }, []);

  // 🔹 Save goals to Local Storage whenever goalsList changes
  useEffect(() => {
    if (goalsList.length > 0) {
      localStorage.setItem("learningGoals", JSON.stringify(goalsList));
    } else {
      localStorage.removeItem("learningGoals");  // 🔥 Remove Local Storage if empty
    }
  }, [goalsList]);

  // 🔹 Handle input change
  const handleGoalChange = (e) => {
    setGoal(e.target.value);
  };

  // 🔹 Add a new goal to the list
  const handleAddGoal = () => {
    if (goal.trim() !== "") {
      setGoalsList([...goalsList, goal]);
      setGoal(""); // Clear input field
    }
  };

  // 🔹 Delete a goal
  const handleDeleteGoal = (index) => {
    const updatedGoals = goalsList.filter((_, i) => i !== index);
    setGoalsList(updatedGoals);
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
        <div className="goal-cards">
          {goalsList.map((goal, index) => (
            <div className="goal-card" key={index}>
              <p className="goal-text">{goal}</p>
              <button className="delete-btn" onClick={() => handleDeleteGoal(index)}>
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Goals;

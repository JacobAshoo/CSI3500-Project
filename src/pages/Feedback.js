import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Feedback.css';

const Feedback = () => {
  const navigate = useNavigate();
  
  const [feedback, setFeedback] = useState('');
  const [feedbackHistory, setFeedbackHistory] = useState([]);

  const handleFeedbackChange = (e) => {
    setFeedback(e.target.value);
  };

  const handleSubmitFeedback = () => {
    if (feedback.trim() !== '') {
      setFeedbackHistory([...feedbackHistory, feedback]);
      setFeedback('');
    }
  };

  return (
    <div className="page-content feedback">
      <button className="back-btn" onClick={() => navigate(-1)}>Back</button>

      <h2>Submit Your Feedback</h2>

      {/* Feedback Form */}
      <div className="feedback-form">
        <textarea
          value={feedback}
          onChange={handleFeedbackChange}
          placeholder="Enter your feedback"
        />
        <button onClick={handleSubmitFeedback}>Submit</button>
      </div>

      {/* Feedback History */}
      <div className="feedback-history">
        <h3>Previous Feedback</h3>
        <ul>
          {feedbackHistory.map((feedback, index) => (
            <li key={index}>{feedback}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Feedback;


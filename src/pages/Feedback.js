import React, { useState, useEffect } from 'react';
import './Feedback.css';

function Feedback() {
  const [feedback, setFeedback] = useState('');
  const [history, setHistory] = useState([]);
  const [hasLoaded, setHasLoaded] = useState(false); // To prevent premature saving

  // Load feedback from localStorage
  useEffect(() => {
    try {
      const storedFeedback = JSON.parse(localStorage.getItem('feedbackHistory'));
      if (Array.isArray(storedFeedback)) {
        setHistory(storedFeedback);
      }
    } catch (error) {
      console.error('Failed to parse feedback from localStorage:', error);
    } finally {
      setHasLoaded(true);
    }
  }, []);

  // Save to localStorage only after loading existing data
  useEffect(() => {
    if (hasLoaded) {
      localStorage.setItem('feedbackHistory', JSON.stringify(history));
    }
  }, [history, hasLoaded]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (feedback.trim() !== '') {
      setHistory([feedback, ...history]);
      setFeedback('');
    }
  };

  const handleDelete = (indexToDelete) => {
    const updatedHistory = history.filter((_, index) => index !== indexToDelete);
    setHistory(updatedHistory);
  };

  return (
    <div className="page-content">
      <h1>Feedback</h1>
      <form onSubmit={handleSubmit} className="feedback-form">
        <textarea
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
          placeholder="Enter your feedback here..."
        />
        <br />
        <button type="submit">Submit</button>
      </form>
      <div className="feedback-history">
        <h2>Previous Feedback</h2>
        <ul>
          {history.map((entry, index) => (
            <li key={index}>
              {entry}
              <button onClick={() => handleDelete(index)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Feedback;

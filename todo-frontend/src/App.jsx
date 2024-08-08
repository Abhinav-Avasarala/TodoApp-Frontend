import React from 'react';
import './App.css';

function App() {
  return (
    <div className="container">
      <h1>TaskGPT</h1>
      <div className="main-content">
        <div className="time-section">
          <div className="total-time">
            <p>Total time</p>
            <div className="time-circle">
              <p>4 hrs 18 mins</p>
            </div>
          </div>
          <div className="time-blocks">
            <p>Time Blocks</p>
          </div>
        </div>
        <div className="tasks-section">
          <div className="tasks-header">
            <p>Tasks</p>
            <button className="add-task">+</button>
          </div>
          <div className="task-item">
            <div className="task-name">Task 1</div>
            <div className="task-info">
              <span className="priority">P1</span>
              <span className="duration">4 hrs</span>
            </div>
          </div>
        </div>
        <div className="schedule-section">
          <p>AI-Generated Schedule</p>
        </div>
      </div>
      <button className="generate-button">Generate Schedule</button>
    </div>
  );
}

export default App;

import React from 'react';
import './Card.css';

function Card({ task }) {
  return (
    <div className="card">
      <p>{task.title}</p>
      {/* Add more task details here */}
    </div>
  );
}

export default Card;

import React from 'react';
import Column from './Column';
import './Board.css';

// function Board({ tasks, groupBy }) {
//   // Logic to group tasks will go here
//   return (
//     <div className="board">
//       {/* Render columns here */}
//     </div>
//   );
// }

function groupTasks(tasks, groupBy) {
  return tasks.reduce((groups, task) => {
    const group = task[groupBy];
    if (!groups[group]) {
      groups[group] = [];
    }
    groups[group].push(task);
    return groups;
  }, {});
}

function sortTasks(tasks, sortBy) {
  if (sortBy === 'priority') {
    // Assuming that the priority is a numeric value where a higher number indicates higher priority
    return [...tasks].sort((a, b) => b.priority - a.priority);
  } else if (sortBy === 'title') {
    // Sorting by title in ascending order
    return [...tasks].sort((a, b) => a.title.localeCompare(b.title));
  }
  return tasks; // If no sort is specified, return tasks as-is
}


function Board({ tasks, groupBy, sortBy }) {
  // First sort the tasks
  const sortedTasks = sortTasks(tasks, sortBy);

  // Then group the sorted tasks
  const groupedTasks = groupTasks(sortedTasks, groupBy);

  return (
    <div className="board">
      {Object.keys(groupedTasks).map(group => (
        <Column key={group} title={group} tasks={groupedTasks[group]} />
      ))}
    </div>
  );
}


export default Board;

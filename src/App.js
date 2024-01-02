import React, { useEffect, useState } from 'react';
import Board from './components/Board';
import { fetchData } from './api';
import './styles/App.css';

function App() {
  const [tasks, setTasks] = useState([]);

  // useEffect(() => {
  //   fetchData().then(data => {
  //     setTasks(data);
  //   });
  // }, []);
  useEffect(() => {
    const savedState = localStorage.getItem('boardState');
    const initialState = savedState ? JSON.parse(savedState) : null;
  
    fetchData().then(data => {
      setTasks(initialState || data);
    });
  }, []);
  
  useEffect(() => {
    localStorage.setItem('boardState', JSON.stringify(tasks));
  }, [tasks]);
  
  return (
    <div className="App">
      <Board tasks={tasks} groupBy="status" />
    </div>
  );
}

export default App;

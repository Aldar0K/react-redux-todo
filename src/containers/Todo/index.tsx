import React, { useState } from 'react';
import './styles.css';
import ITodo from '../../interfaces/ITodo';

const TASKS: ITodo[] = [
  {
    id: 1,
    text: 'Learn React',
    isCompleted: true
  },
  {
    id: 2,
    text: 'Learn React Router',
    isCompleted: true
  },
  {
    id: 3,
    text: 'Learn Redux',
    isCompleted: false
  }
]

const Todo: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const tasksList = TASKS;
  const isTasksExists = tasksList && tasksList.length > 0;

  return (
    <div className='todo'></div>
  );
}

export default Todo;
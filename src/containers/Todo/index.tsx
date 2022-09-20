import React, { useState } from 'react';
import './styles.css';
import ITodo from '../../interfaces/ITodo';
import TodoInput from '../../components/TodoInput';
import TodoList from '../../components/TodoList';
import TodoDashboard from '../../components/TodoDashboard';

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
  const [taskText, setTaskText] = useState('');

  const tasksList = TASKS;
  const isTasksExists = tasksList && tasksList.length > 0;

  const handleInputChange = ({ target: { value } }: React.ChangeEvent<HTMLInputElement>) => {
    setTaskText(value);
  }

  return (
    <div className='todo'>
      <TodoInput value={taskText} onChange={handleInputChange} />
      {isTasksExists &&
        <TodoList tasksList={tasksList} />
      }
      {isTasksExists &&
        <TodoDashboard
          amount={tasksList.length}
          activeFilter={activeFilter}
        />
      }
    </div>
  );
}

export default Todo;
import React, { useState } from 'react';
import './styles.css';
import TodoInput from '../../components/TodoInput';
import TodoList from '../../components/TodoList';
import TodoDashboard from '../../components/TodoDashboard';
import { useSelector } from 'react-redux';
import ITodo from '../../interfaces/ITodo';

const Todo: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [taskText, setTaskText] = useState('');

  interface RootState {
    todos: ITodo[]
  }

  const tasksList = useSelector((state: RootState) => state.todos);
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
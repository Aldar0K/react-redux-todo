import React, { useState } from 'react';
import './styles.css';
import TodoInput from '../../components/TodoInput';
import TodoList from '../../components/TodoList';
import TodoDashboard from '../../components/TodoDashboard';
import { useDispatch, useSelector } from 'react-redux';
import ITodo from '../../interfaces/ITodo';
import { addTodo, removeTodo } from '../../slices/todosSlice';

const Todo: React.FC = () => {
  const dispatch = useDispatch();

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

  const createTask = ({ key }: React.KeyboardEvent<HTMLInputElement>) => {
    if (key === 'Enter') {
      if (taskText.length >= 3) {
        dispatch(addTodo({
          id: (new Date()).getTime(),
          text: taskText,
          isCompleted: false
        }));
        setTaskText('');
      } else {
        // TODO create error state and Error component
        // setError(true)
      }
    }
  }

  const removeTask = (id: number) => {
    dispatch(removeTodo(id));
  }

  return (
    <div className='todo'>
      <TodoInput
        value={taskText}
        onChange={handleInputChange}
        onKeyDown={createTask}  
      />
      {isTasksExists &&
        <TodoList
          tasksList={tasksList}
          removeTask={removeTask}
        />
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
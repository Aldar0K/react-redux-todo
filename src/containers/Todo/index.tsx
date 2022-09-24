import React, { useState } from 'react';
import './styles.css';
import TodoInput from '../../components/TodoInput';
import TodoList from '../../components/TodoList';
import TodoDashboard from '../../components/TodoDashboard';
import { useDispatch, useSelector } from 'react-redux';
import IRootState from '../../interfaces/IRootState';
import { addTodo, removeTodo, completeTodo } from '../../slices/todosSlice';
import { changeFilter } from '../../slices/filterSlice';
import Filter from '../../interfaces/Filter';
import { filterTasks } from '../../utils';

const Todo: React.FC = () => {
  const dispatch = useDispatch();

  const [taskText, setTaskText] = useState('');
  
  const tasksList = useSelector((state: IRootState) => state.todos);
  const isTasksExists = tasksList && tasksList.length > 0;

  const activeFilter = useSelector((state: IRootState) => state.filter);

  const handleInputChange = ({ target: { value } }: React.ChangeEvent<HTMLInputElement>) => {
    setTaskText(value);
  }

  const handleFilterChange = (newFilter: Filter) => {
    dispatch(changeFilter(newFilter));
  }

  const handleInputKey = ({ key }: React.KeyboardEvent<HTMLInputElement>) => {
    if (key === 'Enter') {
      if (taskText.trim().length >= 3) {
        createTask(taskText.trim());
        setTaskText('');
      } else {
        // TODO create error state and Error component
        // setError(true)
      }
    }
  }

  const handleInputAdd = () => {
    if (taskText.trim().length >= 3) {
      createTask(taskText.trim());
      setTaskText('');
    } else {
      // TODO create error state and Error component
      // setError(true)
    }
  }

  const createTask = (text: string) => {
    dispatch(addTodo({
      id: (new Date()).getTime(),
      text: text,
      isCompleted: false
    }));
  }

  const removeTask = (id: number) => {
    dispatch(removeTodo(id));
  }

  const completeTask = (id: number) => {
    dispatch(completeTodo(id));
  }

  const filteredTasks = filterTasks(tasksList, activeFilter);
  const leftTasksCounter = tasksList.filter(task => !task.isCompleted).length

  return (
    <div className='todo'>
      <TodoInput
        value={taskText}
        onChange={handleInputChange}
        onKeyDown={handleInputKey}
        onClick={handleInputAdd}
      />
      {isTasksExists &&
        <TodoList
          tasksList={filteredTasks}
          removeTask={removeTask}
          completeTask={completeTask}
        />
      }
      {isTasksExists &&
        <TodoDashboard
          amount={leftTasksCounter}
          activeFilter={activeFilter}
          onFilterChange={handleFilterChange}
        />
      }
    </div>
  );
}

export default Todo;

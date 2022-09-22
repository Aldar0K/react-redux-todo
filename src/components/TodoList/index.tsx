import React from 'react';
import ITodo from '../../interfaces/ITodo';
import TodoItem from '../TodoItem';
import './styles.css';

interface TodoListProps {
  tasksList: ITodo[]
  removeTask: (id: number) => void
  completeTask: (id: number) => void
}

const TodoList: React.FC<TodoListProps> = ({ tasksList, removeTask, completeTask }) => {
  return (
    <ul className='todo__list'>
      {tasksList.map(({ id, text, isCompleted }) => (
        <TodoItem
          key={id}
          id={id}
          text={text}
          isCompleted={isCompleted}
          removeTask={removeTask}
          completeTask={completeTask}
        />
      ))}
    </ul>
  )
}

export default TodoList

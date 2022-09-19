import React from 'react';
import ITodo from '../../interfaces/ITodo';
import TodoItem from '../TodoItem';
import './styles.css';

interface TodoListProps {
  tasksList: ITodo[]
}

const TodoList: React.FC<TodoListProps> = ({ tasksList }) => {
  return (
    <ul className='todo__list'>
      {tasksList.map(({ id, text, isCompleted }) => (
        <TodoItem
          key={id}
          text={text}
          isCompleted={isCompleted}
        />
      ))}
    </ul>
  )
}

export default TodoList

import React from 'react';
import './styles.css';

interface TodoItemProps {
  text: string
  isCompleted: boolean
}

const TodoItem: React.FC<TodoItemProps> = ({ text, isCompleted }) => {
  return (
    <li className='todo__item'>
      <i className={isCompleted ? 'todo__icon todo__icon_completed' : 'todo__icon'} />
      <span className={isCompleted ? 'todo__text todo__text_completed' : 'todo__text'}>
        {text}
      </span>
      <button className='todo__delete'>Delete</button>
    </li>
  )
}

export default TodoItem
import React from 'react';
import './styles.css';

interface TodoItemProps {
  id: number
  text: string
  isCompleted: boolean
  removeTask: (id: number) => void
}

const TodoItem: React.FC<TodoItemProps> = ({ id, text, isCompleted, removeTask }) => {
  return (
    <li className='todo__item'>
      <i className={isCompleted ? 'todo__icon todo__icon_completed' : 'todo__icon'} />
      <span className={isCompleted ? 'todo__text todo__text_completed' : 'todo__text'}>
        {text}
      </span>
      <button
        className='todo__delete'
        onClick={() => removeTask(id)}
      >
        Delete
      </button>
    </li>
  )
}

export default TodoItem

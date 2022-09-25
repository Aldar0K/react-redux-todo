import React from 'react';
import './styles.css';

interface TodoErrorProps {
  text: string
}

const TodoError: React.FC<TodoErrorProps> = ({ text }) => {
  return (
    <div className='todo__error'>{text}</div>
  )
}

export default TodoError;

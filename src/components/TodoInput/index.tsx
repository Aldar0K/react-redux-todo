import React from 'react';
import TodoError from '../TodoError';
import './styles.css';

interface TodoInputProps {
  value: string
  error: boolean
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void
  onClick: () => void
}

const TodoInput: React.FC<TodoInputProps> = ({ value, onChange, onKeyDown, onClick, error }) => {
  return (
    <>
      <div className='todo__input-wrapper'>
        <input
          className='todo__input'
          type="text"
          placeholder='Click to add task'
          value={value}
          onChange={onChange}
          onKeyDown={onKeyDown}
        />
        <button
          className='button todo__button'
          onClick={onClick}
        >Add</button>
      </div>
      {error &&
        <TodoError text='Please enter valid a task name' />
      }
    </>
  );
}

export default TodoInput;

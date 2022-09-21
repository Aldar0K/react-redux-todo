import React from 'react';
import './styles.css';

interface TodoInputProps {
  value: string,
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void
}

const TodoInput: React.FC<TodoInputProps> = ({ value, onChange, onKeyDown }) => {
  return (
    <div className='todo__input-wrapper'>
      {/* <i className='todo__icon'></i> */}
      <input
        className='todo__input'
        type="text"
        placeholder='Click to add task'
        value={value}
        onChange={onChange}
        onKeyDown={onKeyDown}
      />
    </div>
  );
}

export default TodoInput;

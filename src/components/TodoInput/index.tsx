import React from 'react';
import './styles.css';

interface TodoInputProps {
  value: string,
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const TodoInput: React.FC<TodoInputProps> = ({ value, onChange }) => {
  return (
    <div className='todo__input-wrapper'>
      {/* <i className='todo__icon'></i> */}
      <input
        className='todo__input'
        type="text"
        placeholder='Click to add task'
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export default TodoInput;

import React from 'react';
import './styles.css';

interface TodosTitleProps {
  title: string
}

const TodosTitle: React.FC<TodosTitleProps> = ({ title }) => {
  return (
    <h1 className='main__title title'>{title}</h1>
  );
}

export default TodosTitle;
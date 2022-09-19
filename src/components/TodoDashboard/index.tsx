import React from 'react';
import './styles.css';

interface TodoDashboardProps {
  amount: number
  activeFilter: string
}

const TodoDashboard: React.FC<TodoDashboardProps> = ({ amount, activeFilter }) => {
  return (
    <div className='todo__dashboard'>
      <span className='todo__amount'>{`${amount} Tasks left`}</span>
      <div className='todo__filters'>
        <button
          className={activeFilter === 'all' ? 'filter-btn filter-btn_active' : 'filter-btn'}
        >All</button>
        <button
          className={activeFilter === 'active' ? 'filter-btn filter-btn_active' : 'filter-btn'}
        >Active</button>
        <button
          className={activeFilter === 'completed' ? 'filter-btn filter-btn_active' : 'filter-btn'}
        >Completed</button>
      </div>
    </div>
  );
}

export default TodoDashboard;
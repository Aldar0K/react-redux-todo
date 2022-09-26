import React from 'react';
import Filter from '../../interfaces/Filter';
import './styles.css';

interface TodoDashboardProps {
  amount: number
  activeFilter: Filter
  onFilterChange: (newFilter: Filter) => void
}

const TodoDashboard: React.FC<TodoDashboardProps> = ({ amount, activeFilter, onFilterChange }) => {
  return (
    <div className='todo__dashboard'>
      <span className='todo__amount'>{`${amount} Tasks left`}</span>
      <div className='todo__filters'>
        <button
          className={`button filter-btn ${activeFilter === 'all' ? 'filter-btn_active' : ''}`}
          onClick={() => onFilterChange('all')}
        >All</button>
        <button
          className={`button filter-btn ${activeFilter === 'active' ? 'filter-btn_active' : ''}`}
          onClick={() => onFilterChange('active')}
        >Active</button>
        <button
          className={`button filter-btn ${activeFilter === 'completed' ? 'filter-btn_active' : ''}`}
          onClick={() => onFilterChange('completed')}
        >Completed</button>
      </div>
    </div>
  );
}

export default TodoDashboard;
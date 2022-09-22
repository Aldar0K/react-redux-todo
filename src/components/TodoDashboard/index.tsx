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
          className={activeFilter === 'all' ? 'filter-btn filter-btn_active' : 'filter-btn'}
          onClick={() => onFilterChange('all')}
        >All</button>
        <button
          className={activeFilter === 'active' ? 'filter-btn filter-btn_active' : 'filter-btn'}
          onClick={() => onFilterChange('active')}
        >Active</button>
        <button
          className={activeFilter === 'completed' ? 'filter-btn filter-btn_active' : 'filter-btn'}
          onClick={() => onFilterChange('completed')}
        >Completed</button>
      </div>
    </div>
  );
}

export default TodoDashboard;
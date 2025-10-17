import React from 'react';
import Button from '../UI/Button';

const TaskFilter = ({ currentFilter, onFilterChange }) => {
  const filters = [
    { key: 'all', label: 'All' },
    { key: 'active', label: 'Active' },
    { key: 'completed', label: 'Completed' }
  ];

  return (
    <div className="flex gap-2 mb-6">
      {filters.map(filter => (
        <Button
          key={filter.key}
          variant={currentFilter === filter.key ? 'primary' : 'secondary'}
          size="sm"
          onClick={() => onFilterChange(filter.key)}
        >
          {filter.label}
        </Button>
      ))}
    </div>
  );
};

export default TaskFilter;
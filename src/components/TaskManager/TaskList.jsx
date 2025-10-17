import React from 'react';
import Button from '../UI/Button';

const TaskList = ({ tasks, onToggleTask, onDeleteTask }) => {
  if (tasks.length === 0) {
    return (
      <div className="text-center py-8 text-gray-500 dark:text-gray-400">
        <p>No tasks found. Add some tasks to get started!</p>
      </div>
    );
  }

  return (
    <ul className="space-y-3">
      {tasks.map((task) => (
        <li
          key={task.id}
          className="flex items-center justify-between p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
        >
          <div className="flex items-center gap-3">
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => onToggleTask(task.id)}
              className="h-5 w-5 text-blue-600 rounded focus:ring-blue-500"
            />
            <span
              className={`${
                task.completed 
                  ? 'line-through text-gray-500 dark:text-gray-400' 
                  : 'text-gray-900 dark:text-white'
              }`}
            >
              {task.text}
            </span>
          </div>
          <Button
            variant="danger"
            size="sm"
            onClick={() => onDeleteTask(task.id)}
          >
            Delete
          </Button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
import React, { useState } from 'react';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import TaskForm from './TaskForm';
import TaskList from './TaskList';
import TaskFilter from './TaskFilter';
import Card, { CardHeader, CardBody } from '../UI/Card';

const TaskManager = () => {
  const [tasks, setTasks] = useLocalStorage('tasks', []);
  const [filter, setFilter] = useState('all');

  const addTask = (text) => {
    if (text.trim()) {
      setTasks([
        ...tasks,
        {
          id: Date.now().toString(),
          text: text.trim(),
          completed: false,
          createdAt: new Date().toISOString(),
        },
      ]);
    }
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === 'active') return !task.completed;
    if (filter === 'completed') return task.completed;
    return true;
  });

  const stats = {
    total: tasks.length,
    active: tasks.filter(t => !t.completed).length,
    completed: tasks.filter(t => t.completed).length
  };

  return (
    <div className="max-w-4xl mx-auto">
      <Card>
        <CardHeader>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Task Manager
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mt-2">
            Total: {stats.total} | Active: {stats.active} | Completed: {stats.completed}
          </p>
        </CardHeader>
        <CardBody>
          <TaskForm onAddTask={addTask} />
          <TaskFilter currentFilter={filter} onFilterChange={setFilter} />
          <TaskList 
            tasks={filteredTasks}
            onToggleTask={toggleTask}
            onDeleteTask={deleteTask}
          />
        </CardBody>
      </Card>
    </div>
  );
};

export default TaskManager;
import React, { useState, useEffect } from 'react';

function TaskForm({ onSubmit, editTask, onUpdate }) {
  const [task, setTask] = useState({
    title: '',
    description: '',
    priority: 'Low',
  });

  useEffect(() => {
    if (editTask) {
      setTask(editTask);
    }
  }, [editTask]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task.title.trim()) return;
    editTask ? onUpdate(task) : onSubmit(task);
    setTask({ title: '', description: '', priority: 'Low' });
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        placeholder="Task Title *"
        value={task.title}
        onChange={handleChange}
        required
      />
      <textarea
        name="description"
        placeholder="Description (optional)"
        value={task.description}
        onChange={handleChange}
      />
      <select name="priority" value={task.priority} onChange={handleChange}>
        <option>Low</option>
        <option>Medium</option>
        <option>High</option>
      </select>
      <button type="submit">{editTask ? 'Update Task' : 'Add Task'}</button>
    </form>
  );
}

export default TaskForm;

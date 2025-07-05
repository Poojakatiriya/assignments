import React, { useState } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

function App() {
  const [tasks, setTasks] = useState([]);
  const [editTask, setEditTask] = useState(null);

  const addTask = (task) => {
    setTasks([...tasks, { ...task, id: Date.now(), status: 'Pending' }]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const updateTask = (updatedTask) => {
    setTasks(tasks.map(task => (task.id === updatedTask.id ? updatedTask : task)));
    setEditTask(null);
  };

  const changeStatus = (id, newStatus) => {
    setTasks(tasks.map(task => (task.id === id ? { ...task, status: newStatus } : task)));
  };

  return (
    <div className="app">
      <h1>📝 Task Manager</h1>
      <TaskForm onSubmit={addTask} editTask={editTask} onUpdate={updateTask} />
      <TaskList
        tasks={tasks}
        onEdit={setEditTask}
        onDelete={deleteTask}
        onChangeStatus={changeStatus}
      />
    </div>
  );
}

export default App;

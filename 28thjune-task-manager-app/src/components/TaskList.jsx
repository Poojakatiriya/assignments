import React from 'react';

function TaskList({ tasks, onEdit, onDelete, onChangeStatus }) {
  const statuses = ['Pending', 'In Progress', 'Completed'];

  return (
    <div className="task-list">
      {tasks.length === 0 ? (
        <p className="empty">No tasks added yet.</p>
      ) : (
        tasks.map(task => (
          <div key={task.id} className={`task-card ${task.status.toLowerCase()}`}>
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            <p><strong>Priority:</strong> {task.priority}</p>
            <p><strong>Status:</strong> {task.status}</p>

            <div className="actions">
              <button onClick={() => onEdit(task)}>✏️ Edit</button>
              <button onClick={() => onDelete(task.id)}>🗑️ Delete</button>
              <select
                value={task.status}
                onChange={(e) => onChangeStatus(task.id, e.target.value)}
              >
                {statuses.map(status => (
                  <option key={status} value={status}>{status}</option>
                ))}
              </select>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default TaskList;

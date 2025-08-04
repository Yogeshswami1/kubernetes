import React from 'react'

const TaskList = ({ tasks, onDelete }) => {
  return (
    <ul style={{ listStyle: 'none', padding: 0 }}>
      {tasks.map(task => (
        <li key={task._id} style={{ marginBottom: '0.5rem', display: 'flex', justifyContent: 'space-between' }}>
          <span>{task.title}</span>
          <button onClick={() => onDelete(task._id)}>Delete</button>
        </li>
      ))}
    </ul>
  )
}

export default TaskList

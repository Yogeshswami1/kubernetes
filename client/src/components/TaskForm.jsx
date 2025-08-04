import React, { useState } from 'react'

const TaskForm = ({ onAdd }) => {
  const [title, setTitle] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!title.trim()) return
    onAdd(title)
    setTitle('')
  }

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '1rem' }}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter task"
        style={{ padding: '0.5rem', width: '80%' }}
      />
      <button type="submit" style={{ padding: '0.5rem' }}>Add</button>
    </form>
  )
}

export default TaskForm

// import React, { useEffect, useState } from 'react'
// import axios from 'axios'
// import TaskForm from './components/TaskForm'
// import TaskList from './components/TaskList'

// const App = () => {
//   const [tasks, setTasks] = useState([])

//   const fetchTasks = async () => {
//     const res = await axios.get(`${import.meta.env.VITE_API_BASE}/tasks`)
//     setTasks(res.data)
//   }

//   useEffect(() => {
//     fetchTasks()
//   }, [])

//   const addTask = async (title) => {
//     const res = await axios.post(`${import.meta.env.VITE_API_BASE}/tasks`, { title })
//     setTasks([...tasks, res.data])
//   }

//   const deleteTask = async (id) => {
//     await axios.delete(`${import.meta.env.VITE_API_BASE}/tasks/${id}`)
//     setTasks(tasks.filter(task => task._id !== id))
//   }

//   return (
//     <div style={{ padding: '2rem', maxWidth: '600px', margin: '0 auto' }}>
//       <h1>Task Manager</h1>
//       <TaskForm onAdd={addTask} />
//       <TaskList tasks={tasks} onDelete={deleteTask} />
//     </div>
//   )
// }

// export default App

import React, { useEffect, useState } from 'react'
import axios from 'axios'
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'

const App = () => {
  const [tasks, setTasks] = useState([])

  const fetchTasks = async () => {
    const res = await axios.get('/api/tasks')
    setTasks(res.data)
  }

  useEffect(() => {
    fetchTasks()
  }, [])

  const addTask = async (title) => {
    const res = await axios.post('/api/tasks', { title })
    setTasks([...tasks, res.data])
  }

  const deleteTask = async (id) => {
    await axios.delete(`/api/tasks/${id}`)
    setTasks(tasks.filter(task => task._id !== id))
  }

  return (
    <div style={{ padding: '2rem', maxWidth: '600px', margin: '0 auto' }}>
      <h1>Task Manager</h1>
      <TaskForm onAdd={addTask} />
      <TaskList tasks={tasks} onDelete={deleteTask} />
    </div>
  )
}

export default App

import Task from '../models/Task.js'

export const getTasks = async (req, res) => {
  const tasks = await Task.find()
  res.json(tasks)
}

export const createTask = async (req, res) => {
  const { title } = req.body
  const newTask = new Task({ title })
  await newTask.save()
  res.status(201).json(newTask)
}

export const deleteTask = async (req, res) => {
  const { id } = req.params
  await Task.findByIdAndDelete(id)
  res.status(204).send()
}

// Custom hook quản lý dữ liệu và thao tác của danh sách công việc.
import { useEffect, useState } from 'react'
import { getTasks } from '../services/taskService'

export function useTasks() {
  const [tasks, setTasks] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getTasks().then((data) => {
      setTasks(data)
      setLoading(false)
    })
  }, [])

  function addTask(title) {
    const newTask = {
      id: Date.now(),
      title,
      completed: false,
    }

    setTasks((currentTasks) => [...currentTasks, newTask])
  }

  function toggleTask(id) {
    setTasks((currentTasks) =>
      currentTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task,
      ),
    )
  }

  return { tasks, loading, addTask, toggleTask }
}

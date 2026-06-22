import { useEffect, useState } from 'react'
import { getTasks } from '../services/taskService'

export function useTasks() {
  const [tasks, setTasks] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  async function loadTasks(signal) {
    try {
      setLoading(true)
      setError('')
      const data = await getTasks(signal)
      setTasks(data)
    } catch (requestError) {
      if (requestError.name !== 'AbortError') {
        setError('Không thể tải công việc. Vui lòng thử lại.')
      }
    } finally {
      if (!signal?.aborted) {
        setLoading(false)
      }
    }
  }

  useEffect(() => {
    const controller = new AbortController()

    loadTasks(controller.signal)

    return () => controller.abort()
  }, [])

  function addTask(title) {
    const newTask = {
      id: `local-${Date.now()}`,
      title,
      completed: false,
    }

    setTasks((currentTasks) => [...currentTasks, newTask])
  }

  function toggleTask(id) {
    setTasks((currentTasks) =>
      currentTasks.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item,
      ),
    )
  }

  return { tasks, loading, error, loadTasks, addTask, toggleTask }
}

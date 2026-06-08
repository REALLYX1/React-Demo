import { initialTasks } from '../data/tasks'

export function getTasks() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(initialTasks)
    }, 300)
  })
}

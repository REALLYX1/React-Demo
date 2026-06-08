export function getTaskSummary(tasks) {
  const completed = tasks.filter((task) => task.completed).length

  return {
    total: tasks.length,
    completed,
    remaining: tasks.length - completed,
  }
}

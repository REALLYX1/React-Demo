import Loading from '../components/Loading'
import TaskForm from '../components/TaskForm'
import TaskItem from '../components/TaskItem'
import TaskSummary from '../components/TaskSummary'
import { useTasks } from '../hooks/useTasks'

export default function Tasks() {
  const { tasks, loading, addTask, toggleTask } = useTasks()

  if (loading) {
    return <Loading />
  }

  return (
    <section className="page-grid">
      <div className="page-heading">
        <p className="eyebrow">Công việc</p>
        <h2>Danh sách hôm nay</h2>
        <p>Thêm việc mới hoặc đánh dấu việc đã làm xong.</p>
      </div>

      <TaskSummary tasks={tasks} />

      <div className="task-panel">
        <TaskForm onAddTask={addTask} />

        {tasks.length === 0 ? (
          <p className="message">Chưa có công việc nào.</p>
        ) : (
          <ul className="task-list">
            {tasks.map((task) => (
              <TaskItem key={task.id} task={task} onToggle={toggleTask} />
            ))}
          </ul>
        )}
      </div>
    </section>
  )
}

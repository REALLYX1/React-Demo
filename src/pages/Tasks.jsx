import Loading from '../components/Loading'
import TaskForm from '../components/TaskForm'
import TaskItem from '../components/TaskItem'
import TaskSummary from '../components/TaskSummary'
import { useTasks } from '../hooks/useTasks'

export default function Tasks() {
  const { tasks, loading, error, loadTasks, addTask, toggleTask } = useTasks()

  if (loading) {
    return <Loading />
  }

  return (
    <section className="page-grid">
      <div className="page-heading">
        <p className="eyebrow">Công việc</p>
        <h2>Danh sách công việc hôm nay</h2>
        <p>Thêm việc mới hoặc đánh dấu việc đã làm xong.</p>
      </div>

      <TaskSummary tasks={tasks} />

      <div className="task-panel">
        <TaskForm onAddTask={addTask} />

        {error && (
          <div className="message error-message">
            <span>{error}</span>
            <button type="button" onClick={() => loadTasks()}>
              Thử lại
            </button>
          </div>
        )}

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

      <p className="api-note">
        Dữ liệu tiếng Anh được lấy từ GitHub Issues API. Công việc thêm mới và
        trạng thái đánh dấu chỉ được lưu tạm trong trình duyệt.
      </p>
    </section>
  )
}

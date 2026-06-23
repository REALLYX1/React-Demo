import ApiError from '../components/ApiError'
import Loading from '../components/Loading'
import { useTasks } from '../hooks/useTasks'
import { getTaskSummary } from '../utils/getTaskSummary'

export default function About() {
  const { tasks, loading, error, loadTasks } = useTasks()
  const summary = getTaskSummary(tasks)

  if (loading) {
    return <Loading />
  }

  return (
    <section className="about-page">
      <div className="page-heading">
        <p className="eyebrow">Giới thiệu</p>
        <h2>Việc làm hằng ngày</h2>
        <p>Dữ liệu hiện tại được lấy từ các issue công khai của React trên GitHub.</p>
      </div>

      {error && <ApiError message={error} onRetry={() => loadTasks()} />}

      <div className="feature-grid">
        <article>
          <strong>{summary.total}</strong>
          <p>Tổng công việc từ API.</p>
        </article>
        <article>
          <strong>{summary.completed}</strong>
          <p>Issue đã đóng.</p>
        </article>
        <article>
          <strong>{summary.remaining}</strong>
          <p>Issue đang mở.</p>
        </article>
      </div>

      {tasks.length > 0 && (
        <div className="task-panel">
          <h3>Một số công việc mới</h3>
          <ul className="api-preview-list">
            {tasks.slice(0, 3).map((task) => (
              <li key={task.id}>{task.title}</li>
            ))}
          </ul>
        </div>
      )}
    </section>
  )
}

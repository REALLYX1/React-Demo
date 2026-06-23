import { Link } from 'react-router-dom'
import ApiError from '../components/ApiError'
import Loading from '../components/Loading'
import { useTasks } from '../hooks/useTasks'
import { getTaskSummary } from '../utils/getTaskSummary'

export default function Dashboard() {
  const { tasks, loading, error, loadTasks } = useTasks()
  const summary = getTaskSummary(tasks)

  if (loading) {
    return <Loading />
  }

  return (
    <section className="page-grid">
      {error && <ApiError message={error} onRetry={() => loadTasks()} />}

      <div className="hero">
        <div className="hero-content">
          <p className="eyebrow">Công việc từ GitHub API</p>
          <h2>Việc cần làm hôm nay</h2>
          <p>Danh sách đang có {summary.total} công việc được tải từ API.</p>
          <Link className="primary-link" to="/tasks">
            Mở danh sách
          </Link>
        </div>

        <div className="hero-panel">
          <p>Tiến độ</p>
          <strong>{summary.total} công việc</strong>
          <span>
            {summary.completed} xong, {summary.remaining} chưa xong
          </span>
        </div>
      </div>
    </section>
  )
}

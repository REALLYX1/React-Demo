import { getTaskSummary } from '../utils/getTaskSummary'

export default function TaskSummary({ tasks }) {
  const summary = getTaskSummary(tasks)

  return (
    <div className="summary">
      <div>
        <strong>{summary.total}</strong>
        <span>Tất cả</span>
      </div>
      <div>
        <strong>{summary.completed}</strong>
        <span>Đã xong</span>
      </div>
      <div>
        <strong>{summary.remaining}</strong>
        <span>Còn lại</span>
      </div>
    </div>
  )
}

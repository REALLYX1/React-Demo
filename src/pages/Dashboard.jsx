import { Link } from 'react-router-dom'

export default function Dashboard() {
  return (
    <section className="hero">
      <div className="hero-content">
        <p className="eyebrow">Tổng quan</p>
        <h2>Việc cần làm hôm nay</h2>
        <p>
          Ghi lại các việc cần xử lý và đánh dấu khi đã hoàn thành.
        </p>
        <Link className="primary-link" to="/tasks">
          Xem danh sách
        </Link>
      </div>

      <div className="hero-panel">
        <p>Hôm nay</p>
        <strong>3 công việc</strong>
        <span>1 đã xong, 2 còn lại</span>
      </div>
    </section>
  )
}

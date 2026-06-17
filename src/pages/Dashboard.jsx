import { Link } from 'react-router-dom'

export default function Dashboard() {
  return (
    <section className="hero">
      <div className="hero-content">
        <p className="eyebrow">Công việc</p>
        <h2>Việc cần làm hôm nay</h2>
        <p>
          Danh sách công việc
        </p>
        <Link className="primary-link" to="/tasks">
          Mở danh sách
        </Link>
      </div>

      <div className="hero-panel">
        <p>Tiến độ</p>
        <strong>3 công việc</strong>
        <span>1 xong, 2 chưa xong</span>
      </div>
    </section>
  )
}

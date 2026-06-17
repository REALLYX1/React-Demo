import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section>
      <h2>Trang này không tồn tại</h2>
      <Link className="primary-link" to="/">
        Về trang chính
      </Link>
    </section>
  )
}

// Trang hiển thị khi người dùng mở URL không tồn tại.
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section>
      <h2>Không tìm thấy trang</h2>
      <Link className="primary-link" to="/">
        Quay về Dashboard
      </Link>
    </section>
  )
}

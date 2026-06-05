// Menu dùng React Router để chuyển trang mà không tải lại website.
import { NavLink } from 'react-router-dom'

export default function Navigation() {
  return (
    <div className="navigation-wrap">
      <nav className="navigation">
        <NavLink to="/">Dashboard</NavLink>
        <NavLink to="/tasks">Công việc</NavLink>
        <NavLink to="/about">Thông tin</NavLink>
      </nav>
    </div>
  )
}

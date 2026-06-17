import { NavLink } from 'react-router-dom'

export default function Navigation() {
  return (
    <div className="navigation-wrap">
      <nav className="navigation">
        <NavLink to="/">Trang chính</NavLink>
        <NavLink to="/tasks">Việc cần làm</NavLink>
        <NavLink to="/about">Giới thiệu</NavLink>
      </nav>
    </div>
  )
}

// Header hiển thị thông tin dùng chung lấy từ Context.
import { useAppContext } from '../contexts/AppContext'

export default function Header() {
  const { name, student } = useAppContext()

  return (
    <header className="header">
      <div className="header-inner">
        <div>
          <p className="brand-label">Today</p>
          <h1>{name}</h1>
        </div>
        <span>{student}</span>
      </div>
    </header>
  )
}

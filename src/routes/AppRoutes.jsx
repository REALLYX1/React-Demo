import { Route, Routes } from 'react-router-dom'
import Dashboard from '../pages/Dashboard'
import Tasks from '../pages/Tasks'
import About from '../pages/About'
import NotFound from '../pages/NotFound'

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/tasks" element={<Tasks />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

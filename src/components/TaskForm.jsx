// Form nhỏ minh họa state và sự kiện submit trong React.
import { useState } from 'react'

export default function TaskForm({ onAddTask }) {
  const [title, setTitle] = useState('')

  function handleSubmit(event) {
    event.preventDefault()

    if (!title.trim()) {
      return
    }

    onAddTask(title.trim())
    setTitle('')
  }

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        placeholder="Thêm công việc..."
      />
      <button type="submit">Thêm</button>
    </form>
  )
}

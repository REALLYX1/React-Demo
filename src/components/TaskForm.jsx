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
        placeholder="Nhập việc cần làm..."
      />
      <button type="submit">Thêm</button>
    </form>
  )
}

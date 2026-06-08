export default function TaskItem({ task, onToggle }) {
  return (
    <li className={task.completed ? 'task-item completed' : 'task-item'}>
      <label>
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggle(task.id)}
        />
        <span>{task.title}</span>
      </label>
      <small>{task.completed ? 'Xong' : 'Chưa xong'}</small>
    </li>
  )
}

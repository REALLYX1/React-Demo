export default function ApiError({ message, onRetry }) {
  return (
    <div className="message error-message">
      <span>{message}</span>
      <button type="button" onClick={onRetry}>
        Thử lại
      </button>
    </div>
  )
}

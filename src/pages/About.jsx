export default function About() {
  return (
    <section className="about-page">
      <div className="page-heading">
        <p className="eyebrow">Thông tin</p>
        <h2>Focus Tasks</h2>
        <p>
          Ứng dụng nhỏ để ghi lại các việc cần làm trong ngày.
        </p>
      </div>

      <div className="feature-grid">
        <article>
          <strong>Ghi việc</strong>
          <p>Thêm công việc mới vào danh sách.</p>
        </article>
        <article>
          <strong>Cập nhật</strong>
          <p>Đánh dấu việc đã hoàn thành.</p>
        </article>
        <article>
          <strong>Theo dõi</strong>
          <p>Xem số việc đã xong và còn lại.</p>
        </article>
      </div>
    </section>
  )
}

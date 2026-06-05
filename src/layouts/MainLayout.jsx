// Layout xuất hiện trên mọi trang của ứng dụng.
import Header from '../components/Header'
import Navigation from '../components/Navigation'

export default function MainLayout({ children }) {
  return (
    <div className="app">
      <Header />
      <Navigation />
      <main className="content">{children}</main>
    </div>
  )
}

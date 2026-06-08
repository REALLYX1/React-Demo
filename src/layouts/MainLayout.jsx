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

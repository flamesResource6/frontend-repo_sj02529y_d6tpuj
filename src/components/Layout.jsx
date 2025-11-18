import { Link, Outlet, useLocation } from 'react-router-dom'
import { Menu } from 'lucide-react'
import { useState, useEffect } from 'react'

function Navbar() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => setOpen(false), [pathname])

  const NavLink = ({ to, children }) => (
    <Link
      to={to}
      className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
        pathname === to ? 'bg-white/10 text-white' : 'text-blue-100 hover:text-white hover:bg-white/10'
      }`}
    >
      {children}
    </Link>
  )

  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-slate-900/60 border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <img src="/flame-icon.svg" alt="Logo" className="w-8 h-8" />
          <span className="text-white font-semibold">My Portfolio</span>
        </Link>

        <nav className="hidden md:flex items-center gap-2">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/projects">Projects</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>

        <button onClick={() => setOpen(v => !v)} className="md:hidden text-white/80 p-2">
          <Menu />
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/10">
          <div className="px-4 py-2 flex flex-col gap-1 bg-slate-900/80">
            <Link to="/" className="px-3 py-2 rounded text-blue-100 hover:bg-white/10">Home</Link>
            <Link to="/about" className="px-3 py-2 rounded text-blue-100 hover:bg-white/10">About</Link>
            <Link to="/projects" className="px-3 py-2 rounded text-blue-100 hover:bg-white/10">Projects</Link>
            <Link to="/contact" className="px-3 py-2 rounded text-blue-100 hover:bg-white/10">Contact</Link>
          </div>
        </div>
      )}
    </header>
  )
}

function Footer() {
  return (
    <footer className="mt-20 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-4 py-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 text-blue-200/80">
        <div>
          <div className="flex items-center gap-3 mb-3">
            <img src="/flame-icon.svg" className="w-7 h-7" />
            <span className="text-white font-semibold">My Portfolio</span>
          </div>
          <p className="text-sm">A modern, responsive portfolio showcasing projects and skills.</p>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-2">Links</h4>
          <ul className="space-y-1 text-sm">
            <li><Link to="/about" className="hover:text-white">About</Link></li>
            <li><Link to="/projects" className="hover:text-white">Projects</Link></li>
            <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-2">Contact</h4>
          <p className="text-sm">Email: you@example.com</p>
          <p className="text-sm">Phone: +1 (555) 123-4567</p>
        </div>
      </div>
      <div className="text-center text-xs text-blue-300/60 pb-8">© {new Date().getFullYear()} Your Name. All rights reserved.</div>
    </footer>
  )
}

export default function Layout() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-blue-100">
      <Navbar />
      <main className="max-w-6xl mx-auto px-4">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

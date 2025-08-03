import { Link, useLocation } from 'react-router-dom'

const Sidebar = () => {
  const location = useLocation()


  return (
    <aside
      className="w-64 h-screen p-6 fixed top-16 left-0 hidden md:block"
      style={{
        backgroundColor: 'var(--sidebar-bg)',
        color: 'var(--text-color)'
      }}
    >
      <nav className="flex flex-col gap-4">
        <Link
          to="/"
          className={`text-[15px] sm:text-[17px] font-medium transition duration-200 ${location.pathname === '/' ? 'underline' : 'hover:underline'
            }`}
          style={{
            color: location.pathname === '/'
              ? 'var(--accent-color)'
              : 'var(--text-color)',
          }}
        >
          Home
        </Link>
        <Link
          to="/about"
          className={`text-[15px] sm:text-[17px] font-medium transition duration-200 ${location.pathname === '/about' ? 'underline' : 'hover:underline'
            }`}
          style={{
            color: location.pathname === '/about'
              ? 'var(--accent-color)'
              : 'var(--text-color)',
          }}
        >
          About
        </Link>
        <Link
          to="/contact"
          className={`text-[15px] sm:text-[17px] font-medium transition duration-200 ${location.pathname === '/contact' ? 'underline' : 'hover:underline'
            }`}
          style={{
            color: location.pathname === '/contact'
              ? 'var(--accent-color)'
              : 'var(--text-color)',
          }}
        >
          Contact Us
        </Link>
      </nav>
    </aside>
  )
}

export default Sidebar
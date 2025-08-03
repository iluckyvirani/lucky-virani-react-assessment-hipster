import { Link, useLocation } from 'react-router-dom'
import { useTheme } from '../context/ThemeContext'
import { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'

const Header = () => {
    const { theme, setTheme } = useTheme()
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const location = useLocation()

    return (
        <>
            <header
                className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 shadow-md transition-all h-16"
                style={{ backgroundColor: 'var(--header-bg)' }}
            >
                <div
                    className="text-lg sm:text-2xl font-bold tracking-wide"
                    style={{ color: 'var(--text-color)' }}
                >
                    🎨 Theme Switcher
                </div>

                {/* Desktop Navigation and Theme Selector */}
                <div className="hidden md:flex gap-8 items-center">
                    <nav className="flex gap-8">
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
                            Contact
                        </Link>
                    </nav>
                    <select
                        value={theme}
                        onChange={(e) => setTheme(e.target.value as any)}
                        className="px-3 py-2 rounded-md border"
                        style={{
                            backgroundColor: 'var(--header-bg)',
                            color: 'var(--text-color)',
                            borderColor: 'var(--accent-color)'
                        }}
                    >
                        <option value="theme1">Theme 1 - Minimal</option>
                        <option value="theme2">Theme 2 - Dark + Sidebar</option>
                        <option value="theme3">Theme 3 - Colorful Cards</option>
                    </select>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden p-2"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    style={{ color: 'var(--text-color)' }}
                    aria-label="Toggle menu"
                >
                    {isMenuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
                </button>
            </header>

            {/* Mobile Sidebar Menu */}
            <div
                className={`fixed top-16 left-0  right-0 z-40 bg-white shadow-lg transform transition-transform duration-300 ease-in-out md:hidden
                    ${isMenuOpen ? 'translate-y-0' : '-translate-y-full'}`}
                style={{
                    backgroundColor: 'var(--sidebar-bg)',
                    color: 'var(--text-color)'
                }}
            >
                <div className="flex flex-col p-6 space-y-4">
                    <Link
                        to="/"
                        className={`py-2 px-4 rounded-md font-medium ${location.pathname === '/' ? 'bg-opacity-20' : ''}`}
                        style={{
                            color: location.pathname === '/'
                                ? 'var(--text-color)'
                                : 'var(--accent-color)',
                            fontWeight: location.pathname === '/' ? 'bold' : 'normal',
                            backgroundColor: location.pathname === '/'
                                ? 'var(--accent-color)'
                                : 'transparent'
                        }}
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Home
                    </Link>
                    <Link
                        to="/about"
                        className={`py-2 px-4 rounded-md font-medium ${location.pathname === '/about' ? 'bg-opacity-20' : ''}`}
                        style={{
                            color: location.pathname === '/about'
                                ? 'var(--text-color)'
                                : 'var(--accent-color)',
                            fontWeight: location.pathname === '/about' ? 'bold' : 'normal',
                            backgroundColor: location.pathname === '/about'
                                ? 'var(--accent-color)'
                                : 'transparent'
                        }}
                        onClick={() => setIsMenuOpen(false)}
                    >
                        About
                    </Link>
                    <Link
                        to="/contact"
                        className={`py-2 px-4 rounded-md font-medium ${location.pathname === '/contact' ? 'bg-opacity-20' : ''}`}
                        style={{
                            color: location.pathname === '/contact'
                                ? 'var(--text-color)'
                                : 'var(--accent-color)',
                            fontWeight: location.pathname === '/contact' ? 'bold' : 'normal',
                            backgroundColor: location.pathname === '/contact'
                                ? 'var(--accent-color)'
                                : 'transparent'
                        }}
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Contact
                    </Link>
                    <div className="pt-4 mt-4 border-t" style={{ borderColor: 'var(--accent-color)' }}>
                        <label className="block mb-2 font-medium">Theme</label>
                        <select
                            value={theme}
                            onChange={(e) => {
                                setTheme(e.target.value as any)
                                setIsMenuOpen(false)
                            }}
                            className="w-full px-3 py-2 rounded-md border"
                            style={{
                                backgroundColor: 'var(--sidebar-bg)',
                                color: 'var(--text-color)',
                                borderColor: 'var(--accent-color)'
                            }}
                        >
                            <option value="theme1">Theme 1 - Minimal</option>
                            <option value="theme2">Theme 2 - Dark + Sidebar</option>
                            <option value="theme3">Theme 3 - Colorful Cards</option>
                        </select>
                    </div>
                </div>
            </div>

            {isMenuOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
                    onClick={() => setIsMenuOpen(false)}
                />
            )}
        </>
    )
}

export default Header
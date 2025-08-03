import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import { useTheme } from './context/ThemeContext'

function App() {
  const { theme } = useTheme()

  const isSidebarTheme = theme === 'theme2'

  
  return (
    <div className={`flex ${theme}`}>
      <Header />
      {isSidebarTheme && <Sidebar />}
      <main className={`pt-20 px-4 w-full ${isSidebarTheme ? 'md:ml-64' : ''}`}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </div>
  )
}

export default App

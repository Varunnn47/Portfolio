import { motion } from 'framer-motion'
import { Home, User, Code, FolderOpen, Mail, Sun, Moon } from 'lucide-react'
import { useTheme } from '../contexts/ThemeContext'

const Navbar = () => {
  const { isDark, toggleTheme } = useTheme()

  const links = [
    { label: 'Home', href: '#home', icon: Home },
    { label: 'About', href: '#about', icon: User },
    { label: 'Projects', href: '#projects', icon: FolderOpen },
    { label: 'Contact', href: '#contact', icon: Mail }
  ]

  const handleClick = (e, href) => {
    e.preventDefault()
    const el = document.querySelector(href)
    if (el) {
      const offset = 80
      const top = el.offsetTop - offset
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }

  return (
    <motion.nav
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed bottom-8 left-0 right-0 flex justify-center z-50"
    >
      <div className={`flex items-center gap-5 md:gap-6 px-6 md:px-8 py-3.5 md:py-4 rounded-full backdrop-blur-md border ${
        isDark 
          ? 'bg-dark-custom/80 border-gray-700' 
          : 'bg-white/80 border-gray-200'
      } shadow-lg`}>
        {links.map((link) => {
          const IconComponent = link.icon
          return (
            <motion.a
              key={link.label}
              href={link.href}
              onClick={(e) => handleClick(e, link.href)}
              className={`p-2.5 md:p-3 rounded-full transition-all duration-200 ${
                isDark 
                  ? 'text-gray-400 hover:text-white hover:bg-gray-800' 
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
              }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              title={link.label}
            >
              <IconComponent size={19} />
            </motion.a>
          )
        })}
        
        <motion.button
          onClick={toggleTheme}
          className={`p-2.5 md:p-3 rounded-full transition-all duration-200 ${
            isDark 
              ? 'text-gray-400 hover:text-white hover:bg-gray-800' 
              : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
          }`}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          title={isDark ? 'Light Mode' : 'Dark Mode'}
        >
          {isDark ? <Sun size={19} /> : <Moon size={19} />}
        </motion.button>
      </div>
    </motion.nav>
  )
}

export default Navbar
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Home, User, Code2, FolderOpen, Mail, Sun, Moon } from 'lucide-react'
import { useTheme } from '../contexts/ThemeContext'

const links = [
  { label: 'Home', href: '#home', icon: Home },
  { label: 'About', href: '#about', icon: User },
  { label: 'Experience', href: '#experience', icon: Code2 },
  { label: 'Projects', href: '#projects', icon: FolderOpen },
  { label: 'Contact', href: '#contact', icon: Mail }
]

// Sections with no button of their own count as part of the nav item above them
const parentSection = {
  contributions: 'projects',
  achievements: 'projects',
}

const sectionIds = [...links.map(link => link.href.slice(1)), ...Object.keys(parentSection)]

const itemClass = 'group relative flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-full transition-all duration-200'

const HoverLabel = ({ children }) => (
  <span className="hidden sm:block absolute bottom-full mb-3 px-2 py-1 rounded-md text-xs font-medium whitespace-nowrap pointer-events-none opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity bg-gray-900 dark:bg-white text-white dark:text-gray-900">
    {children}
  </span>
)

const Navbar = () => {
  const { isDark, toggleTheme } = useTheme()
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const elements = sectionIds.map(id => document.getElementById(id)).filter(Boolean)

    // A thin band at mid-viewport, so exactly one section is active at a time
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) setActiveSection(parentSection[entry.target.id] ?? entry.target.id)
      })
    }, { rootMargin: '-50% 0px -50% 0px' })

    elements.forEach(el => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  const handleClick = (e, href) => {
    e.preventDefault()
    const el = document.querySelector(href)
    if (el) {
      window.scrollTo({ top: el.offsetTop, behavior: 'smooth' })
    }
  }

  return (
    <motion.nav
      aria-label="Main"
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed bottom-3 sm:bottom-6 left-0 right-0 flex justify-center z-40 pointer-events-none"
    >
      <div className="pointer-events-auto flex items-center sm:gap-1 md:gap-2 px-1.5 sm:px-3 py-1.5 sm:py-2 rounded-full backdrop-blur-md border bg-white/80 border-gray-200 dark:bg-dark-custom/80 dark:border-gray-700 shadow-lg">
        {links.map((link) => {
          const IconComponent = link.icon
          const isActive = activeSection === link.href.slice(1)
          return (
            <motion.a
              key={link.label}
              href={link.href}
              onClick={(e) => handleClick(e, link.href)}
              className={`${itemClass} ${
                isActive
                  ? 'text-gray-900 dark:text-white bg-gray-100 dark:bg-gray-800'
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800'
              }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label={link.label}
              aria-current={isActive ? 'true' : undefined}
            >
              <IconComponent size={18} />
              <HoverLabel>{link.label}</HoverLabel>
            </motion.a>
          )
        })}

        <motion.button
          onClick={toggleTheme}
          className={`${itemClass} text-gray-600 hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-800`}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
        >
          {isDark ? <Sun size={18} /> : <Moon size={18} />}
          <HoverLabel>{isDark ? 'Light mode' : 'Dark mode'}</HoverLabel>
        </motion.button>
      </div>
    </motion.nav>
  )
}

export default Navbar

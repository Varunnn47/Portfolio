import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Home, User, Code2, FolderOpen, Trophy, Mail, Sun, Moon } from 'lucide-react'
import { useTheme } from '../contexts/ThemeContext'

const Navbar = () => {
  const { isDark, toggleTheme } = useTheme()
  const [activeSections, setActiveSections] = useState(new Set())

  const links = [
    { label: 'Home', href: '#home', icon: Home },
    { label: 'About', href: '#about', icon: User },
    { label: 'Experience', href: '#experience', icon: Code2 },
    { label: 'Projects', href: '#projects', icon: FolderOpen },
    { label: 'Achievements', href: '#achievements', icon: Trophy },
    { label: 'Contact', href: '#contact', icon: Mail }
  ]

  useEffect(() => {
    const sectionIds = ['home', 'about', 'experience', 'projects', 'achievements', 'contact']
    const elements = sectionIds.map(id => document.getElementById(id)).filter(Boolean)

    const observer = new IntersectionObserver((entries) => {
      setActiveSections(prev => {
        const next = new Set(prev)
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            next.add(entry.target.id)
          } else {
            next.delete(entry.target.id)
          }
        })
        return next
      })
    }, { threshold: 0.3 })

    elements.forEach(el => observer.observe(el))

    return () => observer.disconnect()
  }, [])

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
      <div className={`flex items-center gap-1 sm:gap-3 md:gap-5 px-3 sm:px-5 md:px-8 py-2.5 md:py-4 rounded-full backdrop-blur-md border ${
        isDark 
          ? 'bg-dark-custom/80 border-gray-700' 
          : 'bg-white/80 border-gray-200'
      } shadow-lg`}>
        {links.map((link) => {
          const IconComponent = link.icon
          const isActive = activeSections.has(link.href.slice(1))
          return (
            <motion.a
              key={link.label}
              href={link.href}
              onClick={(e) => handleClick(e, link.href)}
              className={`p-2 sm:p-2.5 md:p-3 rounded-full transition-all duration-200 ${
                isActive
                  ? 'text-gray-900 dark:text-white bg-gray-100 dark:bg-gray-800'
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800'
              }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              title={link.label}
            >
              <IconComponent size={17} className="sm:w-[18px] sm:h-[18px] md:w-[19px] md:h-[19px]" />
            </motion.a>
          )
        })}
        
        <motion.button
          onClick={toggleTheme}
          className={`p-2 sm:p-2.5 md:p-3 rounded-full transition-all duration-200 ${
            isDark 
              ? 'text-gray-400 hover:text-white hover:bg-gray-800' 
              : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
          }`}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          title={isDark ? 'Light Mode' : 'Dark Mode'}
        >
          {isDark ? <Sun size={17} className="sm:w-[18px] sm:h-[18px]" /> : <Moon size={17} className="sm:w-[18px] sm:h-[18px]" />}
        </motion.button>
      </div>
    </motion.nav>
  )
}

export default Navbar
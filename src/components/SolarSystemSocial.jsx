import { motion } from 'framer-motion'
import { Github, Linkedin, Mail } from 'lucide-react'

const SolarSystemSocial = () => {
  const socials = [
    { icon: Mail, href: 'mailto:edigavarunkumar66@gmail.com', label: 'Email', color: 'hover:bg-black' },
    { icon: Github, href: 'https://github.com/Varunnn47', label: 'GitHub', color: 'hover:bg-black' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/varun-140a192a1/', label: 'LinkedIn', color: 'hover:bg-black' }
  ]

  const handleClick = (href) => {
    if (href.startsWith('mailto:')) {
      const link = document.createElement('a')
      link.href = href
      link.click()
    } else {
      window.open(href, '_blank')
    }
  }

  return (
    <div className="relative w-80 h-80 mx-auto">
      {/* Center circle */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full bg-gradient-to-br from-black to-gray-600 dark:from-gray-700 dark:to-gray-900 flex items-center justify-center shadow-lg z-10">
        <span className="text-white font-bold text-sm">Varun</span>
      </div>

      {/* Orbit paths - matching icon radii */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full border border-dashed border-gray-300 dark:border-gray-600" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-60 h-60 rounded-full border border-dashed border-gray-300 dark:border-gray-600" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full border border-dashed border-gray-300 dark:border-gray-600" />

      {/* Social icons on separate orbits */}
      {socials.map((social, i) => {
        const Icon = social.icon
        const radiuses = [96, 120, 144] // Inner, middle, outer circle radii
        const speeds = [12, 15, 18] // Different rotation speeds
        const radius = radiuses[i]
        const speed = speeds[i]

        return (
          <motion.div
            key={social.label}
            className="absolute top-1/2 left-1/2 w-0 h-0"
            animate={{ rotate: 360 }}
            transition={{ duration: speed, repeat: Infinity, ease: 'linear' }}
          >
            <div
              className="w-12 h-12 rounded-full bg-white dark:bg-gray-800 shadow-md flex items-center justify-center text-gray-600 dark:text-gray-300 transition-all duration-300 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black hover:shadow-lg cursor-pointer hover:scale-110"
              onClick={() => handleClick(social.href)}
              aria-label={social.label}
              style={{
                position: 'absolute',
                top: `-${radius}px`,
                left: '-24px'
              }}
            >
              <Icon size={20} />
            </div>
          </motion.div>
        )
      })}
    </div>
  )
}

export default SolarSystemSocial
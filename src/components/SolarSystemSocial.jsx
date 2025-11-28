import { motion } from 'framer-motion'
import { Github, Linkedin, Mail } from 'lucide-react'

const SolarSystemSocial = () => {
  const socials = [
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn', color: 'hover:bg-black' },
    { icon: Mail, href: 'mailto:hello@portfolia.dev', label: 'Email', color: 'hover:bg-black' },
    { icon: Github, href: 'https://github.com/Varunnn47', label: 'GitHub', color: 'hover:bg-black' }
  ]

  return (
    <div className="relative w-80 h-80 mx-auto">
      {/* Center circle */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full bg-gradient-to-br from-black to-gray-600 flex items-center justify-center shadow-lg z-10"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
      >
        <span className="text-white font-bold text-sm">ME</span>
      </motion.div>

      {/* Orbit paths */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full border border-dashed border-gray-300" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-60 h-60 rounded-full border border-dashed border-gray-300" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full border border-dashed border-gray-300" />

      {/* Social icons on separate orbits */}
      {socials.map((social, i) => {
        const Icon = social.icon
        const radiuses = [96, 120, 144] // Different orbit sizes
        const speeds = [12, 15, 18] // Different rotation speeds
        const radius = radiuses[i]
        const speed = speeds[i]

        return (
          <motion.div
            key={social.label}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            style={{ width: radius * 2, height: radius * 2 }}
            animate={{ rotate: 360 }}
            transition={{ duration: speed, repeat: Infinity, ease: 'linear' }}
          >
            <motion.a
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`absolute top-0 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center text-gray-600 transition-all duration-300 ${social.color} hover:text-white hover:shadow-lg`}
              animate={{ rotate: -360 }}
              transition={{ duration: speed, repeat: Infinity, ease: 'linear' }}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              aria-label={social.label}
            >
              <Icon size={20} />
            </motion.a>
          </motion.div>
        )
      })}
    </div>
  )
}

export default SolarSystemSocial
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail } from 'lucide-react'
import { profile } from '../Data/portfolioData'

const SolarSystemSocial = () => {
  const socials = [
    { icon: Mail, href: `mailto:${profile.email}`, label: 'Email' },
    { icon: Github, href: profile.github, label: 'GitHub' },
    { icon: Linkedin, href: profile.linkedin, label: 'LinkedIn' }
  ]

  return (
    // Outer box reserves the layout size; the inner system scales down to fit 320px phones
    <div className="w-72 h-72 min-[360px]:w-80 min-[360px]:h-80 mx-auto">
      <div className="relative w-80 h-80 origin-top-left scale-90 min-[360px]:scale-100">
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
          const orbit = { duration: speed, repeat: Infinity, ease: 'linear' }

          return (
            <motion.div
              key={social.label}
              className="absolute top-1/2 left-1/2 w-0 h-0"
              animate={{ rotate: 360 }}
              transition={orbit}
            >
              <a
                href={social.href}
                {...(social.href.startsWith('mailto:') ? {} : { target: '_blank', rel: 'noopener noreferrer' })}
                aria-label={social.label}
                title={social.label}
                className="w-12 h-12 rounded-full bg-white dark:bg-gray-800 shadow-md flex items-center justify-center text-gray-600 dark:text-gray-300 transition-all duration-300 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black hover:shadow-lg cursor-pointer hover:scale-110"
                style={{
                  position: 'absolute',
                  top: `-${radius + 24}px`,
                  left: '-24px'
                }}
              >
                {/* Counter-rotates so the icon stays upright while it orbits */}
                <motion.span
                  className="flex"
                  animate={{ rotate: -360 }}
                  transition={orbit}
                >
                  <Icon size={20} />
                </motion.span>
              </a>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}

export default SolarSystemSocial

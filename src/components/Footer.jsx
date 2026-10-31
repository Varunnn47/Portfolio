import { motion } from 'framer-motion'
import { Github, Linkedin, Mail } from 'lucide-react'
import { fadeIn } from '../utils/motionVariants'
import { profile } from '../Data/portfolioData'

const Footer = () => {
  const year = new Date().getFullYear()

  const socials = [
    { icon: Github, href: profile.github, label: 'GitHub' },
    { icon: Linkedin, href: profile.linkedin, label: 'LinkedIn' },
    { icon: Mail, href: `mailto:${profile.email}`, label: 'Email' }
  ]

  return (
    // Bottom padding keeps the footer clear of the floating navbar
    <footer className="bg-dark-custom dark:bg-dark-custom text-white pt-4 pb-24">
      <motion.div
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="container-custom"
      >
        <div className="flex flex-wrap items-center justify-between gap-3">
          <p className="text-gray-400 text-sm">
            © {year} Varun Goud. Built with React & Tailwind CSS
          </p>

          <div className="flex items-center gap-3">
            {socials.map((social) => {
              const Icon = social.icon
              return (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gray-800 hover:bg-black flex items-center justify-center text-gray-300 hover:text-white transition-all duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={social.label}
                >
                  <Icon size={16} />
                </motion.a>
              )
            })}
          </div>
        </div>
      </motion.div>
    </footer>
  )
}

export default Footer

import { motion } from 'framer-motion'
import { Github, Linkedin, Mail } from 'lucide-react'
import { fadeIn } from '../utils/motionVariants'

const Footer = () => {
  const year = new Date().getFullYear()

  const socials = [
    { icon: Github, href: 'https://github.com/Varunnn47', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/varun-140a192a1/', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:hello@portfolia.dev', label: 'Email' }
  ]

  return (
    <footer className="bg-dark-custom dark:bg-dark-custom text-white py-4">
      <motion.div
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="container-custom"
      >
        <div className="flex items-center justify-between">
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
                  className="w-8 h-8 rounded-full bg-gray-800 hover:bg-black flex items-center justify-center text-gray-300 hover:text-white transition-all duration-300"
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
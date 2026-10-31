import { motion } from 'framer-motion'
import { ArrowRight, Download, Github, Linkedin, Mail } from 'lucide-react'
import { fadeIn, slideUp, staggerContainer } from '../utils/motionVariants'
import { profile } from '../Data/portfolioData'

const socials = [
  { icon: Github, href: profile.github, label: 'GitHub' },
  { icon: Linkedin, href: profile.linkedin, label: 'LinkedIn' },
  { icon: Mail, href: `mailto:${profile.email}`, label: 'Email' },
]

const Hero = () => {
  return (
    <section id="home" className="section-padding min-h-screen flex items-center bg-white dark:bg-dark-custom">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="container-custom"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center max-w-6xl mx-auto px-4">
          {/* Left Content */}
          <motion.div variants={fadeIn} className="text-left order-1 lg:order-1">
            <motion.div className="mb-4 md:mb-6">
              <span className="inline-block px-3 md:px-4 py-2 bg-gray-100 dark:bg-gray-800 text-black dark:text-white rounded-full text-sm font-medium tracking-wide">
                Hello, I'm
              </span>
            </motion.div>

            <motion.h1
              className="text-5xl sm:text-6xl lg:text-7xl text-gray-900 dark:text-white mb-3 md:mb-4 leading-tight font-bold"
            >
              Varun Goud
            </motion.h1>

            <motion.p
              variants={fadeIn}
              className="text-xl md:text-2xl font-semibold text-gray-900 dark:text-white mb-4 md:mb-6"
            >
              AI/ML Engineer &amp; Full-Stack Developer
            </motion.p>

            <motion.p
              variants={fadeIn}
              custom={1}
              className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-6 md:mb-8 leading-relaxed"
            >
              I build AI-driven applications, REST APIs, and AI agents. Currently an AI/ML Engineer Intern at AETHRIZ and building the Masika Care app and website.
            </motion.p>

            <motion.div
              variants={fadeIn}
              custom={3}
              className="flex flex-col sm:flex-row items-stretch sm:items-start gap-4"
            >
              <motion.a
                href="#projects"
                className="btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Projects
                <ArrowRight size={20} />
              </motion.a>
              <motion.a
                href={profile.resume}
                download
                className="btn-secondary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Download Resume
                <Download size={20} />
              </motion.a>
            </motion.div>

            <motion.div variants={fadeIn} custom={4} className="flex items-center gap-3 mt-6">
              {socials.map((social) => {
                const Icon = social.icon
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Icon size={18} />
                  </motion.a>
                )
              })}
            </motion.div>
          </motion.div>

          {/* Right Content - Profile Image */}
          <motion.div
            variants={slideUp}
            className="flex justify-center lg:justify-end order-2 lg:order-2"
          >
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-2xl">
              <img
                src="./profile-photo.jpg"
                alt="Varun Goud"
                width="320"
                height="320"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

export default Hero

import { motion } from 'framer-motion'
import { ArrowRight, FileText, Github, Linkedin, Mail } from 'lucide-react'
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
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-6 lg:gap-16 items-center max-w-6xl mx-auto px-4">
          {/* Left Content */}
          <motion.div variants={fadeIn} className="text-left order-1 lg:order-1">
            <motion.div className="mb-4 md:mb-6">
              <span className="inline-block px-3 md:px-4 py-2 bg-gray-100 dark:bg-gray-800 text-black dark:text-white rounded-full text-sm font-medium tracking-wide">
                Hello, I'm
              </span>
            </motion.div>

            <motion.h1
              className="text-5xl sm:text-6xl lg:text-7xl text-gray-900 dark:text-white mb-2 md:mb-3 leading-tight font-bold tracking-tight"
            >
              Varun Goud
            </motion.h1>

            <motion.p
              variants={fadeIn}
              className="text-xl md:text-2xl font-semibold text-gray-900 dark:text-white mb-3 md:mb-4"
            >
              AI/ML Engineer &amp; Full-Stack Developer
            </motion.p>

            <motion.p
              variants={fadeIn}
              custom={1}
              className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-6 md:mb-8 leading-relaxed max-w-xl"
            >
              I build AI products end to end, from the model to the app people use.
            </motion.p>

            <motion.div
              variants={fadeIn}
              custom={3}
              className="flex flex-col sm:flex-row sm:items-center gap-5 sm:gap-6"
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

              <div className="flex items-center justify-center sm:justify-start gap-4">
                {socials.map((social) => {
                  const Icon = social.icon
                  return (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="p-1 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                      whileHover={{ scale: 1.15 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Icon size={22} />
                    </motion.a>
                  )
                })}

                <span className="h-6 w-px bg-gray-300 dark:bg-gray-600" aria-hidden="true" />

                <motion.a
                  href={profile.resume}
                  download
                  className="inline-flex items-center gap-2 p-1 font-medium text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FileText size={20} />
                  Resume
                </motion.a>
              </div>
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

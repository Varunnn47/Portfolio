import { motion } from 'framer-motion'
import { ArrowRight, Download, MapPin, Mail, Phone } from 'lucide-react'
import { fadeIn, slideUp, staggerContainer } from '../utils/motionVariants'

const Hero = () => {
  return (
    <section id="home" className="section-padding bg-white dark:bg-dark-custom">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="container-custom"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left Content */}
          <motion.div variants={fadeIn} className="text-left">
            <motion.div className="mb-6">
              <span className="inline-block px-4 py-2 bg-gray-100 dark:bg-gray-800 text-black dark:text-white rounded-full text-sm font-medium tracking-wide">
                Hello, I'm
              </span>
            </motion.div>

            <motion.h1
              className="text-6xl md:text-7xl lg:text-8xl text-gray-900 dark:text-white mb-6 leading-tight"
            >
              <span className="text-black dark:text-white">Varun</span>
            </motion.h1>

            <motion.p
              variants={fadeIn}
              custom={1}
              className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed"
            >
              I'm a dedicated student developer focused on building modern, user-centric, and data-driven applications. I enjoy creating clean, responsive interfaces and developing scalable backend systems while continuously learning new technologies.
            </motion.p>

            <motion.div
              variants={fadeIn}
              custom={3}
              className="flex flex-col sm:flex-row items-start gap-4"
            >
              <motion.a
                href="#projects"
                className="btn-primary flex items-center gap-2 justify-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Projects
                <ArrowRight size={20} />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Content - Profile Image */}
          <motion.div 
            variants={slideUp} 
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              <div className="w-80 h-80 rounded-full overflow-hidden shadow-2xl">
                <img 
                  src="/new-profile.png" 
                  alt="Varun Goud" 
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Subtle glow background */}
              <div className="absolute inset-0 rounded-full bg-white/20 blur-3xl -z-10 scale-125"></div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

export default Hero
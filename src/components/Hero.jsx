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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center max-w-6xl mx-auto px-4">
          {/* Left Content */}
          <motion.div variants={fadeIn} className="text-left order-2 lg:order-1">
            <motion.div className="mb-4 md:mb-6">
              <span className="inline-block px-3 md:px-4 py-2 bg-gray-100 dark:bg-gray-800 text-black dark:text-white rounded-full text-sm font-medium tracking-wide">
                Hello, I'm
              </span>
            </motion.div>

            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-gray-900 dark:text-white mb-4 md:mb-6 leading-tight"
            >
              <span className="text-black dark:text-white">Varun</span>
            </motion.h1>

            <motion.p
              variants={fadeIn}
              custom={1}
              className="text-lg md:text-xl lg:text-2xl text-gray-600 dark:text-gray-300 mb-6 md:mb-8 leading-relaxed"
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
            className="flex justify-center lg:justify-end order-1 lg:order-2"
          >
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-2xl">
                <img 
                  src="./23ATA31047.jpeg" 
                  alt="Varun Goud" 
                  className="w-full h-full object-cover"
                  onError={(e) => console.log('Image failed to load:', e.target.src)}
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
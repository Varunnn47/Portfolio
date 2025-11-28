import { motion } from 'framer-motion'
import { ArrowRight, Download } from 'lucide-react'
import { fadeIn, slideUp, staggerContainer } from '../utils/motionVariants'

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center section-padding bg-gradient-to-b from-white to-gray-50">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="container-custom"
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.div variants={fadeIn} className="mb-6">
            <span className="inline-block px-4 py-2 bg-gray-100 text-black rounded-full text-sm font-medium tracking-wide">
              Welcome to my portfolio
            </span>
          </motion.div>

          <motion.h1
            variants={slideUp}
            className="font-heading text-5xl md:text-6xl lg:text-7xl text-gray-900 mb-6 leading-tight"
          >
            Hi, I'm <span className="text-black">Varun Goud</span>
            <span className="block text-gray-700 text-4xl md:text-5xl lg:text-6xl">Building Digital Experiences</span>
          </motion.h1>

          <motion.p
            variants={fadeIn}
            custom={1}
            className="font-body text-lg md:text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            I'm Varun Goud, a passionate developer crafting modern, responsive, and user-centric web applications with cutting-edge technologies.
          </motion.p>

          <motion.div
            variants={fadeIn}
            custom={2}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <motion.a
              href="#projects"
              className="btn-primary flex items-center gap-2 w-full sm:w-auto justify-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Projects
              <ArrowRight size={20} />
            </motion.a>

            <motion.a
              href="/resume.pdf"
              download="Your_Name_Resume.pdf"
              className="btn-secondary flex items-center gap-2 w-full sm:w-auto justify-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Download CV
              <Download size={20} />
            </motion.a>
          </motion.div>
        </div>

        <motion.div
          variants={fadeIn}
          custom={3}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto"
        >
          {[
            { label: 'Projects', value: '50+' },
            { label: 'Clients', value: '30+' },
            { label: 'Experience', value: '5 Years' },
            { label: 'Awards', value: '10+' }
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              variants={fadeIn}
              custom={i}
              className="text-center"
            >
              <div className="font-heading text-3xl md:text-4xl text-black mb-2">
                {stat.value}
              </div>
              <div className="font-body text-sm text-gray-600">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero
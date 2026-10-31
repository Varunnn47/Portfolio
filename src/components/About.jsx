import { motion } from 'framer-motion'
import { fadeIn, slideUp, staggerContainer } from '../utils/motionVariants'
import { skillGroups } from '../Data/portfolioData'

const DEVICON_BASE = 'https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons'

// Keyed by skill count, so each row of tiles fills its card
const gridClasses = {
  4: 'grid-cols-2 sm:grid-cols-4',
  6: 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-6',
  7: 'grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7',
  8: 'grid-cols-2 sm:grid-cols-4',
}

const About = () => {
  return (
    <section id="about" className="section-padding bg-white dark:bg-dark-custom">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="container-custom"
      >
        <motion.div variants={fadeIn} className="text-center mb-8 md:mb-10 px-4">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-gray-900 dark:text-white mb-4 tracking-tight">
            About Me
          </h2>
          <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto font-light">
            AI/ML engineer and full-stack developer building AI-driven applications and intelligent systems.
          </p>
        </motion.div>

        <motion.div variants={slideUp} className="max-w-4xl mx-auto mb-8 md:mb-10 text-left px-4">
          <div className="space-y-4 md:space-y-6 text-base md:text-lg leading-relaxed text-gray-600 dark:text-gray-300">
            <p>
              I'm in the final semester of my B.Tech in Artificial Intelligence at G. Pullaiah College of Engineering and Technology, Kurnool, graduating in 2027. I build AI-driven applications, REST APIs, and automation workflows using Python, Java, and JavaScript.
            </p>
            <p>
              My main interest is AI agents and intelligent systems. I'm currently developing health and food-scanning models at AETHRIZ, and building the mobile app and website for Masika Care, a menstrual health startup.
            </p>
          </div>
        </motion.div>

        <motion.div variants={fadeIn} className="text-center mb-8 md:mb-10 px-4">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-gray-900 dark:text-white mb-4 tracking-tight">
            Tech Stack
          </h2>
          <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto font-light">
            Technologies and tools I work with.
          </p>
        </motion.div>

        <div className="space-y-4 md:space-y-5 px-4">
          {skillGroups.map((group, groupIndex) => (
            <motion.div
              key={group.title}
              variants={fadeIn}
              custom={groupIndex}
              className="rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 p-4 md:p-5 bg-white dark:bg-dark-custom border border-gray-100 dark:border-gray-600"
            >
              <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4 text-center tracking-tight text-gray-900 dark:text-white">
                {group.title}
              </h3>
              <div className={`grid gap-2 md:gap-3 ${gridClasses[group.skills.length]}`}>
                {group.skills.map((skill, i) => {
                  const Icon = skill.lucide
                  return (
                    <motion.div
                      key={skill.name}
                      variants={fadeIn}
                      custom={i}
                      className="flex flex-col items-center p-2 md:p-3 rounded-xl transition-all duration-300 group shadow-sm hover:shadow-lg bg-white dark:bg-dark-custom hover:bg-gray-50 dark:hover:bg-gray-700 border border-gray-100 dark:border-gray-600"
                      whileHover={{ scale: 1.05, y: -3 }}
                    >
                      <div className="w-7 h-7 md:w-9 md:h-9 mb-1.5 md:mb-2 group-hover:scale-110 transition-transform">
                        {Icon ? (
                          <Icon className="w-full h-full text-gray-700 dark:text-gray-200" strokeWidth={1.5} />
                        ) : (
                          <img
                            src={`${DEVICON_BASE}/${skill.icon}.svg`}
                            alt=""
                            width="48"
                            height="48"
                            loading="lazy"
                            className={`w-full h-full object-contain ${skill.invertDark ? 'dark:invert' : ''} ${skill.brightenDark ? 'dark:brightness-200' : ''}`}
                          />
                        )}
                      </div>
                      <span className="font-medium text-xs md:text-sm text-center tracking-wide text-gray-900 dark:text-white">
                        {skill.name}
                      </span>
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default About

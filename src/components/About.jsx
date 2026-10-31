import { motion } from 'framer-motion'
import { BadgeCheck, FileText, Github, GraduationCap, Linkedin, Target } from 'lucide-react'
import { fadeIn, slideUp, staggerContainer } from '../utils/motionVariants'
import { profile, skillGroups } from '../Data/portfolioData'

const DEVICON_BASE = 'https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons'

const aboutLinks = [
  { icon: FileText, href: profile.resume, label: 'Resume' },
  { icon: Github, href: profile.github, label: 'GitHub' },
  { icon: Linkedin, href: profile.linkedin, label: 'LinkedIn' },
]

const quickFacts = [
  {
    icon: Target,
    label: 'Focus',
    value: 'AI agents, LLM applications, and full-stack products',
  },
  {
    icon: GraduationCap,
    label: 'Education',
    value: 'B.Tech in Artificial Intelligence, G. Pullaiah College of Engineering and Technology. Final semester, graduating 2027.',
  },
  {
    icon: BadgeCheck,
    label: 'Certified',
    value: 'SAP Back-End Developer (ABAP Cloud), ServiceNow CAD and CSA',
  },
]

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
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-gray-900 dark:text-white tracking-tight">
            About Me
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-6 lg:gap-10 items-start max-w-5xl mx-auto mb-12 md:mb-16 px-4">
          <motion.div variants={slideUp} className="space-y-4 text-base md:text-lg leading-relaxed text-gray-600 dark:text-gray-300">
            <p>
              Hi, I'm Varun — an AI/ML and full-stack engineer who likes building AI products that work in the real world, from the model and backend to the app people use.
            </p>
            <p>
              <span className="font-semibold text-gray-900 dark:text-white">What I do —</span> Currently developing health and food-scanning AI models at AETHRIZ, and building the mobile app and website for Masika Care, working across Python, Flutter, Supabase, and LLM APIs.
            </p>
            <p>
              <span className="font-semibold text-gray-900 dark:text-white">What's next —</span> Going deeper into AI agents and intelligent systems.
            </p>
            <div className="flex flex-wrap gap-3 pt-1">
              {aboutLinks.map((link) => {
                const Icon = link.icon
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    {...(link.download ? { download: true } : { target: '_blank', rel: 'noopener noreferrer' })}
                    className="inline-flex items-center gap-2 px-3 py-2 rounded-xl text-sm font-semibold text-gray-900 dark:text-white border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                  >
                    <Icon size={16} />
                    {link.label}
                  </a>
                )
              })}
            </div>
          </motion.div>

          <motion.ul variants={fadeIn} custom={1} className="rounded-2xl border border-gray-200 dark:border-gray-700 divide-y divide-gray-200 dark:divide-gray-700">
            {quickFacts.map((fact) => {
              const Icon = fact.icon
              return (
                <li key={fact.label} className="flex items-start gap-3 p-4">
                  <Icon size={18} className="mt-0.5 flex-shrink-0 text-gray-500 dark:text-gray-400" />
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-gray-500 dark:text-gray-400 mb-1">
                      {fact.label}
                    </p>
                    <p className="text-sm leading-relaxed text-gray-900 dark:text-white">
                      {fact.value}
                    </p>
                  </div>
                </li>
              )
            })}
          </motion.ul>
        </div>

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

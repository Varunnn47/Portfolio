import { motion } from 'framer-motion'
import { MapPin, Code2 } from 'lucide-react'
import { fadeIn, slideUp, staggerContainer } from '../utils/motionVariants'
import { experience } from '../Data/portfolioData'

import logoMasika from '../assets/logos/logo-masika.jpg'
import logoAethriz from '../assets/logos/logo-aethriz.png'

const companyLogos = {
  'logo-masika.jpg': logoMasika,
  'logo-aethriz.png': logoAethriz,
}

const Experience = () => {
  if (!experience || experience.length === 0) return null

  return (
    <section id="experience" className="section-padding bg-white dark:bg-dark-custom">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="container-custom"
      >
        {/* Heading */}
        <motion.div variants={fadeIn} className="text-center mb-8 md:mb-10 px-4">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-gray-900 dark:text-white mb-4 tracking-tight">
            Work Experience
          </h2>
          <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto font-light">
            Where I've worked and what I've built there.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-5xl mx-auto px-4">

          {/* Center vertical line — only on md+ */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gray-200 dark:bg-gray-700 -translate-x-1/2" />

          <div className="flex flex-col gap-5 md:gap-6">
            {experience.map((entry, i) => {
              const isLeft = i % 2 === 0
              return (
                <div key={entry.id} className="relative flex flex-col md:flex-row md:items-start gap-6 md:gap-0">

                  {/* Timeline dot — centered on md+ */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 top-6 w-3.5 h-3.5 rounded-full bg-gray-900 dark:bg-white border-4 border-white dark:border-dark-custom z-10" />

                  {/* LEFT side — card or spacer */}
                  <div className={`w-full md:w-1/2 md:pr-10 ${isLeft ? '' : 'hidden md:block'}`}>
                    {isLeft && (
                      <motion.div
                        variants={slideUp}
                        custom={i}
                        whileHover={{ scale: 1.02, y: -4 }}
                        className="rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-dark-custom p-4 transition-shadow duration-300 hover:shadow-xl"
                      >
                        <ExperienceCard entry={entry} />
                      </motion.div>
                    )}
                  </div>

                  {/* RIGHT side — card or spacer */}
                  <div className={`w-full md:w-1/2 md:pl-10 ${isLeft ? 'hidden md:block' : ''}`}>
                    {!isLeft && (
                      <motion.div
                        variants={slideUp}
                        custom={i}
                        whileHover={{ scale: 1.02, y: -4 }}
                        className="rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-dark-custom p-4 transition-shadow duration-300 hover:shadow-xl"
                      >
                        <ExperienceCard entry={entry} />
                      </motion.div>
                    )}
                  </div>

                </div>
              )
            })}
          </div>
        </div>
      </motion.div>
    </section>
  )
}

const ExperienceCard = ({ entry }) => (
  <>
    {/* Top row: employment type badge + dates + location */}
    <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
      <span className="flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-gray-700">
        <Code2 size={11} />
        {entry.employmentType}
      </span>
      <div className="flex flex-col items-end gap-0.5 text-xs text-gray-500 dark:text-gray-400">
        <span>{entry.startDate} – {entry.endDate}</span>
        <span className="flex items-center gap-1">
          <MapPin size={11} />
          {entry.location}
        </span>
      </div>
    </div>

    {/* Company logo (icon placeholder if none) + role + company */}
    <div className="flex items-start gap-4 mb-4">
      <div className="w-12 h-12 rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 flex items-center justify-center flex-shrink-0">
        {companyLogos[entry.logo] ? (
          <img src={companyLogos[entry.logo]} alt={`${entry.company} logo`} className="w-full h-full object-cover" />
        ) : (
          <Code2 size={20} className="text-gray-500 dark:text-gray-400" />
        )}
      </div>
      <div>
        <h3 className="text-base font-bold text-gray-900 dark:text-white leading-tight">
          {entry.role}
        </h3>
        <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mt-0.5">
          {entry.company}
        </p>
      </div>
    </div>

    {/* Description */}
    {entry.description && (
      <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-3">
        {entry.description}
      </p>
    )}

    {/* Key highlights */}
    {entry.achievements && entry.achievements.length > 0 && (
      <ul className="space-y-1 mt-3">
        {entry.achievements.map((item, idx) => (
          <li key={idx} className="flex items-start gap-2 text-xs text-gray-500 dark:text-gray-400">
            <span className="w-1 h-1 mt-[7px] rounded-full bg-gray-400 dark:bg-gray-500 flex-shrink-0" />
            {item}
          </li>
        ))}
      </ul>
    )}
  </>
)

export default Experience



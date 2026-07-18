import { motion } from 'framer-motion'
import { MapPin, ExternalLink, Calendar, Briefcase } from 'lucide-react'
import { fadeIn, slideUp, staggerContainer } from '../utils/motionVariants'
import { experience } from '../Data/mockData'

const Experience = () => {
  if (!experience || experience.length === 0) return null

  return (
    <section id="experience" className="section-padding bg-white dark:bg-dark-custom">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="container-custom"
      >
        {/* Heading */}
        <motion.div variants={fadeIn} className="text-center mb-12 md:mb-16 px-4">
          <h2 className="font-heading text-4xl md:text-5xl text-gray-900 dark:text-white mb-4 tracking-tight">
            Work <span>Experience</span>
          </h2>
          <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto font-light">
            My professional journey and the impact I've made along the way.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="max-w-4xl mx-auto space-y-6 px-4">
          {experience.map((entry, i) => (
            <motion.div
              key={entry.id}
              variants={slideUp}
              custom={i}
              whileHover={{ scale: 1.02, y: -4 }}
              className="rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-dark-custom p-6 md:p-8 transition-shadow duration-300 hover:shadow-xl"
            >
              {/* Card Header */}
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                <div className="flex-1">
                  {/* Company name */}
                  <div className="flex items-center gap-2 mb-1">
                    <Briefcase size={16} className="text-gray-500 dark:text-gray-400 flex-shrink-0" />
                    {entry.companyUrl ? (
                      <a
                        href={entry.companyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Visit ${entry.company}`}
                        className="text-xl font-bold text-gray-900 dark:text-white hover:underline"
                      >
                        {entry.company}
                      </a>
                    ) : (
                      <span className="text-xl font-bold text-gray-900 dark:text-white">
                        {entry.company}
                      </span>
                    )}
                  </div>

                  {/* Role + Employment Type badge */}
                  <div className="flex flex-wrap items-center gap-2 ml-6">
                    <span className="text-base font-semibold text-gray-700 dark:text-gray-200">
                      {entry.role}
                    </span>
                    <span className="px-2 py-0.5 text-xs font-medium rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-gray-600">
                      {entry.employmentType}
                    </span>
                  </div>
                </div>

                {/* Dates + Location */}
                <div className="flex flex-col gap-1.5 text-sm text-gray-500 dark:text-gray-400 sm:text-right sm:flex-shrink-0">
                  <span className="flex items-center gap-1.5 sm:justify-end">
                    <Calendar size={14} className="flex-shrink-0" />
                    {entry.startDate} – {entry.endDate}
                  </span>
                  <span className="flex items-center gap-1.5 sm:justify-end">
                    <MapPin size={14} className="flex-shrink-0" />
                    {entry.location}
                  </span>
                </div>
              </div>

              {/* Card Body — Responsibilities */}
              {entry.responsibilities && entry.responsibilities.length > 0 && (
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">
                    Responsibilities
                  </h4>
                  <ul className="space-y-1.5 pl-1">
                    {entry.responsibilities.map((item, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-300 leading-relaxed"
                      >
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gray-400 dark:bg-gray-500 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Card Body — Achievements */}
              {entry.achievements && entry.achievements.length > 0 && (
                <div className="mb-5">
                  <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">
                    Achievements
                  </h4>
                  <ul className="space-y-1.5 pl-1">
                    {entry.achievements.map((item, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-300 leading-relaxed"
                      >
                        <span className="flex-shrink-0">🏆</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Card Footer — Tech tags + optional link */}
              <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-gray-100 dark:border-gray-700">
                <div className="flex flex-wrap gap-2">
                  {entry.technologies && entry.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-100 dark:bg-dark-custom text-gray-700 dark:text-gray-400 rounded-full text-sm font-medium border dark:border-gray-600"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {entry.companyUrl && (
                  <a
                    href={entry.companyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
                  >
                    <ExternalLink size={14} />
                    Visit Website
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Experience

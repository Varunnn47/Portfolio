import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { BadgeCheck, ExternalLink, X, Shield, Star } from 'lucide-react'
import { fadeIn, staggerContainer } from '../utils/motionVariants'
import { achievements } from '../Data/portfolioData'

import certSapAbapCloud from '../assets/certificates/cert-sap-abap-cloud.jpg'
import certServiceNowCAD from '../assets/certificates/cert-servicenow-cad.jpg'
import certServiceNowCSA from '../assets/certificates/cert-servicenow-csa.jpg'

const certImages = {
  'cert-sap-abap-cloud.jpg': certSapAbapCloud,
  'cert-servicenow-cad.jpg': certServiceNowCAD,
  'cert-servicenow-csa.jpg': certServiceNowCSA,
}

const Achievements = () => {
  const [lightbox, setLightbox] = useState(null)

  useEffect(() => {
    if (!lightbox) return
    const onKeyDown = (e) => {
      if (e.key === 'Escape') setLightbox(null)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [lightbox])

  if (!achievements || achievements.length === 0) return null

  return (
    <section id="achievements" className="section-padding bg-white dark:bg-dark-custom">
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
            Certifications
          </h2>
          <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto font-light">
            Industry certifications I've earned from SAP and ServiceNow.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 px-4 max-w-5xl mx-auto">
          {achievements.map((entry, i) => {
            const imgSrc = certImages[entry.image] ?? entry.image
            const Icon = entry.category === 'Certification' ? Shield : Star

            return (
              <motion.div
                key={entry.id}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.1 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="relative flex flex-col rounded-2xl border border-gray-200 dark:border-gray-700 hover:border-gray-400 dark:hover:border-gray-500 bg-white dark:bg-dark-custom overflow-hidden transition-all duration-300 hover:shadow-2xl dark:hover:shadow-black/40"
              >
                {/* Certificate thumbnail — compact, framed */}
                <div
                  className="relative mx-4 mt-4 mb-0 rounded-xl overflow-hidden cursor-pointer border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 group/img"
                  style={{ aspectRatio: '2/1' }}
                  onClick={() => setLightbox(entry)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={e => e.key === 'Enter' && setLightbox(entry)}
                  aria-label={`Preview ${entry.title}`}
                >
                  <img
                    src={imgSrc}
                    alt={entry.title}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover/img:scale-105"
                  />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover/img:bg-black/50 transition-all duration-300 flex items-center justify-center">
                    <span className="opacity-0 group-hover/img:opacity-100 transition-all duration-300 text-white text-xs font-semibold tracking-wide flex items-center gap-1.5">
                      <ExternalLink size={13} /> Click to preview
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-col flex-1 p-4 pt-3">
                  {/* Category + icon */}
                  <div className="mb-2">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-semibold rounded-full border border-gray-200 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300">
                      <Icon size={10} />
                      {entry.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-sm font-bold text-gray-900 dark:text-white leading-snug mb-1">
                    {entry.title}
                  </h3>

                  {/* Org + date */}
                  <p className="text-xs text-gray-500 dark:text-gray-400 mb-3">
                    {entry.organization} · {entry.issueDate}
                  </p>

                  {/* Skills */}
                  {entry.skills?.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mt-auto pt-3 border-t border-gray-100 dark:border-gray-800">
                      {entry.skills.slice(0, 4).map(skill => (
                        <span
                          key={skill}
                          className="px-2 py-0.5 text-xs rounded-md bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {/* Verification link, for certs with a public badge */}
                {entry.verifyUrl && (
                  <a
                    href={entry.verifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Verify ${entry.title} on Credly`}
                    className="mx-4 mb-2 mt-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-semibold bg-gray-900 text-white dark:bg-white dark:text-gray-900 hover:opacity-90 transition-opacity"
                  >
                    <BadgeCheck size={13} />
                    Verify on Credly
                  </a>
                )}

                {/* View button — bottom action */}
                <a
                  href={entry.driveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${entry.title} certificate`}
                  className="mx-4 mb-4 mt-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-semibold text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white transition-all duration-200"
                >
                  <ExternalLink size={13} />
                  View Certificate
                </a>
              </motion.div>
            )
          })}
        </div>
      </motion.div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-black/85 backdrop-blur-md"
            onClick={() => setLightbox(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 16 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 16 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="relative w-full max-w-2xl"
              role="dialog"
              aria-modal="true"
              aria-label={lightbox.title}
              onClick={e => e.stopPropagation()}
            >
              {/* Close */}
              <button
                autoFocus
                onClick={() => setLightbox(null)}
                aria-label="Close preview"
                className="absolute -top-3 -right-3 z-10 w-8 h-8 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors shadow-xl"
              >
                <X size={14} />
              </button>

              {/* Image */}
              <div className="rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                <img
                  src={certImages[lightbox.image] ?? lightbox.image}
                  alt={lightbox.title}
                  className="w-full block"
                />
              </div>

              {/* Info strip */}
              <div className="mt-4 flex items-center justify-between flex-wrap gap-3 px-1">
                <div>
                  <p className="text-white font-semibold text-sm leading-snug">{lightbox.title}</p>
                  <p className="text-gray-400 text-xs mt-0.5">{lightbox.organization} · {lightbox.issueDate}</p>
                </div>
                <a
                  href={lightbox.driveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white text-gray-900 text-sm font-semibold hover:bg-gray-100 transition-colors shadow"
                >
                  <ExternalLink size={13} />
                  Open Full
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default Achievements

import { useRef, useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react'
import { fadeIn, staggerContainer } from '../utils/motionVariants'
import { achievements } from '../Data/mockData'

// Import certificate images so Vite resolves the base path correctly
import certServiceNowCAD from '../assets/certificates/cert-servicenow-cad.jpg'
import certServiceNowCSA from '../assets/certificates/cert-servicenow-csa.jpg'
import certAWSGenAI from '../assets/certificates/cert-aws-genai.jpg'

const certImages = {
  'cert-servicenow-cad.jpg': certServiceNowCAD,
  'cert-servicenow-csa.jpg': certServiceNowCSA,
  'cert-aws-genai.jpg': certAWSGenAI,
}

const Achievements = () => {
  const scrollRef = useRef(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const updateScrollState = () => {
    const el = scrollRef.current
    if (!el) return
    setCanScrollLeft(el.scrollLeft > 0)
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 1)
  }

  useEffect(() => {
    updateScrollState()
  }, [])

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return

    const handleWheel = (e) => {
      e.preventDefault()
      el.scrollLeft += e.deltaY
      updateScrollState()
    }

    el.addEventListener('wheel', handleWheel, { passive: false })
    return () => el.removeEventListener('wheel', handleWheel)
  }, [])

  const scroll = (direction) => {
    const el = scrollRef.current
    if (!el) return
    const cardWidth = el.children[0]?.offsetWidth + 24 || 320
    el.scrollBy({ left: direction === 'next' ? cardWidth : -cardWidth, behavior: 'smooth' })
    setTimeout(updateScrollState, 400)
  }

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowRight' && canScrollRight) {
      e.preventDefault()
      scroll('next')
    } else if (e.key === 'ArrowLeft' && canScrollLeft) {
      e.preventDefault()
      scroll('prev')
    }
  }

  if (!achievements || achievements.length === 0) return null

  return (
    <section id="achievements" className="section-padding bg-white dark:bg-dark-custom">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="container-custom"
      >
        {/* Heading row with Prev/Next buttons */}
        <motion.div variants={fadeIn} className="flex items-start justify-between mb-10 px-4 flex-wrap gap-4">
          <div>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl text-gray-900 dark:text-white mb-3 tracking-tight">
              Achievements & <span>Certifications</span>
            </h2>
            <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-2xl font-light">
              Certifications, awards, and milestones from my learning journey.
            </p>
          </div>
          <div className="flex items-center gap-2 mt-2">
            <button
              onClick={() => scroll('prev')}
              disabled={!canScrollLeft}
              aria-label="Previous"
              className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-200 
                ${canScrollLeft
                  ? 'border-gray-200 dark:border-gray-700 bg-white dark:bg-dark-custom text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 hover:shadow-md'
                  : 'border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 text-gray-300 dark:text-gray-700 cursor-not-allowed opacity-50'
                }`}
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={() => scroll('next')}
              disabled={!canScrollRight}
              aria-label="Next"
              className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-200 
                ${canScrollRight
                  ? 'border-gray-200 dark:border-gray-700 bg-white dark:bg-dark-custom text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 hover:shadow-md'
                  : 'border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 text-gray-300 dark:text-gray-700 cursor-not-allowed opacity-50'
                }`}
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </motion.div>

        {/* Carousel */}
        <motion.div variants={fadeIn} className="px-4">
          <div
            ref={scrollRef}
            onScroll={updateScrollState}
            onKeyDown={handleKeyDown}
            tabIndex={0}
            role="region"
            aria-label="Achievements and Certifications carousel"
            className="achievements-scroll flex gap-6 overflow-x-auto pb-6 focus:outline-none"
            style={{
              scrollSnapType: 'x mandatory',
              scrollBehavior: 'smooth',
              msOverflowStyle: 'none',
              scrollbarWidth: 'none',
            }}
          >
            {achievements.map((entry) => (
              <motion.div
                key={entry.id}
                whileHover={{ scale: 1.01, y: -4 }}
                className="flex-shrink-0 w-72 rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-dark-custom overflow-hidden transition-shadow duration-300 hover:shadow-xl group"
                style={{ scrollSnapAlign: 'start' }}
              >
                {/* Certificate image — full width, natural aspect ratio */}
                {entry.image && (
                  <a
                    href={entry.driveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${entry.title} certificate`}
                    className="block relative overflow-hidden"
                  >
                    <img
                      src={certImages[entry.image] ?? entry.image}
                      alt={entry.title}
                      className="w-full object-contain bg-gray-50 dark:bg-gray-900 transition-transform duration-500 group-hover:scale-[1.02]"
                    />
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center gap-2">
                        <ExternalLink size={28} className="text-white drop-shadow-lg" />
                        <span className="text-white text-sm font-semibold tracking-wide drop-shadow-lg">View Certificate</span>
                      </div>
                    </div>
                  </a>
                )}

                {/* Card footer */}
                <div className="px-4 py-3 flex items-start justify-between gap-3">
                  <div className="min-w-0">
                    <h3 className="text-xs font-bold text-gray-900 dark:text-white leading-snug truncate">
                      {entry.title}
                    </h3>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5 truncate">
                      {entry.organization} · {entry.issueDate}
                    </p>
                  </div>
                  <span className="flex-shrink-0 px-2 py-0.5 text-xs font-medium rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-gray-600">
                    {entry.category}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Achievements

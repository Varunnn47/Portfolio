import { useEffect, useState, useCallback } from 'react'
import { motion } from 'framer-motion'
import { fadeIn, staggerContainer } from '../utils/motionVariants'
import { Github, RefreshCw } from 'lucide-react'

const GITHUB_USERNAME = 'Varunnn47'
const CURRENT_YEAR = new Date().getFullYear()
const YEARS_TO_SHOW = [CURRENT_YEAR, CURRENT_YEAR - 1]
const CELL_STEP = 14 // 12px cell + 2px gap

// Contribution level → Tailwind bg color (dark-mode friendly)
const LEVEL_COLORS = [
  'bg-gray-100 dark:bg-gray-800',          // 0 — empty
  'bg-green-200 dark:bg-green-900',         // 1 — low
  'bg-green-400 dark:bg-green-700',         // 2 — medium
  'bg-green-500 dark:bg-green-500',         // 3 — high
  'bg-green-600 dark:bg-green-400',         // 4 — very high
]

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

/**
 * Groups flat day array into weeks (columns of 7 days, Sun→Sat).
 * Returns array of weeks, each week is array of day objects (or null for padding).
 * Day strings parse as UTC midnight, so all date reads here use UTC to stay correct in every timezone.
 */
function groupIntoWeeks(days) {
  if (!days || days.length === 0) return []

  const weeks = []
  let currentWeek = []

  // Pad the start so the first day lines up to its weekday (0=Sun)
  const firstDayOfWeek = new Date(days[0].date).getUTCDay()
  for (let i = 0; i < firstDayOfWeek; i++) {
    currentWeek.push(null)
  }

  for (const day of days) {
    currentWeek.push(day)
    if (currentWeek.length === 7) {
      weeks.push(currentWeek)
      currentWeek = []
    }
  }

  // Pad the last week
  if (currentWeek.length > 0) {
    while (currentWeek.length < 7) currentWeek.push(null)
    weeks.push(currentWeek)
  }

  return weeks
}

/**
 * Derive month label positions from the weeks array.
 * Returns array of { label, colIndex }.
 */
function getMonthLabels(weeks) {
  const labels = []
  let lastMonth = -1

  weeks.forEach((week, colIdx) => {
    const firstReal = week.find(d => d !== null)
    if (!firstReal) return
    const month = new Date(firstReal.date).getUTCMonth()
    if (month !== lastMonth) {
      labels.push({ label: MONTHS[month], colIndex: colIdx })
      lastMonth = month
    }
  })

  return labels
}

const WEEKDAY_LABELS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

const GitHubContributions = () => {
  const [selectedYear, setSelectedYear] = useState(YEARS_TO_SHOW[0])
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [tooltip, setTooltip] = useState(null) // { text, x, y }

  const fetchContributions = useCallback(async (year) => {
    setLoading(true)
    setError(null)
    try {
      const res = await fetch(
        `https://github-contributions-api.jogruber.de/v4/${GITHUB_USERNAME}?y=${year}`
      )
      if (!res.ok) throw new Error(`HTTP ${res.status}`)
      const json = await res.json()
      setData(json)
    } catch (err) {
      setError('Could not load contribution data. GitHub API may be unavailable.')
      console.error(err)
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    fetchContributions(selectedYear)
  }, [selectedYear, fetchContributions])

  const weeks = data ? groupIntoWeeks(data.contributions) : []
  const monthLabels = getMonthLabels(weeks)
  const totalContributions = data?.total?.[selectedYear] ?? 0

  return (
    <section id="contributions" className="section-padding bg-gray-50 dark:bg-[#111111]">
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
            GitHub Contributions
          </h2>
          <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto font-light">
            My public GitHub activity, by year.
          </p>
        </motion.div>

        {/* Card */}
        <motion.div
          variants={fadeIn}
          className="max-w-5xl mx-auto px-4"
        >
          <div className="rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-dark-custom p-4 md:p-6 shadow-sm">

            {/* Card header */}
            <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 flex items-center justify-center">
                  <Github size={20} className="text-gray-700 dark:text-gray-300" />
                </div>
                <div>
                  {loading ? (
                    <div className="h-5 w-40 rounded bg-gray-200 dark:bg-gray-700 animate-pulse" />
                  ) : (
                    <p className="text-sm font-semibold text-gray-900 dark:text-white">
                      {totalContributions.toLocaleString()} contributions in {selectedYear}
                    </p>
                  )}
                  <a
                    href={`https://github.com/${GITHUB_USERNAME}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors"
                  >
                    @{GITHUB_USERNAME}
                  </a>
                </div>
              </div>

              {/* Year selector */}
              <div className="flex items-center gap-2">
                {YEARS_TO_SHOW.map(y => (
                  <button
                    key={y}
                    onClick={() => setSelectedYear(y)}
                    className={`px-4 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                      selectedYear === y
                        ? 'bg-gray-900 dark:bg-white text-white dark:text-gray-900'
                        : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
                    }`}
                  >
                    {y}
                  </button>
                ))}
                {error && (
                  <button
                    onClick={() => fetchContributions(selectedYear)}
                    className="p-1.5 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                    title="Retry"
                  >
                    <RefreshCw size={14} />
                  </button>
                )}
              </div>
            </div>

            {/* Heatmap */}
            {error ? (
              <div className="flex items-center justify-center py-12 text-gray-500 dark:text-gray-400 text-sm">
                {error}
              </div>
            ) : loading ? (
              <HeatmapSkeleton />
            ) : (
              <div className="relative overflow-x-auto">
                {/* Tooltip */}
                {tooltip && (
                  <div
                    className="fixed z-50 pointer-events-none px-2.5 py-1.5 rounded-lg bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 text-xs font-medium shadow-lg whitespace-nowrap"
                    style={{ left: tooltip.x + 12, top: tooltip.y - 36 }}
                  >
                    {tooltip.text}
                  </div>
                )}

                <div className="w-fit mx-auto">
                  {/* Month labels, positioned over the column each month starts in */}
                  <div className="relative ml-8 mb-1 h-5" style={{ width: weeks.length * CELL_STEP }}>
                    {monthLabels.map(({ label, colIndex }) => (
                      <div
                        key={label + colIndex}
                        className="absolute text-xs text-gray-500 dark:text-gray-400"
                        style={{ left: colIndex * CELL_STEP }}
                      >
                        {label}
                      </div>
                    ))}
                  </div>

                  {/* Grid: weekday labels + columns */}
                  <div className="flex gap-0">
                    {/* Weekday labels — only Mon, Wed, Fri */}
                    <div className="flex flex-col w-8 flex-shrink-0" style={{ gap: 2 }}>
                      {WEEKDAY_LABELS.map((d, i) => (
                        <div
                          key={d}
                          className="text-gray-500 dark:text-gray-400 flex items-center justify-end pr-1"
                          style={{ height: 12, fontSize: 10, visibility: [1, 3, 5].includes(i) ? 'visible' : 'hidden' }}
                        >
                          {d}
                        </div>
                      ))}
                    </div>

                    {/* Weeks (columns) */}
                    <div className="flex" style={{ gap: 2 }}>
                      {weeks.map((week, wIdx) => (
                        <div key={wIdx} className="flex flex-col" style={{ gap: 2 }}>
                          {week.map((day, dIdx) => {
                            if (!day) {
                              return <div key={dIdx} style={{ width: 12, height: 12 }} />
                            }
                            const level = day.level ?? 0
                            return (
                              <div
                                key={day.date}
                                style={{ width: 12, height: 12 }}
                                className={`rounded-sm cursor-pointer transition-opacity duration-100 hover:opacity-80 ${LEVEL_COLORS[level]}`}
                                onMouseEnter={e => {
                                  const rect = e.currentTarget.getBoundingClientRect()
                                  setTooltip({
                                    text: `${day.count} contribution${day.count !== 1 ? 's' : ''} on ${new Date(day.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric', timeZone: 'UTC' })}`,
                                    x: rect.left,
                                    y: rect.top,
                                  })
                                }}
                                onMouseLeave={() => setTooltip(null)}
                              />
                            )
                          })}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Legend */}
                  <div className="flex items-center justify-between mt-4 flex-wrap gap-2">
                    <a
                      href="https://docs.github.com/en/account-and-profile/setting-up-and-managing-your-github-profile/managing-contribution-settings-on-your-profile/why-are-my-contributions-not-showing-up-on-my-profile"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                    >
                      Learn how contributions are counted
                    </a>
                    <div className="flex items-center gap-1.5 text-xs text-gray-400 dark:text-gray-500">
                      <span>Less</span>
                      {LEVEL_COLORS.map((cls, i) => (
                        <div
                          key={i}
                          style={{ width: 12, height: 12 }}
                          className={`rounded-sm ${cls}`}
                        />
                      ))}
                      <span>More</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

/** Skeleton loader while data is fetching */
const HeatmapSkeleton = () => (
  <div className="overflow-x-auto">
    <div className="inline-flex gap-0.5">
      {Array.from({ length: 53 }).map((_, w) => (
        <div key={w} className="flex flex-col gap-0.5">
          {Array.from({ length: 7 }).map((_, d) => (
            <div
              key={d}
              style={{ width: 12, height: 12 }}
              className="rounded-sm bg-gray-200 dark:bg-gray-700 animate-pulse"
            />
          ))}
        </div>
      ))}
    </div>
  </div>
)

export default GitHubContributions

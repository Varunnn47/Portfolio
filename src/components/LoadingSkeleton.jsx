import { motion } from 'framer-motion'

const LoadingSkeleton = ({ className = "" }) => {
  return (
    <motion.div
      className={`bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 rounded ${className}`}
      animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
      transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
      style={{ backgroundSize: '200% 100%' }}
    />
  )
}

export const ProjectSkeleton = () => (
  <div className="card p-6">
    <LoadingSkeleton className="w-full h-48 mb-4" />
    <LoadingSkeleton className="w-3/4 h-6 mb-2" />
    <LoadingSkeleton className="w-full h-4 mb-4" />
    <div className="flex gap-2">
      <LoadingSkeleton className="w-16 h-6" />
      <LoadingSkeleton className="w-20 h-6" />
      <LoadingSkeleton className="w-14 h-6" />
    </div>
  </div>
)

export default LoadingSkeleton
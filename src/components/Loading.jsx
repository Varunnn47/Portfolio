import { motion } from 'framer-motion'

const Loading = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    className="fixed inset-0 bg-white flex items-center justify-center z-50"
  >
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
      className="w-8 h-8 border-2 border-blue-600 border-t-transparent rounded-full"
    />
  </motion.div>
)

export default Loading
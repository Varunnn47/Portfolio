import { motion, AnimatePresence } from 'framer-motion'
import { X, ExternalLink, Github, Calendar, Users, Code } from 'lucide-react'

const ProjectModal = ({ project, isOpen, onClose }) => {
  if (!project) return null

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
          >
            <div className="relative">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover rounded-t-2xl"
              />
              <button
                onClick={onClose}
                className="absolute top-4 right-4 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            <div className="p-8">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">{project.title}</h2>
                  <p className="text-gray-600 text-lg">{project.description}</p>
                </div>
                <div className="flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
                  >
                    <Github size={20} />
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="flex items-center gap-3">
                  <Calendar className="text-blue-600" size={20} />
                  <div>
                    <p className="font-medium">Duration</p>
                    <p className="text-gray-600 text-sm">3 months</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="text-blue-600" size={20} />
                  <div>
                    <p className="font-medium">Team Size</p>
                    <p className="text-gray-600 text-sm">4 developers</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Code className="text-blue-600" size={20} />
                  <div>
                    <p className="font-medium">My Role</p>
                    <p className="text-gray-600 text-sm">Full Stack Developer</p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Challenge</h3>
                  <p className="text-gray-600 leading-relaxed">
                    The main challenge was to create a scalable e-commerce platform that could handle high traffic loads while maintaining excellent user experience and performance.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Solution</h3>
                  <p className="text-gray-600 leading-relaxed">
                    We implemented a microservices architecture using React for the frontend, Node.js for the backend, and MongoDB for data storage. The application was deployed on AWS with auto-scaling capabilities.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Technologies Used</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-blue-50 text-blue-600 rounded-lg text-sm font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Results</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• 40% improvement in page load times</li>
                    <li>• 25% increase in user engagement</li>
                    <li>• Successfully handled 10k+ concurrent users</li>
                    <li>• 99.9% uptime achieved</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default ProjectModal
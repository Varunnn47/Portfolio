import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Github } from 'lucide-react'
import { fadeIn, scaleUp, staggerContainer } from '../utils/motionVariants'
import { projects } from '../Data/mockData'
import ProjectModal from './ProjectModal'
import { ProjectSkeleton } from './LoadingSkeleton'

const Projects = ({ addToast }) => {
  const [filter, setFilter] = useState('All')
  const [selectedProject, setSelectedProject] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [loading, setLoading] = useState(true)
  
  const categories = ['All', 'React', 'JavaScript', 'Python', 'Machine Learning', 'Node.js']
  
  const filteredProjects = projects

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 100)
    return () => clearTimeout(timer)
  }, [])

  const openModal = (project) => {
    setSelectedProject(project)
    setIsModalOpen(true)
    addToast('Opening project details', 'success')
  }
  return (
    <section id="projects" className="section-padding bg-white dark:bg-dark-custom">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="container-custom"
      >
        <motion.div variants={fadeIn} className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl text-gray-900 dark:text-white mb-4">
            Featured <span className="text-black dark:text-white">Projects</span>
          </h2>
          <p className="font-body text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
            A selection of my recent work showcasing expertise in modern web development and design.
          </p>
          

        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {loading ? (
            [...Array(6)].map((_, i) => <ProjectSkeleton key={i} />)
          ) : (
            filteredProjects.map((project, i) => (
            <motion.div
              key={project.id}
              variants={scaleUp}
              custom={i}
              className="relative bg-white dark:bg-dark-custom border border-gray-200 dark:border-gray-700 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 group cursor-pointer"
              whileHover={{ 
                scale: 1.05, 
                y: -10,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
              }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  {project.title}
                </h3>
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-white transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label="View GitHub repository"
                >
                  <Github size={20} />
                </motion.a>
              </div>
              
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-gray-100 dark:bg-dark-custom text-gray-700 dark:text-gray-400 rounded-full text-sm font-medium border dark:border-gray-600"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
            ))
          )}
        </div>
        
        <motion.div variants={fadeIn} className="text-center mt-12">
          <motion.a
            href="https://github.com/Varunnn47"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-6 py-3 bg-white dark:bg-dark-custom border border-gray-200 dark:border-gray-700 rounded-2xl text-gray-900 dark:text-white hover:bg-blue-100 dark:hover:bg-blue-800 hover:shadow-xl transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <Github size={20} />
            View More Projects
          </motion.a>
        </motion.div>
        
        <ProjectModal 
          project={selectedProject}
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      </motion.div>
    </section>
  )
}

export default Projects
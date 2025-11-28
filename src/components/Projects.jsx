import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Github, Eye } from 'lucide-react'
import { fadeIn, scaleUp, staggerContainer } from '../utils/motionVariants'
import { projects } from '../data/mockData'
import ProjectModal from './ProjectModal'
import { ProjectSkeleton } from './LoadingSkeleton'

const Projects = ({ addToast }) => {
  const [filter, setFilter] = useState('All')
  const [selectedProject, setSelectedProject] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [loading, setLoading] = useState(true)
  
  const categories = ['All', 'React', 'Node.js', 'Mobile', 'API']
  
  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(project => project.tags.includes(filter))

  useEffect(() => {
    setTimeout(() => setLoading(false), 1500)
  }, [])

  const openModal = (project) => {
    setSelectedProject(project)
    setIsModalOpen(true)
    addToast('Opening project details', 'success')
  }
  return (
    <section id="projects" className="section-padding bg-white">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="container-custom"
      >
        <motion.div variants={fadeIn} className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl text-gray-900 mb-4">
            Featured <span className="text-black">Projects</span>
          </h2>
          <p className="font-body text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            A selection of my recent work showcasing expertise in modern web development and design.
          </p>
          
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map(category => (
              <motion.button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  filter === category
                    ? 'bg-black text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </div>
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
              className="card group"
            >
              <div className="relative overflow-hidden aspect-video bg-gray-100">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6 gap-4">
                  <motion.button
                    onClick={() => openModal(project)}
                    className="p-3 bg-white rounded-full hover:bg-black hover:text-white transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label="View project details"
                  >
                    <Eye size={20} />
                  </motion.button>
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white rounded-full hover:bg-black hover:text-white transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label="View GitHub repository"
                  >
                    <Github size={20} />
                  </motion.a>
                  <motion.a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white rounded-full hover:bg-black hover:text-white transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label="View live demo"
                  >
                    <ExternalLink size={20} />
                  </motion.a>
                </div>
              </div>

              <div className="p-6">
                <h3 className="font-heading text-xl text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="font-body text-gray-600 mb-4 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-gray-100 text-black rounded-lg text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
            ))
          )}
        </div>
        
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
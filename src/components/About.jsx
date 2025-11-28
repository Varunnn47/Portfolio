import { motion } from 'framer-motion'
import { fadeIn, slideUp, staggerContainer } from '../utils/motionVariants'

const About = () => {
  const skills = [
    { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { name: 'TypeScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
    { name: 'Node.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
    { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
    { name: 'MongoDB', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
    { name: 'AWS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg' },
    { name: 'Docker', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' }
  ]

  const aiTools = [
    { name: 'ChatGPT', logo: 'https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg' },
    { name: 'GitHub Copilot', logo: 'https://github.githubassets.com/images/modules/site/copilot/copilot.png' },
    { name: 'Claude', logo: 'https://claude.ai/images/claude_app_icon.png' },
    { name: 'Midjourney', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
    { name: 'Cursor AI', logo: 'https://cursor.sh/brand/icon.svg' },
    { name: 'V0', logo: 'https://v0.dev/favicon.ico' }
  ]

  return (
    <section id="about" className="section-padding bg-gray-50">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="container-custom"
      >
        <motion.div variants={fadeIn} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
            About <span className="text-black">Me</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-light">
            Full-stack developer passionate about creating exceptional digital experiences.
          </p>
        </motion.div>

        <motion.div variants={slideUp} className="max-w-6xl mx-auto mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="flex justify-center">
              <div className="w-48 h-48 rounded-full bg-gradient-to-br from-black to-gray-600 p-1">
                <div className="w-full h-full rounded-full bg-gray-100 flex items-center justify-center">
                  <div className="text-4xl">👨💻</div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 tracking-tight">
                My Journey
              </h3>
              <div className="space-y-4 text-base leading-relaxed text-gray-600">
                <p className="font-light">
                  I'm Varun Goud, a passionate full-stack developer with 5+ years of experience building scalable web applications. I love turning complex problems into simple, beautiful solutions.
                </p>
                <p className="font-light">
                  My expertise spans modern JavaScript frameworks, backend technologies, and cloud platforms. I'm always eager to learn new technologies and best practices.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="space-y-12">
          <motion.div variants={fadeIn} className="card p-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center tracking-tight">
              Technical Skills
            </h3>
            <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {skills.map((skill, i) => (
                <motion.div
                  key={skill.name}
                  variants={fadeIn}
                  custom={i}
                  className="flex flex-col items-center p-3 rounded-xl bg-white hover:bg-gray-50 transition-all duration-300 group shadow-sm hover:shadow-lg border border-gray-100"
                  whileHover={{ scale: 1.05, y: -3 }}
                >
                  <div className="w-8 h-8 mb-2 group-hover:scale-110 transition-transform">
                    <img src={skill.logo} alt={skill.name} className="w-full h-full object-contain" />
                  </div>
                  <span className="font-medium text-gray-900 text-xs text-center tracking-wide">
                    {skill.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div variants={fadeIn} custom={1} className="card p-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center tracking-tight">
              AI Tools
            </h3>
            <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {aiTools.map((tool, i) => (
                <motion.div
                  key={tool.name}
                  variants={fadeIn}
                  custom={i}
                  className="flex flex-col items-center p-3 rounded-xl bg-white hover:bg-gray-50 transition-all duration-300 group shadow-sm hover:shadow-lg border border-gray-100"
                  whileHover={{ scale: 1.05, y: -3 }}
                >
                  <div className="w-8 h-8 mb-2 group-hover:scale-110 transition-transform">
                    <img src={tool.logo} alt={tool.name} className="w-full h-full object-contain rounded" />
                  </div>
                  <span className="font-medium text-gray-900 text-xs text-center tracking-wide">
                    {tool.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

export default About
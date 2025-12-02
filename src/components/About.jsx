import { motion } from 'framer-motion'
import { fadeIn, slideUp, staggerContainer } from '../utils/motionVariants'

const About = () => {
  const languages = [
    { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { name: 'TypeScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
    { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
    { name: 'Java', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
    { name: 'C++', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg' },
    { name: 'HTML5', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
    { name: 'CSS3', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
  ]

  const environments = [
    { name: 'Node.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
    { name: 'Jupyter', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg' },
    { name: 'VS Code', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
    { name: 'Git', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
  ]

  const frontendSkills = [
    { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'Tailwind CSS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
    { name: 'Bootstrap', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg' },
  ]

  const backendSkills = [
    { name: 'Express.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
    { name: 'MongoDB', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
    { name: 'MySQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
  ]

  const toolsSkills = [
    { name: 'GitHub', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
    { name: 'Vercel', logo: 'https://assets.vercel.com/image/upload/v1662130559/nextjs/Icon_light_background.png' },
    { name: 'Firebase', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg' },
    { name: 'Postman', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg' },
  ]

 const aiTools = [
    { name: 'ChatGPT', logo: 'https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg' },
    { name: 'GitHub Copilot', logo: 'https://github.githubassets.com/images/modules/site/copilot/copilot.png' },
    { name: 'Claude', logo: 'https://claude.ai/images/claude_app_icon.png' },
    { name: 'Figma', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
    { name: 'Cursor AI', logo: 'https://cursor.sh/brand/icon.svg' },
  ]

  return (
    <section id="about" className="section-padding bg-white dark:bg-dark-custom">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="container-custom"
      >
        <motion.div variants={fadeIn} className="text-center mb-12 md:mb-16 px-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight">
            About <span className="text-black dark:text-white">Me</span>
          </h2>
          <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto font-light">
            Full-stack and data science student passionate about modern web applications and machine learning.
          </p>
        </motion.div>

        <motion.div variants={slideUp} className="max-w-4xl mx-auto mb-12 md:mb-16 text-left px-4">
          <div className="space-y-4 md:space-y-6 text-base md:text-lg leading-relaxed text-gray-600 dark:text-gray-300">
            <p className="font-light">
              I'm a passionate full-stack developer and data science enthusiast with a strong foundation in modern web technologies and machine learning. I love creating innovative solutions that bridge the gap between user experience and data-driven insights.
            </p>
            <p className="font-light">
              My journey in technology started with curiosity about how things work, which led me to explore various programming languages and frameworks. I enjoy building scalable applications, analyzing complex datasets, and constantly learning new technologies to stay at the forefront of innovation.
            </p>
            <p className="font-light">
              When I'm not coding, you'll find me exploring the latest tech trends, contributing to open-source projects, or working on personal projects that challenge my skills and creativity.
            </p>
          </div>
        </motion.div>

        <motion.div variants={fadeIn} className="text-center mb-12 md:mb-16 px-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight">
            Tech <span className="text-black dark:text-white">Stack</span>
          </h2>
          <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto font-light">
            Technologies and tools I work with to build innovative solutions.
          </p>
        </motion.div>

        <div className="space-y-8 md:space-y-12 px-4">
          <motion.div variants={fadeIn} className="rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 p-4 md:p-8 bg-white dark:bg-dark-custom border border-gray-100 dark:border-gray-600">
            <h3 className="text-xl md:text-2xl font-bold mb-6 md:mb-8 text-center tracking-tight text-gray-900 dark:text-white">
              Languages
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3 md:gap-6">
              {languages.map((skill, i) => (
                <motion.div
                  key={skill.name}
                  variants={fadeIn}
                  custom={i}
                  className="flex flex-col items-center p-2 md:p-4 rounded-xl transition-all duration-300 group shadow-sm hover:shadow-lg bg-white dark:bg-dark-custom hover:bg-gray-50 dark:hover:bg-gray-700 border border-gray-100 dark:border-gray-600"
                  whileHover={{ scale: 1.05, y: -3 }}
                >
                  <div className="w-8 h-8 md:w-12 md:h-12 mb-2 md:mb-3 group-hover:scale-110 transition-transform">
                    <img src={skill.logo} alt={skill.name} className="w-full h-full object-contain" />
                  </div>
                  <span className="font-medium text-xs md:text-sm text-center tracking-wide text-gray-900 dark:text-white">
                    {skill.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div variants={fadeIn} custom={1} className="rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 p-4 md:p-8 bg-white dark:bg-dark-custom border border-gray-100 dark:border-gray-600">
            <h3 className="text-xl md:text-2xl font-bold mb-6 md:mb-8 text-center tracking-tight text-gray-900 dark:text-white">
              Environments
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6">
              {environments.map((skill, i) => (
                <motion.div
                  key={skill.name}
                  variants={fadeIn}
                  custom={i}
                  className="flex flex-col items-center p-4 rounded-xl transition-all duration-300 group shadow-sm hover:shadow-lg bg-white dark:bg-dark-custom hover:bg-gray-50 dark:hover:bg-gray-700 border border-gray-100 dark:border-gray-600"
                  whileHover={{ scale: 1.05, y: -3 }}
                >
                  <div className="w-12 h-12 mb-3 group-hover:scale-110 transition-transform">
                    <img src={skill.logo} alt={skill.name} className="w-full h-full object-contain" />
                  </div>
                  <span className="font-medium text-sm text-center tracking-wide text-gray-900 dark:text-white">
                    {skill.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div variants={fadeIn} custom={2} className="rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 p-4 md:p-8 bg-white dark:bg-dark-custom border border-gray-100 dark:border-gray-600">
            <h3 className="text-xl md:text-2xl font-bold mb-6 md:mb-8 text-center tracking-tight text-gray-900 dark:text-white">
              Frontend Development
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 md:gap-6">
              {frontendSkills.map((skill, i) => (
                <motion.div
                  key={skill.name}
                  variants={fadeIn}
                  custom={i}
                  className="flex flex-col items-center p-4 rounded-xl bg-white dark:bg-dark-custom hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300 group shadow-sm hover:shadow-lg border border-gray-100 dark:border-gray-600"
                  whileHover={{ scale: 1.05, y: -3 }}
                >
                  <div className="w-12 h-12 mb-3 group-hover:scale-110 transition-transform">
                    <img src={skill.logo} alt={skill.name} className="w-full h-full object-contain" />
                  </div>
                  <span className="font-medium text-gray-900 dark:text-white text-sm text-center tracking-wide">
                    {skill.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div variants={fadeIn} custom={3} className="rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 p-4 md:p-8 bg-white dark:bg-dark-custom border border-gray-100 dark:border-gray-600">
            <h3 className="text-xl md:text-2xl font-bold mb-6 md:mb-8 text-center tracking-tight text-gray-900 dark:text-white">
              Backend Development
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 md:gap-6">
              {backendSkills.map((skill, i) => (
                <motion.div
                  key={skill.name}
                  variants={fadeIn}
                  custom={i}
                  className="flex flex-col items-center p-4 rounded-xl bg-white dark:bg-dark-custom hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300 group shadow-sm hover:shadow-lg border border-gray-100 dark:border-gray-600"
                  whileHover={{ scale: 1.05, y: -3 }}
                >
                  <div className="w-12 h-12 mb-3 group-hover:scale-110 transition-transform">
                    <img src={skill.logo} alt={skill.name} className="w-full h-full object-contain" />
                  </div>
                  <span className="font-medium text-gray-900 dark:text-white text-sm text-center tracking-wide">
                    {skill.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div variants={fadeIn} custom={4} className="rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 p-4 md:p-8 bg-white dark:bg-dark-custom border border-gray-100 dark:border-gray-600">
            <h3 className="text-xl md:text-2xl font-bold mb-6 md:mb-8 text-center tracking-tight text-gray-900 dark:text-white">
              Tools & Technologies
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6">
              {toolsSkills.map((skill, i) => (
                <motion.div
                  key={skill.name}
                  variants={fadeIn}
                  custom={i}
                  className="flex flex-col items-center p-4 rounded-xl bg-white dark:bg-dark-custom hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300 group shadow-sm hover:shadow-lg border border-gray-100 dark:border-gray-600"
                  whileHover={{ scale: 1.05, y: -3 }}
                >
                  <div className="w-12 h-12 mb-3 group-hover:scale-110 transition-transform">
                    <img src={skill.logo} alt={skill.name} className="w-full h-full object-contain" />
                  </div>
                  <span className="font-medium text-gray-900 dark:text-white text-sm text-center tracking-wide">
                    {skill.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div variants={fadeIn} custom={5} className="rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 p-4 md:p-8 bg-white dark:bg-dark-custom border border-gray-100 dark:border-gray-600">
            <h3 className="text-xl md:text-2xl font-bold mb-6 md:mb-8 text-center tracking-tight text-gray-900 dark:text-white">
              AI Tools
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
              {aiTools.map((tool, i) => (
                <motion.div
                  key={tool.name}
                  variants={fadeIn}
                  custom={i}
                  className="flex flex-col items-center p-4 rounded-xl bg-white dark:bg-dark-custom hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300 group shadow-sm hover:shadow-lg border border-gray-100 dark:border-gray-600"
                  whileHover={{ scale: 1.05, y: -3 }}
                >
                  <div className="w-12 h-12 mb-3 group-hover:scale-110 transition-transform">
                    <img src={tool.logo} alt={tool.name} className="w-full h-full object-contain rounded" />
                  </div>
                  <span className="font-medium text-gray-900 dark:text-white text-sm text-center tracking-wide">
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
const AboutSimple = () => {
  return (
    <section id="about" className="py-16 bg-white dark:bg-dark-custom">
      <div className="max-w-6xl mx-auto px-4">
        {/* About Me Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            About <span className="text-black dark:text-white">Me</span>
          </h2>
          <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Full-stack and data science student passionate about modern web applications and machine learning.
          </p>
        </div>

        <div className="max-w-4xl mx-auto mb-12 text-left">
          <div className="space-y-4 text-base md:text-lg leading-relaxed text-gray-600 dark:text-gray-300">
            <p>
              I'm a passionate full-stack developer and data science enthusiast with a strong foundation in modern web technologies and machine learning. I love creating innovative solutions that bridge the gap between user experience and data-driven insights.
            </p>
            <p>
              My journey in technology started with curiosity about how things work, which led me to explore various programming languages and frameworks. I enjoy building scalable applications, analyzing complex datasets, and constantly learning new technologies to stay at the forefront of innovation.
            </p>
            <p>
              When I'm not coding, you'll find me exploring the latest tech trends, contributing to open-source projects, or working on personal projects that challenge my skills and creativity.
            </p>
          </div>
        </div>

        {/* Tech Stack Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Tech <span className="text-black dark:text-white">Stack</span>
          </h2>
          <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Technologies and tools I work with to build innovative solutions.
          </p>
        </div>

        <div className="space-y-8">
          {/* Languages */}
          <div className="bg-white dark:bg-dark-custom border border-gray-100 dark:border-gray-600 rounded-lg p-6">
            <h3 className="text-xl md:text-2xl font-bold mb-6 text-center text-gray-900 dark:text-white">
              Languages
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
              {['JavaScript', 'TypeScript', 'Python', 'Java', 'C++', 'HTML5', 'CSS3'].map((lang) => (
                <div key={lang} className="flex flex-col items-center p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <span className="text-sm font-medium text-gray-900 dark:text-white text-center">
                    {lang}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Frontend */}
          <div className="bg-white dark:bg-dark-custom border border-gray-100 dark:border-gray-600 rounded-lg p-6">
            <h3 className="text-xl md:text-2xl font-bold mb-6 text-center text-gray-900 dark:text-white">
              Frontend Development
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {['React', 'Tailwind CSS', 'Bootstrap'].map((tech) => (
                <div key={tech} className="flex flex-col items-center p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <span className="text-sm font-medium text-gray-900 dark:text-white text-center">
                    {tech}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Backend */}
          <div className="bg-white dark:bg-dark-custom border border-gray-100 dark:border-gray-600 rounded-lg p-6">
            <h3 className="text-xl md:text-2xl font-bold mb-6 text-center text-gray-900 dark:text-white">
              Backend Development
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {['Express.js', 'MongoDB', 'MySQL'].map((tech) => (
                <div key={tech} className="flex flex-col items-center p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <span className="text-sm font-medium text-gray-900 dark:text-white text-center">
                    {tech}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Tools */}
          <div className="bg-white dark:bg-dark-custom border border-gray-100 dark:border-gray-600 rounded-lg p-6">
            <h3 className="text-xl md:text-2xl font-bold mb-6 text-center text-gray-900 dark:text-white">
              Tools & Technologies
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {['GitHub', 'Vercel', 'Firebase', 'Postman'].map((tool) => (
                <div key={tool} className="flex flex-col items-center p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <span className="text-sm font-medium text-gray-900 dark:text-white text-center">
                    {tool}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSimple
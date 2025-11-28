import { motion } from 'framer-motion'
import { Calendar, MapPin } from 'lucide-react'

const Timeline = () => {
  const experiences = [
    {
      title: 'Senior Full Stack Developer',
      company: 'Tech Corp',
      location: 'San Francisco, CA',
      period: '2022 - Present',
      description: 'Leading development of scalable web applications using React, Node.js, and AWS.',
      type: 'work'
    },
    {
      title: 'Full Stack Developer',
      company: 'StartupXYZ',
      location: 'Remote',
      period: '2020 - 2022',
      description: 'Built and maintained multiple client projects using modern web technologies.',
      type: 'work'
    },
    {
      title: 'Computer Science Degree',
      company: 'University of Technology',
      location: 'New York, NY',
      period: '2016 - 2020',
      description: 'Bachelor of Science in Computer Science with focus on software engineering.',
      type: 'education'
    }
  ]

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
            My <span className="text-black">Journey</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-light">
            A timeline of my professional and educational experiences.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-200"></div>
            
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="relative flex items-start mb-12"
              >
                <div className={`w-4 h-4 rounded-full border-4 border-white shadow-md z-10 ${
                  exp.type === 'work' ? 'bg-blue-600' : 'bg-green-600'
                }`}></div>
                
                <div className="ml-8 card p-6 flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                    <h3 className="text-xl font-bold text-gray-900">{exp.title}</h3>
                    <div className="flex items-center gap-1 text-gray-500 text-sm">
                      <Calendar size={14} />
                      {exp.period}
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 mb-3 text-gray-600">
                    <span className="font-medium">{exp.company}</span>
                    <div className="flex items-center gap-1 text-sm">
                      <MapPin size={14} />
                      {exp.location}
                    </div>
                  </div>
                  
                  <p className="text-gray-600 font-light">{exp.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Timeline
import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, MapPin, Phone } from 'lucide-react'
import { fadeIn, slideUp, staggerContainer } from '../utils/motionVariants'
import SolarSystemSocial from './SolarSystemSocial'

const Contact = ({ addToast }) => {
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  
  const validateForm = (formData) => {
    const errors = {}
    const name = formData.get('name')
    const email = formData.get('email')
    const message = formData.get('message')
    
    if (!name?.trim()) errors.name = 'Name is required'
    if (!email?.trim()) {
      errors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errors.email = 'Invalid email format'
    }
    if (!message?.trim()) errors.message = 'Message is required'
    
    return errors
  }
  
  const handleSubmit = async (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const validationErrors = validateForm(formData)
    
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }
    
    setIsSubmitting(true)
    setErrors({})
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      console.log('Form submitted:', Object.fromEntries(formData))
      e.target.reset()
      addToast('Message sent successfully! I\'ll get back to you soon.', 'success')
    } catch (error) {
      console.error('Submission error:', error)
      addToast('Failed to send message. Please try again.', 'error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const info = [
    { icon: Mail, label: 'Email', value: 'hello@portfolia.dev' },
    { icon: Phone, label: 'Phone', value: '+1 (555) 123-4567' },
    { icon: MapPin, label: 'Location', value: 'San Francisco, CA' }
  ]

  return (
    <section id="contact" className="section-padding bg-white">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="container-custom"
      >
        <motion.div variants={fadeIn} className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl text-gray-900 mb-4">
            Get In <span className="text-black">Touch</span>
          </h2>
          <p className="font-body text-lg text-gray-600 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? I'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <motion.div variants={slideUp} className="flex flex-col justify-center">
            <div className="text-center">
              <h3 className="text-5xl font-bold text-gray-900 mb-12 tracking-tight">
                Connect With <span className="text-black">Me</span>
              </h3>
              <div className="flex justify-center">
                <SolarSystemSocial />
              </div>
            </div>
          </motion.div>

          <motion.form onSubmit={handleSubmit} variants={fadeIn} custom={1} className="space-y-6">
            <div>
              <label htmlFor="name" className="block font-medium text-gray-900 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className={`w-full px-4 py-3 rounded-xl border focus:ring-2 outline-none transition-all ${
                  errors.name 
                    ? 'border-red-300 focus:border-red-500 focus:ring-red-100' 
                    : 'border-gray-200 focus:border-black focus:ring-gray-100'
                }`}
                placeholder="Your name"
              />
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
            </div>

            <div>
              <label htmlFor="email" className="block font-medium text-gray-900 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className={`w-full px-4 py-3 rounded-xl border focus:ring-2 outline-none transition-all ${
                  errors.email 
                    ? 'border-red-300 focus:border-red-500 focus:ring-red-100' 
                    : 'border-gray-200 focus:border-black focus:ring-gray-100'
                }`}
                placeholder="your.email@example.com"
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>

            <div>
              <label htmlFor="message" className="block font-medium text-gray-900 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                className={`w-full px-4 py-3 rounded-xl border focus:ring-2 outline-none transition-all resize-none ${
                  errors.message 
                    ? 'border-red-300 focus:border-red-500 focus:ring-red-100' 
                    : 'border-gray-200 focus:border-black focus:ring-gray-100'
                }`}
                placeholder="Tell me about your project..."
              />
              {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
            </div>

            <motion.button
              type="submit"
              disabled={isSubmitting}
              className={`btn-primary w-full ${
                isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
              }`}
              whileHover={!isSubmitting ? { scale: 1.02 } : {}}
              whileTap={!isSubmitting ? { scale: 0.98 } : {}}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </motion.button>
          </motion.form>
        </div>
      </motion.div>
    </section>
  )
}

export default Contact
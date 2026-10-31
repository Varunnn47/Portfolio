import { useState } from 'react'
import { motion } from 'framer-motion'
import { Copy } from 'lucide-react'
import { fadeIn, slideUp, staggerContainer } from '../utils/motionVariants'
import { profile } from '../Data/portfolioData'
import SolarSystemSocial from './SolarSystemSocial'

const inputClass = (hasError) => `w-full px-4 py-3 rounded-xl border bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 focus:ring-2 outline-none transition-all ${
  hasError
    ? 'border-red-300 focus:border-red-500 focus:ring-red-100 dark:focus:ring-red-900'
    : 'border-gray-200 dark:border-gray-600 focus:border-black dark:focus:border-white focus:ring-gray-100 dark:focus:ring-gray-700'
}`

const FORM_ENDPOINT = `https://formsubmit.co/ajax/${profile.email}`

const Contact = ({ addToast }) => {
  const [errors, setErrors] = useState({})
  const [isSending, setIsSending] = useState(false)

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
    const form = e.target
    const formData = new FormData(form)
    const validationErrors = validateForm(formData)
    setErrors(validationErrors)

    if (Object.keys(validationErrors).length > 0) return

    // Bots fill in the hidden field; real visitors never see it
    if (formData.get('_honey')) return

    setIsSending(true)
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: formData.get('name'),
          email: formData.get('email'),
          message: formData.get('message'),
          _subject: `Portfolio Contact: Message from ${formData.get('name')}`,
          _template: 'table',
        }),
      })
      const result = await res.json()
      if (!res.ok || String(result.success) !== 'true') throw new Error(result.message || `HTTP ${res.status}`)

      form.reset()
      addToast('Message sent! I\'ll get back to you soon.', 'success')
    } catch (error) {
      // The form stays filled in so the visitor can copy their message
      console.error('Submission error:', error)
      addToast(`Couldn't send your message. Please email me at ${profile.email}`, 'error')
    } finally {
      setIsSending(false)
    }
  }

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      addToast('Email address copied', 'success')
    } catch {
      addToast(`Couldn't copy. My email is ${profile.email}`, 'error')
    }
  }

  return (
    <section id="contact" className="section-padding bg-white dark:bg-dark-custom">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="container-custom"
      >
        <motion.div variants={fadeIn} className="text-center mb-8 md:mb-10">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-gray-900 dark:text-white mb-4 tracking-tight">
            Get In Touch
          </h2>
          <p className="font-body text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Have a role, project, or collaboration in mind? I'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <motion.div variants={slideUp} className="flex flex-col justify-center items-center">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight text-center">
              Connect With Me
            </h3>
            <SolarSystemSocial />
            <div className="flex items-center justify-center gap-1 mt-3 max-w-full">
              <a
                href={`mailto:${profile.email}`}
                className="text-sm text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white break-all transition-colors"
              >
                {profile.email}
              </a>
              <button
                type="button"
                onClick={copyEmail}
                aria-label="Copy email address"
                className="p-2 rounded-lg flex-shrink-0 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              >
                <Copy size={16} />
              </button>
            </div>
          </motion.div>

          <motion.form onSubmit={handleSubmit} noValidate variants={fadeIn} custom={1} className="space-y-4">
            <div>
              <label htmlFor="name" className="block font-medium text-gray-900 dark:text-white mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? 'name-error' : undefined}
                className={inputClass(errors.name)}
                placeholder="Your name"
              />
              {errors.name && <p id="name-error" className="text-red-500 text-sm mt-1">{errors.name}</p>}
            </div>

            <div>
              <label htmlFor="email" className="block font-medium text-gray-900 dark:text-white mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? 'email-error' : undefined}
                className={inputClass(errors.email)}
                placeholder="your.email@example.com"
              />
              {errors.email && <p id="email-error" className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>

            <div>
              <label htmlFor="message" className="block font-medium text-gray-900 dark:text-white mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                aria-invalid={!!errors.message}
                aria-describedby={errors.message ? 'message-error' : undefined}
                className={`${inputClass(errors.message)} resize-none`}
                placeholder="What would you like to talk about?"
              />
              {errors.message && <p id="message-error" className="text-red-500 text-sm mt-1">{errors.message}</p>}
            </div>

            {/* Honeypot: hidden from visitors, catches spam bots */}
            <input type="text" name="_honey" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />

            <motion.button
              type="submit"
              disabled={isSending}
              className={`btn-primary w-full ${isSending ? 'opacity-50 cursor-not-allowed' : ''}`}
              whileHover={!isSending ? { scale: 1.02 } : {}}
              whileTap={!isSending ? { scale: 0.98 } : {}}
            >
              {isSending ? 'Sending...' : 'Send Message'}
            </motion.button>
          </motion.form>
        </div>
      </motion.div>
    </section>
  )
}

export default Contact

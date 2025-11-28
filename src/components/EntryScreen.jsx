import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const EntryScreen = ({ onEnter }) => {
  const [isLoading, setIsLoading] = useState(false)
  const [greeting, setGreeting] = useState('')
  const [language, setLanguage] = useState('en')
  const [currentSkill, setCurrentSkill] = useState(0)

  const skills = ['⚛️', '🟨', '🔷', '🟢', '🐍', '🍃', '☁️', '🐳']
  
  const translations = {
    en: { welcome: 'Welcome', subtitle: 'To My Portfolio', button: 'Enter Portfolio', quote: '"Code is poetry written in logic"' },
    es: { welcome: 'Bienvenido', subtitle: 'A Mi Portafolio', button: 'Entrar', quote: '"El código es poesía escrita en lógica"' },
    fr: { welcome: 'Bienvenue', subtitle: 'À Mon Portfolio', button: 'Entrer', quote: '"Le code est de la poésie écrite en logique"' }
  }

  useEffect(() => {
    const hour = new Date().getHours()
    if (hour < 12) setGreeting('Good Morning')
    else if (hour < 18) setGreeting('Good Afternoon')
    else setGreeting('Good Evening')

    const skillInterval = setInterval(() => {
      setCurrentSkill(prev => (prev + 1) % skills.length)
    }, 1000)

    const handleKeyPress = (e) => {
      if (e.key === 'Enter') handleEnter()
    }
    window.addEventListener('keydown', handleKeyPress)

    return () => {
      clearInterval(skillInterval)
      window.removeEventListener('keydown', handleKeyPress)
    }
  }, [])

  const handleEnter = async () => {
    setIsLoading(true)
    // Play sound effect
    try {
      const audio = new Audio('data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBSuBzvLZiTYIG2m98OScTgwOUarm7blmGgU7k9n1unEiBC13yO/eizEIHWq+8+OWT')
      audio.play().catch(() => {}) // Ignore if audio fails
    } catch (e) {}
    
    setTimeout(() => {
      onEnter()
    }, 1500)
  }

  const Particles = () => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-gray-400 rounded-full opacity-30"
          animate={{
            x: [0, Math.random() * 100 - 50],
            y: [0, Math.random() * 100 - 50],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        />
      ))}
    </div>
  )

  const TypeWriter = ({ text, delay = 0 }) => {
    const [displayText, setDisplayText] = useState('')
    
    useEffect(() => {
      let i = 0
      const timer = setInterval(() => {
        if (i < text.length) {
          setDisplayText(text.slice(0, i + 1))
          i++
        } else {
          clearInterval(timer)
        }
      }, 100)
      
      return () => clearInterval(timer)
    }, [text])

    return <span>{displayText}</span>
  }

  const t = translations[language]

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.8 }}
      className="fixed inset-0 bg-gradient-to-br from-white via-gray-50 to-gray-100 flex items-center justify-center z-50"
    >
      <Particles />
      
      {/* Language Toggle */}
      <div className="absolute top-6 right-6 flex gap-2">
        {Object.keys(translations).map(lang => (
          <button
            key={lang}
            onClick={() => setLanguage(lang)}
            className={`px-3 py-1 rounded-full text-sm font-medium transition-all ${
              language === lang ? 'bg-black text-white' : 'bg-white text-gray-600 hover:bg-gray-100'
            }`}
          >
            {lang.toUpperCase()}
          </button>
        ))}
      </div>

      <div className="text-center relative">


        {/* Time-based Greeting */}
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-sm text-gray-600 mb-1 font-light"
        >
          {greeting}
        </motion.p>

        {/* Animated Welcome Text with Gradient */}
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-4xl md:text-5xl font-bold mb-3 tracking-tight text-black"
        >
          {[...t.welcome].map((letter, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 + i * 0.1, type: "spring" }}
            >
              {letter}
            </motion.span>
          ))}
        </motion.h1>

        {/* Typing Animation Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="text-lg text-gray-600 mb-4 font-light"
        >
          <TypeWriter text={t.subtitle} delay={1.5} />
        </motion.p>

        {/* Rotating Skills Preview */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="flex justify-center mb-4"
        >
          <motion.div
            key={currentSkill}
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            exit={{ scale: 0, rotate: 180 }}
            className="text-2xl"
          >
            {skills[currentSkill]}
          </motion.div>
        </motion.div>

        {/* Personal Quote */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.2 }}
          className="text-sm text-gray-500 italic mb-6 font-light"
        >
          {t.quote}
        </motion.p>

        {/* Floating Button with Loading */}
        <motion.button
          initial={{ scale: 0 }}
          animate={{ 
            scale: 1,
            y: [0, -5, 0]
          }}
          transition={{ 
            scale: { delay: 2.4, type: "spring" },
            y: { duration: 2, repeat: Infinity, ease: "easeInOut" }
          }}
          onClick={handleEnter}
          disabled={isLoading}
          className="px-6 py-3 bg-black text-white rounded-lg font-semibold text-base hover:shadow-xl transition-all duration-300 disabled:opacity-50"
          whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0, 0, 0, 0.2)" }}
          whileTap={{ scale: 0.95 }}
        >
          <AnimatePresence mode="wait">
            {isLoading ? (
              <motion.div
                key="loading"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex items-center gap-2"
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                />
                Loading...
              </motion.div>
            ) : (
              <motion.span
                key="enter"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                {t.button}
              </motion.span>
            )}
          </AnimatePresence>
        </motion.button>

        {/* Keyboard Hint */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3 }}
          className="text-xs text-gray-400 mt-3"
        >
          Press Enter ⏎
        </motion.p>
      </div>
    </motion.div>
  )
}

export default EntryScreen
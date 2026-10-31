import { MotionConfig } from 'framer-motion'

import Toast from './components/Toast'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import About from './components/About'
import Experience from './components/Experience'
import Achievements from './components/Achievements'
import GitHubContributions from './components/GitHubContributions'

import Contact from './components/Contact'
import Footer from './components/Footer'

import { useToast } from './hooks/useToast'
import { ThemeProvider } from './contexts/ThemeContext'

const App = () => {
  const { toasts, addToast, removeToast } = useToast()

  return (
    <ThemeProvider>
      <MotionConfig reducedMotion="user">
        <div className="min-h-screen bg-white dark:bg-dark-custom transition-colors">

          <Toast toasts={toasts} removeToast={removeToast} />

          <Navbar />
          <main>
            <Hero />
            <About />
            <Experience />
            <Projects />
            <GitHubContributions />
            <Achievements />
            <Contact addToast={addToast} />
          </main>
          <Footer />
        </div>
      </MotionConfig>
    </ThemeProvider>
  )
}

export default App

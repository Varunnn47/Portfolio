import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import EntryScreen from './components/EntryScreen'
import ScrollProgress from './components/ScrollProgress'
import BackToTop from './components/BackToTop'

import Toast from './components/Toast'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import About from './components/About'
import Timeline from './components/Timeline'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { useToast } from './hooks/useToast'

const App = () => {
  const [showEntry, setShowEntry] = useState(true)
  const { toasts, addToast, removeToast } = useToast()

  const handleEnter = () => {
    setShowEntry(false)
    addToast('Welcome to my portfolio!', 'success')
  }

  return (
    <div className="min-h-screen bg-white">
      <Toast toasts={toasts} removeToast={removeToast} />
      
      <AnimatePresence>
        {showEntry && <EntryScreen onEnter={handleEnter} />}
      </AnimatePresence>
      
      {!showEntry && (
        <>
          <ScrollProgress />
          <Navbar />
          <Routes>
            <Route path="/" element={
              <main>
                <Hero />
                <Projects addToast={addToast} />
                <About />
                <Timeline />
                <Contact addToast={addToast} />
              </main>
            } />
          </Routes>
          <Footer />
          <BackToTop />
        </>
      )}
    </div>
  )
}

export default App
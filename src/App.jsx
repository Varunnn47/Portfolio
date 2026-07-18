import { Routes, Route } from 'react-router-dom'

import BackToTop from './components/BackToTop'
import Toast from './components/Toast'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import About from './components/About'
import Experience from './components/Experience'
import Achievements from './components/Achievements'

import Contact from './components/Contact'
import Footer from './components/Footer'

import { useToast } from './hooks/useToast'
import { ThemeProvider } from './contexts/ThemeContext'

const App = () => {
  const { toasts, addToast, removeToast } = useToast()

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-dark-custom transition-colors">

        <Toast toasts={toasts} removeToast={removeToast} />

        <Navbar />
        <Routes>
          <Route path="/" element={
            <main>
              <Hero />
              <About />
              <Experience />
              <Projects />
              <Achievements />
              <Contact addToast={addToast} />
            </main>
          } />
        </Routes>
        <Footer />
        <BackToTop />
      </div>
    </ThemeProvider>
  )
}

export default App
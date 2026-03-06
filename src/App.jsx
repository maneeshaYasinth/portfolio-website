import './App.css'
import { useEffect, useState } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Navbar from './components/Navbar'
import Hero from './pages/Hero'
import Work from './pages/Work'
import Arsenal from './pages/Arsenal'
import Contact from './pages/Contact'
import Achievements from './pages/Achievements'

function App() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme')

    if (savedTheme) {
      return savedTheme === 'dark'
    }

    return window.matchMedia('(prefers-color-scheme: dark)').matches
  })

  useEffect(() => {
    document.body.classList.toggle('dark', isDarkMode)
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light')
  }, [isDarkMode])

  useEffect(() => {
    AOS.init({
      duration: 850,
      easing: 'cubic-bezier(0.22, 1, 0.36, 1)',
      offset: 90,
      once: true,
      disable: () => window.matchMedia('(prefers-reduced-motion: reduce)').matches,
    })
  }, [])

  const toggleDarkMode = () => setIsDarkMode((previous) => !previous)

  return (
    <>
      <Navbar isDarkMode={isDarkMode} onToggleDarkMode={toggleDarkMode} />
      <Hero isDarkMode={isDarkMode} />
      <Work isDarkMode={isDarkMode} />
      <Achievements isDarkMode={isDarkMode} />
      <Arsenal isDarkMode={isDarkMode} />
      <Contact isDarkMode={isDarkMode} />
    </>
  )
}

export default App

import './App.css'
import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './pages/Hero'
import Work from './pages/Work'
import Contact from './pages/Contact'

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

  const toggleDarkMode = () => setIsDarkMode((previous) => !previous)

  return (
    <>
      <Navbar isDarkMode={isDarkMode} onToggleDarkMode={toggleDarkMode} />
      <Hero isDarkMode={isDarkMode} />
      <Work isDarkMode={isDarkMode} />
      <Contact isDarkMode={isDarkMode} />
    </>
  )
}

export default App

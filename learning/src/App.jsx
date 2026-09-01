import { useState } from 'react'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Service from './components/Service'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Home />
      <Skills />
      <Projects />
      <Service />
      <Contact />
      <Footer />
    </>
  )
}

export default App

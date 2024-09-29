import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Navbar from './Navbar';
import Hero from './Hero';
import Services from './Services';
import About from './About';
import Projects from './Projects';
import Testimonials from './Testimonials';
import './styles/App.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar />
      <Hero />
      <Services />
      <About />
      <Projects />
      <Testimonials />
  </StrictMode>,
)

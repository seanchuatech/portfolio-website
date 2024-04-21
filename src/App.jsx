import { useRef } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Footer from './components/Footer '
import Contact from './components/Contact'
import Project from './components/Project'

function App() {
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const contactRef = useRef(null);
  const projectRef = useRef(null);
  

  const handleScrollToSection = (ref) => {
    if (ref.current) {
      console.log("Ref exists, scrolling to Skills");
      ref.current.scrollIntoView({ behavior: "smooth" });
    } else {
      console.log("Ref does not exist, cannot scroll");
    }
  };

  return (
    <>
      <Header 
        heroRef={heroRef}
        aboutRef={aboutRef}
        skillsRef={skillsRef}
        contactRef={contactRef}
        projectRef={projectRef}
        handleScrollToSection={handleScrollToSection}
      />
      <section ref={heroRef}>
        <Hero />
      </section>
      
      <section ref={aboutRef}>
        <About />
      </section>
      <section ref={skillsRef}>
        <Skills />
      </section>
      <section ref={projectRef}>
        <Project />
      </section>
      <section ref={contactRef}>
        <Contact />
      </section>
        
      <Footer />
    </>
  )
}

export default App

import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import Services from "../components/Services"
import Projects from "../components/Projects"
import About from "../components/About"
import WhyUs from "../components/WhyUs"
import Contact from "../components/Contact"
import Footer from "../components/Footer"

const Homepage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Services />
      <Projects />
      <About />
      <WhyUs />
      <Contact />
      <Footer />
    </div>
  )
}

export default Homepage

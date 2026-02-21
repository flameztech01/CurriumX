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
      <section id="home">
        <Hero />
      </section>
      <section id="services">
        <Services />
      </section>
      <section id="our-work">
        <Projects />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="why-us">
        <WhyUs />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <Footer />
    </div>
  )
}

export default Homepage
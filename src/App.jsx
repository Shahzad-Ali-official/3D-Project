
import ProgressBar from "./components/ProgressBar.jsx"
import Header from "./components/Header.jsx"
import HeroSection from "./components/HeroSection.jsx"
import AboutSection from "./components/AboutSection.jsx"
import ExperienceSection from "./components/ExperienceSection.jsx"
import ProjectSection from "./components/ProjectSection.jsx"
import ContactSection from "./components/ContactSection.jsx"
import FooterSection from "./components/FooterSection.jsx"

import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useEffect, useState } from "react"


export default function App() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.refresh();
    return () => {
  ScrollTrigger.getAll().forEach((trigger) => trigger.kill())}
  }, [])

  //State for contact form
  const [contactForm, setContactForm] = useState(false);

  const openContactForm = () => {
    setContactForm(true);
  }
  const closeContactForm = () => {
    setContactForm(false);
  }

  return (
  <div>
    <ProgressBar/>
    <Header openContactForm={openContactForm} contactForm={contactForm} closeContactForm={closeContactForm}/>
    <HeroSection/>
    <AboutSection/>
    <ExperienceSection/>
    <ProjectSection/>
    <ContactSection openContactForm={openContactForm}/>
    <FooterSection/>

  </div>
  )
}

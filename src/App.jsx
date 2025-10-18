
import ProgressBar from "./components/ProgressBar.jsx"
import Header from "./components/Header.jsx"
import HeroSection from "./components/HeroSection.jsx"
import AboutSection from "./components/AboutSection.jsx"
import ProjectSection from "./components/ProjectSection.jsx"
import ContactSection from "./components/ContactSection.jsx"
import FooterSection from "./components/FooterSection.jsx"

import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useEffect } from "react"



export default function App() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.refresh();
    return () => {
  ScrollTrigger.getAll().forEach((trigger) => trigger.kill())}
  }, [])


  return (
  <div>
    <ProgressBar/>
    <Header/>
    <HeroSection/>
    <AboutSection/>
    <ProjectSection/>
    <ContactSection/>
    <FooterSection/>

  </div>
  )
}

import { useRef, useEffect } from "react"
import { gsap }from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
const AboutSection = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    //title anime
    gsap.fromTo(titleRef.current,
        {y:100, opacity:0},
        {y:0, opacity:1, duration: 0.8, scrollTrigger:{
            trigger: sectionRef.current,
            start:"top 40%",
            toggleActions: "play none none reverse",
  }})
  })

  return (
   <section ref={sectionRef} className="relative h-screen bg-gradient-to-b from-black to-[#9a74cf50] py-20">
    <div className="container h-full mx-auto px-4 flex flex-col items-center">
        <h1 ref={titleRef}  className="text-4xl md:text-6xl font-bold sm:mb-16 text-center text-white opacity-0">About Me</h1>
    </div>

   </section>
  )
}

export default AboutSection
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const AboutSection = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const introRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Title animation (fade up)
    gsap.fromTo(
      titleRef.current,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Text slides in from left
    gsap.fromTo(
      introRef.current,
      { x: -100, opacity: 0, filter: "blur(10px)" },
      {
        x: 0,
        opacity: 1,
        filter: "blur(0px)",
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 60%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Image slides in from right
    gsap.fromTo(
      imageRef.current,
      { x: 100, opacity: 0, filter: "blur(10px)" },
      {
        x: 0,
        opacity: 1,
        filter: "blur(0px)",
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 60%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
   <section
  ref={sectionRef}
  className="min-h-screen bg-gradient-to-b from-black to-[#9a74cf50] flex flex-col justify-center relative overflow-visible"
>

      {/* Title */}
      <div className="text-center mb-16">
        <h1
          ref={titleRef}
          className="text-4xl md:text-6xl font-bold text-white opacity-0"
        >
          About Me
        </h1>
      </div>

      {/* Content Row */}
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6 lg:px-24 gap-10">
        {/* Text Section */}
        <h3
          ref={introRef}
          className="text-sm md:text-2xl font-bold text-purple-200 tracking-wider md:max-w-[45rem] opacity-0"
        >
          Hi, I'm <span className="text-violet-400">Shahzad</span>, a Frontend
          Developer focused on speed, polish, and performance. I craft
          responsive, user-friendly web interfaces using modern tools like{" "}
          <span className="text-violet-400">React</span>,{" "}
          <span className="text-violet-400">Tailwind CSS</span>, and{" "}
          <span className="text-violet-400">JavaScript</span>. Whether it's a
          landing page, a full-scale web app, or something in between — I'm all
          about clean code, fast delivery, and seamless user experiences.
        </h3>

        {/* Image Section */}
        <img
          ref={imageRef}
          src="person.png"
          alt="profile-img"
          className="lg:h-[40rem] md:h-[28rem] h-[20rem] mix-blend-lighten opacity-0"
        
        />
      </div>
    </section>
  );
};

export default AboutSection;

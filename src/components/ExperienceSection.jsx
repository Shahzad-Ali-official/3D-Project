import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const experiences = [
  {
    title: "Frontend Developer",
    company: "Tech Solutions Inc.",
    duration: "Jan 2022 - Present",
    description:
      "Leading the development of responsive and performant user interfaces for web applications using React, Tailwind CSS, and Framer Motion. Collaborating with backend teams to integrate APIs and ensure seamless user experiences.",
    align: "left",
  },
  {
    title: "Junior Web Developer",
    company: "Creative Agency",
    duration: "Jun 2020 - Dec 2021",
    description:
      "Assisted in building and maintaining client websites using HTML, CSS, and JavaScript. Gained experience with version control (Git) and worked in an Agile development environment.",
    align: "right",
  },
  {
    title: "Web Development Intern",
    company: "Innovate Startups",
    duration: "Jan 2020 - May 2020",
    description:
      "Supported the development team in various tasks, including debugging, testing, and creating small components. Learned the fundamentals of modern web development practices.",
    align: "left",
  },
];


const ExperienceSection = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const timelineRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Title animation
    gsap.fromTo(
      titleRef.current,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Timeline items animation
    const items = gsap.utils.toArray(".timeline-item");
    items.forEach((item) => {
      gsap.fromTo(
        item,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: item,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="py-20 lg:py-32 bg-gradient-to-b from-[#9a74cf50] to-black text-white"
    >
      <div className="container mx-auto px-6 lg:px-24">
        <h2
          ref={titleRef}
          className="text-4xl md:text-6xl font-bold text-center mb-16 md:mb-24"
        >
          My Experience
        </h2>
        <div ref={timelineRef} className="relative">
          {/* Vertical line */}
          <div className="absolute left-1/2 top-0 h-full w-0.5 bg-violet-400/30 transform -translate-x-1/2"></div>

          {experiences.map((exp, index) => (
            <div key={index} className={`timeline-item mb-12 flex justify-between items-center w-full ${exp.align === 'right' ? 'flex-row-reverse' : ''}`}>
              <div className="w-5/12"></div>
              <div className="z-10 flex items-center justify-center w-8 h-8 bg-violet-600 rounded-full ring-4 ring-violet-900/50 shrink-0"></div>
              <div className="w-5/12 bg-gray-800/50 backdrop-blur-sm rounded-lg shadow-lg p-6 border border-violet-500/30">
                <h3 className="text-xl md:text-2xl font-bold text-violet-300">{exp.title}</h3>
                <p className="text-md font-semibold text-gray-400 mb-2">{exp.company} | {exp.duration}</p>
                <p className="text-gray-300 text-sm md:text-base">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
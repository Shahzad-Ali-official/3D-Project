import {useRef, useEffect} from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FiShare } from 'react-icons/fi';

const ProjectSection = () => {

    //Projects images
const projectImages = [
{
    id:1,
    title:"E-commerce Website",
    imageSrc: "/project-2.png",
},
{
    id:2,
    title:"Portfolio Showcase",
    imageSrc: "/project-3.png",
},
{
    id:3,
    title:"Interactive 3D Game",
    imageSrc: "/project-4.png",
}]




  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const titleLineRef = useRef(null);
  const triggerRef = useRef(null);
  const horizontalRef = useRef(null);


  useEffect(() => { 
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Title animation
      gsap.fromTo(
        titleRef.current,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Title line animation
      gsap.fromTo(
        titleLineRef.current,
        { width: "0%", opacity: 0 },
        {
          width: "100%",
          opacity: 1,
          duration: 1.5,
          ease: "power3.inOut",
          delay: 0.3,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Horizontal scroll container animation
      gsap.fromTo(
        triggerRef.current,
        { y: 100, rotationX: 20, opacity: 0 },
        {
          y: 0,
          rotationX: 0,
          opacity: 1,
          ease: "power2.out",
          delay: 0.2,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Horizontal scroll animation
      const panels = gsap.utils.toArray(".panel");
      const horizontalScroll = gsap.to(panels, {
        xPercent: -100 * (panels.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: triggerRef.current,
          pin: true,
          scrub: 1,
          snap: {
            snapTo: 1 / (panels.length - 1),
            duration: { min: 0.2, max: 0.3 },
            delay: 0.1,
          },
          end: () => `+=${horizontalRef.current.offsetWidth}`,
        },
      });

      // Animation for each panel's content
      panels.forEach((panel) => {
        const image = panel.querySelector(".project-image");
        const imageTitle = panel.querySelector(".project-title");

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: panel,
            containerAnimation: horizontalScroll,
            start: "left right",
            end: "right left",
            scrub: true,
          },
        });

        tl.fromTo(image, { scale: 0.8, rotate: -5 }, { scale: 1, rotate: 0, duration: 0.5, ease: "power2.out" });
        if (imageTitle) {
          tl.fromTo(imageTitle, { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 0.3 }, "<0.2");
        }
      });
    }, sectionRef); // scope the context to the section

    return () => ctx.revert(); // Cleanup function
  }, []);
  
  return (
    <section ref={sectionRef} id="projects" className="relative py-20 bg-gradient-to-b from-[#1d0533] to-white overflow-hidden" style={{ paddingBottom: '40vw' }}>
        {/* section title */}
        <div className='container mx-auto px-4 mb-16 relative z-10'>
            <h2 ref={titleRef} className='text-4xl md:text-5xl Lg:text-6xl font-bold text-white text-center mb-4 opacity-0'>
                Featured Projects 
            </h2>
              <div ref={titleLineRef}  className='w-0 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto opacity-0'>

              </div>

        </div>
{/* horizontAL scroll */}
        <div ref={triggerRef}>
            <div ref={horizontalRef}  className='horizontal-section flex w-[250vw]'>
              {projectImages.map((project) => (
                 <div key={project.id} className='panel w-screen h-full flex items-center justify-center px-4 sm:px-8 md:px-16'>
                    <div className='relative w-full max-w-5xl aspect-video bg-transparent rounded-lg overflow-hidden p-4'>
                        <img src={project.imageSrc} alt={project.title} className='project-image w-full h-full object-cover rounded-md'/>
                        <h3 className='project-title absolute bottom-6 left-6 flex items-center gap-3 md:text-3xl text-lg font-bold text-white bg-black bg-opacity-50 p-2 rounded-md z-10'>
                            {project.title}<FiShare className="hidden md:block"/></h3>

                    </div>
                 </div>
              ))}
            </div>

        </div>

    </section>
  )
}

export default ProjectSection
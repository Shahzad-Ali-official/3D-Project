import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const ContactSection = () => {
  const circleRef = useRef(null);
  const sectionRef = useRef(null);
  const initialTextRef = useRef(null);
  const finalTextRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Clean up previous triggers if any
    const cleanup = () => {
      ScrollTrigger.getAll().forEach((st) => {
        if (st.vars.trigger === sectionRef.current) st.kill(true);
      });
    };
    cleanup();

    // Initial visual states
    gsap.set(circleRef.current, { scale: 1, backgroundColor: "white" });
    gsap.set(initialTextRef.current, { opacity: 1 });
    gsap.set(finalTextRef.current, { opacity: 0 });

    // Smooth scroll + snapping effect
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "+=250%",
        pin: true,
        scrub: 1.2,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        snap: {
          snapTo: [0, 0.5, 1], // snap points
          duration: { min: 0.2, max: 0.6 },
          ease: "power1.inOut",
        },
      },
    });

    // Stage 1 → Stage 2
    tl.to(
      circleRef.current,
      {
        scale: 5,
        backgroundColor: "#9333EA",
        ease: "power3.inOut",
        duration: 0.7,
      },
      0
    );

    tl.to(
      initialTextRef.current,
      {
        opacity: 0,
        ease: "power1.out",
        duration: 0.3,
      },
      0.1
    );

    // Stage 2 → Stage 3
    tl.to(
      circleRef.current,
      {
        scale: 15.5, // slightly smaller final size for desktop fit
        backgroundColor: "#E9D5FF",
        boxShadow: "0 0 80px 30px rgba(233, 213, 255, 0.35)",
        ease: "power2.inOut",
        duration: 0.9,
      },
      0.6
    );

    tl.to(
      finalTextRef.current,
      {
        opacity: 1,
        ease: "power2.out",
        duration: 0.4,
      },
      0.8
    );

    return cleanup;
  }, []);

  return (
    <section
      ref={sectionRef}
      className="flex items-center justify-center bg-black relative h-screen overflow-hidden"
      style={{ overscrollBehavior: "none" }}
    >
      {/* Circle container */}
      <div
        ref={circleRef}
        className="w-24 sm:w-28 md:w-32 h-24 sm:h-28 md:h-32 rounded-full flex items-center justify-center relative bg-gradient-to-r from-violet-400 to-pink-100 shadow-violet-300/50 shadow-lg transition-shadow duration-1000"
      >
        {/* Initial Text */}
        <p
          ref={initialTextRef}
          className="text-black font-bold text-base sm:text-lg md:text-xl absolute inset-0 flex flex-col items-center justify-center text-center"
        >
          SCROLL DOWN
        </p>

        {/* Final Text */}
        <div
          ref={finalTextRef}
          className="text-center relative flex flex-col items-center justify-between opacity-0"
        >
          <h1 className="text-black md:w-[10rem] w-[20rem] lg:scale-[0.4] sm:scale-[0.25] scale-[0.07] md:font-bold text-sm sm:text-base leading-tight mb-2">
            Step into Future with Shahzad
          </h1>

          <p className="text-black lg:w-[40rem] w-[20rem] absolute sm:mt-2 mt-[2px] md:scale-[0.1] scale-[0.068] leading-tight">
            Front-end developer specialized in crafting modern, responsive web
            interfaces using React, Tailwind CSS, and advanced UI animation
            techniques. Focused on clean code and pixel-perfect design that
            stands out.
          </p>

          <button className="px-10 py-2 rounded-xl bg-black text-white hover:bg-white hover:text-black transition-all duration-500 scale-[0.1] absolute sm:mt-6 mt-5 whitespace-nowrap">
            Hire Me
          </button>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

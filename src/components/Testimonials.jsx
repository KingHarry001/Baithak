import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const Testimonials = ({ id }) => {
  const sectionRef = useRef();
  const statsRef = useRef();
  const headingRef = useRef();
  const cardsRef = useRef();

  useGSAP(() => {
    const q = gsap.utils.selector(sectionRef);
    const statEls = gsap.utils.selector(statsRef)(".stat-value");
    const innerContainer = cardsRef.current?.children[0];

    // Stat Count-Up Animation
    statEls.forEach((el) => {
      const finalValue = parseInt(el.textContent.replace(/[^0-9]/g, ""));
      const suffix = el.textContent.replace(/[0-9]/g, "");
      const obj = { value: 0 };

      ScrollTrigger.create({
        trigger: el,
        start: "top 80%",
        toggleActions: "play none none reset",
        onEnter: () => {
          gsap.to(obj, {
            value: finalValue,
            duration: 4,
            ease: "power2.out",
            onUpdate: () => {
              el.innerText =
                new Intl.NumberFormat().format(Math.floor(obj.value)) + suffix;
            },
          });
        },
      });
    });

    // Horizontal Scroll Animation
    if (innerContainer) {
      gsap.to(innerContainer, {
        x: () => -(innerContainer.scrollWidth - window.innerWidth),
        ease: "none",
        scrollTrigger: {
          trigger: cardsRef.current,
          start: "top center",
          end: () => "+=" + innerContainer.scrollWidth,
          scrub: true,
          pin: true,
          anticipatePin: 1,
        },
      });
    }

    // Fade in Stats
    gsap.from(statsRef.current, {
      scrollTrigger: {
        trigger: statsRef.current,
        start: "top 80%",
      },
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
    });

    // Heading Fade-in
    gsap.from(headingRef.current, {
      scrollTrigger: {
        trigger: headingRef.current,
        start: "top 90%",
      },
      y: 30,
      opacity: 0,
      duration: 1,
      delay: 0.2,
    });

    // Testimonial Card Entry
    gsap.from(q(".card"), {
      scrollTrigger: {
        trigger: cardsRef.current,
        start: "top 85%",
      },
      y: 60,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: "power2.out",
    });
  }, []);

  return (
    <section
      id={id}
      ref={sectionRef}
      className="relative py-20 bg-[#FFEEDC] dark:bg-[#3f2509] text-base-content"
    >
      {/* Scroll Hint */}
      <div className="absolute bottom-4 left-8 z-20 flex items-center gap-2 animate-pulse text-gray-600 text-sm">
        <span>Keep scrolling</span>
        <svg
          className="w-4 h-4 animate-bounce"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
        >
          <path d="M9 5l7 7-7 7" />
        </svg>
      </div>

      {/* Stats */}
      <div ref={statsRef} className="max-w-5xl mx-auto mb-12 flex justify-center">
        <div className="stats stats-vertical md:stats-horizontal shadow justify-center w-[90%]">
          <div className="stat">
            <div className="stat-title">Property Listings</div>
            <div className="stat-value">31K+</div>
            <div className="stat-desc">Across Nigeria</div>
          </div>
          <div className="stat">
            <div className="stat-title">Happy Clients</div>
            <div className="stat-value">4200+</div>
            <div className="stat-desc">and counting</div>
          </div>
          <div className="stat">
            <div className="stat-title">Successful Deals</div>
            <div className="stat-value">1200+</div>
            <div className="stat-desc">in 12 months</div>
          </div>
        </div>
      </div>

      {/* Heading */}
      <div ref={headingRef} className="text-center mb-12">
        <h2 className="text-3xl font-bold">What Our Clients Say</h2>
        <p className="text-lg text-base-content/70">
          Real feedback from satisfied home buyers and renters.
        </p>
      </div>

      {/* Testimonials Horizontal Scroll */}
      <div ref={cardsRef} className="overflow-hidden">
        <div className="flex gap-6 w-max px-8">
          {[
            {
              text: "“I found my dream apartment in Lekki through this platform. The process was smooth and completely virtual!”",
              name: "— Uche, Lagos",
            },
            {
              text: "“They helped me invest in my first rental property. Very knowledgeable and trustworthy agents.”",
              name: "— Mariam, Abuja",
            },
            {
              text: "“Relocating to Port Harcourt was easy thanks to their listings and support. Highly recommended!”",
              name: "— David, Port Harcourt",
            },
            {
              text: "“I found my dream apartment in Lekki through this platform. The process was smooth and completely virtual!”",
              name: "— Uche, Lagos",
            },
            {
              text: "“They helped me invest in my first rental property. Very knowledgeable and trustworthy agents.”",
              name: "— Mariam, Abuja",
            },
            {
              text: "“Relocating to Port Harcourt was easy thanks to their listings and support. Highly recommended!”",
              name: "— David, Port Harcourt",
            },
          ].map((testimonial, i) => (
            <div
              key={i}
              className="card bg-base-100 p-6 shadow-md min-w-[300px] max-w-sm flex-shrink-0"
            >
              <p>{testimonial.text}</p>
              <div className="mt-4 font-semibold">{testimonial.name}</div>
              <div className="w-full flex justify-center">
                <div className="rating rating-md mt-2">
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <input
                      key={idx}
                      type="radio"
                      className="mask mask-star-2 bg-orange-400"
                      defaultChecked={idx < 5}
                      readOnly
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

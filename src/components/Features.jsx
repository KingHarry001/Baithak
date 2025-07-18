import { useRef, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Features = () => {
  const sectionRef = useRef();
  const cardsRef = useRef([]);
  const titleRef = useRef();
  const textRef = useRef();

  // Dark mode compatibility for GSAP animations
  const getBackgroundColor = () => {
    return document.documentElement.classList.contains("dark") 
      ? "#3f2509" // Dark mode color
      : "#FFEEDC"; // Light mode color
  };

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 75%",
        toggleActions: "play none none none",
        onEnter: () => {
          // Sync with DaisyUI's dark mode changes
          gsap.to(sectionRef.current, {
            backgroundColor: getBackgroundColor(),
            duration: 0.1
          });
        }
      }
    });

    // Section background transition (respects dark mode)
    tl.fromTo(
      sectionRef.current,
      { 
        backgroundColor: "rgba(255,238,220,0)", // Light mode transparent
        scale: 0.98 
      },
      { 
        backgroundColor: getBackgroundColor(), // Dynamically picks light/dark
        scale: 1,
        duration: 1,
        ease: "expo.out"
      },
      0
    );

    // Text reveal with blur effect
    tl.fromTo(
      [titleRef.current, textRef.current],
      { 
        opacity: 0, 
        y: 30,
        filter: "blur(8px)"
      },
      {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        stagger: 0.15,
        duration: 1.2,
        ease: "back.out(1.7)"
      },
      0.3
    );

    // 3D Card flip with proper dark mode borders
    tl.fromTo(
      cardsRef.current,
      {
        opacity: 0,
        rotationY: 15,
        transformOrigin: "center",
        borderColor: "rgba(0,0,0,0)" // Start transparent
      },
      {
        opacity: 1,
        rotationY: 0,
        borderColor: "var(--fallback-bc,oklch(var(--bc)/0.2))", // DaisyUI border
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out"
      },
      0.5
    );

    // Hover effects that work in both modes
    cardsRef.current.forEach((card) => {
      card.addEventListener("mouseenter", () => {
        gsap.to(card, {
          y: -8,
          scale: 1.03,
          boxShadow: "0 10px 30px -5px rgba(0,0,0,0.15)",
          borderColor: "oklch(var(--p))", // DaisyUI primary color
          duration: 0.3
        });
      });

      card.addEventListener("mouseleave", () => {
        gsap.to(card, {
          y: 0,
          scale: 1,
          boxShadow: "0 4px 6px -1px rgba(0,0,0,0.1)",
          borderColor: "var(--fallback-bc,oklch(var(--bc)/0.2))",
          duration: 0.3
        });
      });
    });
  }, { scope: sectionRef });

  // Handle theme changes dynamically
  useEffect(() => {
    const observer = new MutationObserver(() => {
      gsap.to(sectionRef.current, {
        backgroundColor: getBackgroundColor(),
        duration: 0.5
      });
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"]
    });

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: "Verified Properties",
      text: "Every listing is thoroughly vetted by our team. Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias iste natus sapiente corrupti minima excepturi esse nesciunt quas tenetur, aut commodi magnam eius maxime provident ratione vel veniam. Ad, minima."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: "Prime Locations",
      text: "Curated selection in the most desirable neighborhoods. Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias iste natus sapiente corrupti minima excepturi esse nesciunt quas tenetur, aut commodi magnam eius maxime provident ratione vel veniam. Ad, minima."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
            d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
      title: "Investment Ready",
      text: "Properties with strong market potential highlighted. Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias iste natus sapiente corrupti minima excepturi esse nesciunt quas tenetur, aut commodi magnam eius maxime provident ratione vel veniam. Ad, minima."
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className="relative py-20 text-base-content transition-colors duration-500"
      style={{
        background: getBackgroundColor()
      }}
    >
      <div className="container mx-auto px ^4 max-w-7xl">
        <div className="text-center mb-16">
          <h2 ref={titleRef} className="features-title text-4xl md:text-5xl font-bold mb-4">
            Find Your Perfect Space
          </h2>
          <p ref={textRef} className="features-text text-lg md:text-xl opacity-80 max-w-2xl mx-auto">
            Whether you're buying, renting, or investing - we've got you covered.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
          {features.map((feature, index) => (
            <div
              key={index}
              ref={el => cardsRef.current[index] = el}
              className="features-box card bg-base-100 dark:bg-base-200 p-8 shadow-lg hover:shadow-xl transition-all cursor-pointer rounded-xl border border-base-300 dark:border-base-100/20"
            >
              <div className="text-primary mb-4">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
              <p className="text-base-content/70 dark:text-base-content/80">
                {feature.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

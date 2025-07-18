import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const CTA = () => {
  const sectionRef = useRef();

  useGSAP(() => {
    const q = gsap.utils.selector(sectionRef);

    // Animate the section fade-in
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        ease: "power2.out",
        duration: 1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
        },
      }
    );

    // Animate title
    gsap.fromTo(
      q(".cta-title"),
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        delay: 0.2,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      }
    );

    // Animate paragraph
    gsap.fromTo(
      q(".cta-text"),
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        delay: 0.3,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      }
    );

    // Animate button
    gsap.fromTo(
      q(".cta-btn"),
      { opacity: 0, scale: 0.8 },
      {
        opacity: 1,
        scale: 1,
        delay: 0.5,
        duration: 0.6,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      }
    );
  }, { scope: sectionRef });

  return (
    <section
      ref={sectionRef}
      className="py-20 text-primary-content text-center"
    >
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: "url(cta.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h2 className="text-4xl font-bold mb-4 cta-title">
              Ready to find your next home?
            </h2>
            <p className="text-lg mb-8 cta-text">
              Browse listings or speak to our agents today.
            </p>
            <button className="btn btn-secondary btn-lg cta-btn">
              Explore Properties
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;

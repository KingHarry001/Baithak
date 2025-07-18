import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

const About = ({ id }) => {
  const sectionRef = useRef();

  useEffect(() => {
    const handleDOMLoad = () => {
      const q = gsap.utils.selector(sectionRef);

      // Verify elements exist before animating
      if (!sectionRef.current) return;
      const title = q(".about-title")[0];
      if (!title) return;

      // Animate the entire section
      gsap.fromTo(
        sectionRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          delay: 0.2,
          ease: "power2.out",
          duration: 1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        }
      );

      // Animate title (with safety check)
      gsap.fromTo(
        title,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          delay: 0.3,
          ease: "power2.out",
          duration: 1,
          scrollTrigger: {
            trigger: title,
            start: "top 80%",
          },
        }
      );

      // Animate paragraphs (only if they exist)
      const texts = q(".about-text");
      if (texts.length) {
        gsap.fromTo(
          texts,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            delay: 0.4,
            duration: 0.8,
            stagger: 0.2,
            scrollTrigger: {
              trigger: title,
              start: "top 80%",
            },
          }
        );
      }
    };

    // Check if document is already loaded
    if (document.readyState === "complete") {
      handleDOMLoad();
    } else {
      document.addEventListener("DOMContentLoaded", handleDOMLoad);
    }

    return () => {
      document.removeEventListener("DOMContentLoaded", handleDOMLoad);
    };
  }, []);

  return (
    <section
    id={id}
      ref={sectionRef}
      className="py-20 bg-base-100 text-base-content text-center p-5 about-box"
    >
      <div className="w-full border lg:flex lg:h-[70vh] overflow-hidden bg-[#FFEEDC] dark:bg-[#3f2509] rounded-[1rem]">
        {/* Right side: Text */}
        <div className="lg:w-1/2 sm:w-full p-6 flex flex-col gap-4 text-left">
          <h1 className="text-3xl lg:text-7xl font-bold about-title">
            Who We Are
          </h1>
          <p className="text-base-content/70 about-text">
            We’re more than just listings — we’re your partners in property.
            With years of market experience, local expertise, and a passion for
            helping clients find the right space, we’ve helped hundreds own,
            rent, and invest confidently across Nigeria.
          </p>
          <p className="text-base-content/70 about-text">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro
            commodi accusantium, quia eum, debitis deleniti exercitationem
            libero qui maxime vel esse harum eos illo dignissimos quo repellat
            non in molestias.
          </p>
          <p className="text-base-content/70 about-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto culpa
            animi, quia labore praesentium rem debitis alias suscipit. Harum
            minima repellat nisi quidem laboriosam praesentium sunt repudiandae
            iure, incidunt laudantium!
          </p>
        </div>   {/* Left side: Image */}
    <div
      style={{ borderRadius: "1rem 0 0 1rem" }}
      className="lg:w-1/2 sm:w-full overflow-hidden"
    >
      <img
        src="about-us.jpg"
        alt="About US"
        className="w-full h-full object-cover"
      />
    </div>
  </div>
</section>
  );
};

export default About;

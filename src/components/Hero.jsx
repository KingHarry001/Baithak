import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Hero = ({ id }) => {
  useGSAP(() => {
    gsap.fromTo(
      "#hero-title",
      {
        opacity: 0,
        y: 40,
      },
      {
        opacity: 1,
        y: 0,
        ease: "power4.out",
        duration: 1,
        scrollTrigger: {
          trigger: "#hero-title",
          start: "top 80%", // when the top of #hero-title hits 80% of viewport
        },
      }
    );

    gsap.fromTo(
      "#text",
      {
        opacity: 0,
        y: 30,
      },
      {
        opacity: 1,
        y: 0,
        delay: 0.2,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: "#hero-title", // same trigger
          start: "top 80%",
        },
      }
    );

    gsap.fromTo(
      "#box",
      {
        opacity: 0,
        y: 30,
      },
      {
        opacity: 1,
        y: 0,
        delay: 0.2,
        duration: 0.8,
        stagger: 1,
        scrollTrigger: {
          trigger: "#hero-title", // same trigger
          start: "top 80%",
        },
      }
    );
  }, []);

  return (
    <div id={id} className="p-5">
      <div className="w-full border lg:flex lg:h-[70vh] overflow-hidden bg-[#FFEEDC] dark:bg-[#3f2509] rounded-[1rem]">
        {/* Left side: Image */}
        <div
          style={{ borderRadius: "1rem 0 0 1rem" }}
          className="lg:w-1/2 sm:w-full overflow-hidden"
        >
          <img
            src="house.jpg"
            alt="house"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right side: Text */}
        <div
          className="lg:w-1/2 sm:w-full p-6 flex flex-col gap-4 text-left md:pt-[7rem]"
          style={{ borderRadius: "0 1rem 1rem 0" }}
        >
          <h1 id="hero-title" className="text-3xl lg:text-7xl font-bold">
            Jahan Baithak, Wahan Sukoon
          </h1>
          <p id="text">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum,
            nemo culpa! Architecto voluptate, rem eius tempora suscipit et quam
            voluptatum provident totam pariatur, soluta repudiandae quisquam
            iste, corporis natus ab.
          </p>
          <div id="text" className="flex flex-wrap gap-2">
            <button className="btn rounded-full btn-outline border-[#4F392B]">
              Book Now
            </button>
            <button className="btn rounded-full btn-outline border-[#4F392B]">
              Explore
            </button>
            <button className="btn rounded-full btn-outline border-[#4F392B]">
              Contact
            </button>
          </div>
        </div>
      </div>

      <div
        className="relative gap-3
         lg:grid grid-cols-3"
      >
        <div id="box" className="bg-[url('/house.jpg')] bg-cover bg-center rounded-[1rem] p-4 my-4 relative text-left h-[20rem] border">
          <div className="absolute inset-0 bg-black/40 rounded-[1rem]"></div>

          <div className="absolute inset-0 flex items-center justify-center text-white">
            <div className="badge">01</div>
            <div className="absolute bottom-1 p-1">
              <h1 className="text-2xl font-medium">Mehfil sofa</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum,
                nemo culpa!
              </p>
            </div>
          </div>
        </div>

        <div id="box" className="bg-[url('/palour.jpg')] bg-cover bg-center rounded-[1rem] p-4 my-4 relative text-left h-[20rem] border">
          <div className="absolute inset-0 bg-black/40 rounded-[1rem]"></div>

          <div className="absolute inset-0 flex items-center justify-center text-white">
            <div className="badge">02</div>
            <div className="absolute bottom-1 p-1">
              <h1 className="text-2xl font-medium">Chaupai Table</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum,
                nemo culpa!
              </p>
            </div>
          </div>
        </div>

        <div id="box" className="bg-[url('/sofa.jpg')] bg-cover bg-center rounded-[1rem] p-4 my-4 relative text-left h-[20rem] border">
          <div className="absolute inset-0 bg-black/40 rounded-[1rem]"></div>

          <div className="absolute inset-0 flex items-center justify-center text-white">
            <div className="badge">03</div>
            <div className="absolute bottom-1 p-1">
              <h1 className="text-2xl font-medium">Sajavat Collection</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum,
                nemo culpa!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

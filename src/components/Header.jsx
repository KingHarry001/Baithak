import { useRef, useEffect } from "react";
import gsap from "gsap";
import ThemeToggleSwap from "./ToggleTheme";

const Header = () => {
  const searchRef = useRef();
  const linksRef = useRef([]);

  useEffect(() => {
    // Animate the header links on mount
    gsap.fromTo(
      linksRef.current,
      { opacity: 0, y: -20 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.1,
        duration: 0.5,
        ease: "power2.out",
      }
    );

    // Animate the search bar on mount
    gsap.fromTo(
      searchRef.current,
      { opacity: 0, scale: 0.8 },
      {
        opacity: 1,
        scale: 1,
        duration: 0.5,
        ease: "back.out(1.5)",
      }
    );
  }, []);

  return (
    <div className="navbar w-[95%] fixed top-5 left-1/2 -translate-x-1/2 pr-4 z-50 backdrop-blur-md bg-white/10 border border-white/20 rounded-xl shadow-lg">
      {/* Left: Logo */}
      <div className="flex-none">
        <a className="text-xl uppercase font-bold transition-transform duration-300 hover:scale-105">
          Baithak
        </a>
      </div>

      {/* Spacer to push right section */}
      <div className="flex-1 px-7"></div>

      {/* Right: Search, Theme Toggle, Hamburger */}
      <div className="flex-none flex items-center gap-2">
        {/* Desktop Menu - next to logo */}
        <div className="hidden lg:flex">
          <ul
            tabIndex={0}
            className="menu menu-horizontal px-1"
          >
            {["Home", "About", "Pricing", "Testimonials"].map((link, index) => (
              <li key={index}>
                <a
                  href={`#${link.toLowerCase()}`}
                  className="transition-transform duration-300 hover:scale-105"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Search */}
        <input
          ref={searchRef}
          type="text"
          placeholder="Search"
          className="input input-bordered w-24 md:w-auto transition-all duration-300 focus:outline-none focus:ring focus:ring-primary"
        />

        {/* Theme Toggle */}
        <button className="btn btn-square btn-ghost transition-transform duration-300 hover:scale-110">
          <ThemeToggleSwap />
        </button>

        {/* Mobile Menu */}
        <div className="dropdown dropdown-end lg:hidden">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content z-[1] mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {["Home", "About", "Pricing", "Testimonials"].map((link, index) => (
              <li key={index}>
                <a
                  href={`#${link.toLowerCase()}`}
                  className="transition-transform duration-300 hover:scale-105"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;

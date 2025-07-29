import React, { useEffect } from "react";
import { gsap } from "gsap";
import { FaInstagram, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  useEffect(() => {
    // GSAP animation
    gsap.fromTo(
      ".footer",
      { opacity: 0, y: 20 }, // Start state
      { opacity: 1, y: 0, duration: 1 } // End state
    );
  }, []);

  return (
    <div>
      <footer className="footer sm:footer-horizontal bg-base-300 text-base-content p-10">
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover transition-all hover:-translate-y-1 hover:font-semibold hover:text-[#3f2509]">
            Branding
          </a>
          <a className="link link-hover transition-all hover:-translate-y-1 hover:font-semibold hover:text-[#3f2509]">
            Design
          </a>
          <a className="link link-hover transition-all hover:-translate-y-1 hover:font-semibold hover:text-[#3f2509]">
            Marketing
          </a>
          <a className="link link-hover transition-all hover:-translate-y-1 hover:font-semibold hover:text-[#3f2509]">
            Advertisement
          </a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover transition-all hover:-translate-y-1 hover:font-semibold hover:text-[#3f2509]">
            About us
          </a>
          <a className="link link-hover transition-all hover:-translate-y-1 hover:font-semibold hover:text-[#3f2509]">
            Contact
          </a>
          <a className="link link-hover transition-all hover:-translate-y-1 hover:font-semibold hover:text-[#3f2509]">
            Jobs
          </a>
          <a className="link link-hover transition-all hover:-translate-y-1 hover:font-semibold hover:text-[#3f2509]">
            Press kit
          </a>
        </nav>
        <nav>
          <h6 className="footer-title">Social</h6>
          <div className="grid grid-flow-col gap-4">
            <a
              href="https://www.instagram.com/nexusdesignsorg?igsh=Y2cyN2pzZnVxNnlv"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition "
            >
              <FaInstagram className="text-4xl hover:-translate-y-1 hover:font-semibold hover:text-[#3f2509]"/>
            </a>
            <a
              href="https://x.com/NyxAsura?t=jN-MFkHYfbCph8bDJk4MRQ&s=09"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              <FaTwitter className="text-4xl hover:-translate-y-1 hover:font-semibold hover:text-[#3f2509]"/>
            </a>
            <a
              href="https://www.linkedin.com/in/harrison-k-a-a5b118278?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              <FaLinkedin className="text-4xl hover:-translate-y-1 hover:font-semibold hover:text-[#3f2509]"/>
            </a>
            <a
              href="https://github.com/KingHarry001"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              <FaGithub className="text-4xl hover:-translate-y-1 hover:font-semibold hover:text-[#3f2509]"/>
            </a>
          </div>
        </nav>
      </footer>
      <div className="footer sm:footer-horizontal footer-center bg-base-300 text-base-content p-4">
        <aside>
          <p>
            Copyright © {new Date().getFullYear()} - All right reserved{" "}
            <b>By Nexus Dynasty Studio</b> Ltd
          </p>
        </aside>
      </div>
    </div>
  );
};

export default Footer;

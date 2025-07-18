import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const Pricing = ({ id }) => {
  const sectionRef = useRef();

  useGSAP(() => {
    const q = gsap.utils.selector(sectionRef);

    // Animate entire section
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
        },
      }
    );

    // Animate heading
    gsap.fromTo(
      q("h2"),
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      }
    );

    // Animate each pricing card with stagger
    gsap.fromTo(
      q(".card"),
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        delay: 0.3,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      }
    );
  }, { scope: sectionRef });

  return (
    <section
    id={id}
      ref={sectionRef}
      className="py-20 bg-base-200 text-base-content dark:bg-neutral"
    >
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold">Affordable Plans for Every Need</h2>
        <p className="text-lg text-base-content/70">
          Choose a plan that fits your property goals — whether you're renting,
          selling, or investing.
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-4 grid gap-8 grid-cols-1 md:grid-cols-3 justify-items-center">
        {/* Basic Plan */}
        <div className="card bg-base-100 shadow-xl w-full max-w-sm">
          <div className="card-body">
            <h3 className="text-2xl font-bold text-primary">Basic</h3>
            <p className="text-sm text-base-content/70">
              Perfect for single property listings
            </p>
            <div className="text-3xl font-bold my-4">
              ₦5,000<span className="text-sm font-normal">/month</span>
            </div>
            <ul className="space-y-2 mb-6 text-sm">
              <li>✅ 1 property listing</li>
              <li>✅ 7 days visibility</li>
              <li>❌ No agent support</li>
              <li>❌ No social media promotion</li>
            </ul>
            <button className="btn btn-primary w-full">Get Started</button>
          </div>
        </div>

        {/* Standard Plan */}
        <div className="card bg-base-100 shadow-xl w-full max-w-sm border-2 border-primary">
          <div className="card-body">
            <h3 className="text-2xl font-bold text-primary">Standard</h3>
            <p className="text-sm text-base-content/70">
              Great for agents and landlords
            </p>
            <div className="text-3xl font-bold my-4">
              ₦15,000<span className="text-sm font-normal">/month</span>
            </div>
            <ul className="space-y-2 mb-6 text-sm">
              <li>✅ Up to 5 listings</li>
              <li>✅ 30 days visibility</li>
              <li>✅ Basic agent support</li>
              <li>✅ Homepage highlight</li>
              <li>❌ No social media promotion</li>
            </ul>
            <button className="btn btn-primary w-full">Choose Plan</button>
          </div>
        </div>

        {/* Premium Plan */}
        <div className="card bg-base-100 shadow-xl w-full max-w-sm">
          <div className="card-body">
            <h3 className="text-2xl font-bold text-primary">Premium</h3>
            <p className="text-sm text-base-content/70">
              For agencies and serious investors
            </p>
            <div className="text-3xl font-bold my-4">
              ₦30,000<span className="text-sm font-normal">/month</span>
            </div>
            <ul className="space-y-2 mb-6 text-sm">
              <li>✅ Unlimited listings</li>
              <li>✅ 90 days visibility</li>
              <li>✅ Dedicated agent support</li>
              <li>✅ Social media + featured spot</li>
              <li>✅ Performance analytics</li>
            </ul>
            <button className="btn btn-primary w-full">Upgrade Now</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;

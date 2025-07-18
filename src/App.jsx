import "./App.css";
import About from "./components/About";
import CTA from "./components/CTA";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <>
      <Header />
      <Hero id="home" />
      <About id="about" />
      <Features />
      <CTA/>
      <Pricing id="pricing"/>
      <Testimonials id="testimonials"/>
      <Footer />
    </>
  );
}

export default App;

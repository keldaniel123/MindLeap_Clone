import "./App.css";
import About from "./component/About";
import Contact from "./component/Contact";
import Footer from "./component/Footer";
import Hero from "./component/Hero";
import Navbar from "./component/Navbar";
import Pricing from "./component/Pricing";
import Services from "./component/Services";
import Testimonial from "./component/Testimonial";
import WorkingStep from "./component/WorkingStep";

function App() {
  return (
    <>
      <div className="font-primary overflow-x-hidden">
        <Navbar />
        <Hero />
        <Services />
        <About />
        <WorkingStep />
        <Pricing />
        <Testimonial />
        <Contact/>
        <Footer/>
      </div>
    </>
  );
}

export default App;

import "./App.css";
import Header from "./components/Header";
import Home from "./sections/Home";
import Footer from "./components/Footer";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Service from "./sections/Service";
import TestimonialSection from "./sections/Testimonial";

function App() {
  return (
    <div>
      <Header />
      <Home />
      <About />
      <Service />
      <TestimonialSection />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

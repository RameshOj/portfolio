import "./App.css";
import ChatBot from "./components/ChatBot/ChatBot";
import Expertise from "./components/Expertise";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import LatestProjects from "./components/LatestProjects";
import Qualification from "./components/Qualification";
import Specializing from "./components/Specializing";
import Testimonials from "./components/Testimonials";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  });

  return (
    <div>
      <Hero />
      <Specializing />
      <Expertise />
      <LatestProjects />
      <Qualification />
      <Testimonials />
      <Footer />
      /* <ChatBot /> */
    </div>
  );
}

export default App;

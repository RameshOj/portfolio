import { BrowserRouter, Route, Routes } from "react-router-dom";
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
import Portfolios from "./components/Portfolios";
import Home from "./pages/Home";

// Main App Component
function App() {
  // Listen to window resize event
  window.addEventListener("resize", () => {
    const chatContainer = document.querySelector("#chat-container"); // adjust ID/class accordingly
    if (window.innerHeight < 600) {
      // Keyboard likely opened
      chatContainer.scrollIntoView({ behavior: "smooth" });
    }
  });

  // Initialize AOS (Animate On Scroll) library
  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  });

  // Render the main components of the application
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/portfolio"
          element={
            <>
              <Portfolios />
              <Footer />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

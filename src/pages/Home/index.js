import ChatBot from "../../components/ChatBot/ChatBot";
import Expertise from "../../components/Expertise";
import Footer from "../../components/Footer";
import Hero from "../../components/Hero";
import LatestProjects from "../../components/LatestProjects";
import Qualification from "../../components/Qualification";
import Specializing from "../../components/Specializing";
import Testimonials from "../../components/Testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <Specializing />
      <Expertise />
      <LatestProjects />
      <Qualification />
      <Testimonials />
      <Footer />
      <ChatBot />
    </>
  );
}

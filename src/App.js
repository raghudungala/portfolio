import React from "react";
import Header from "./components/Header";
import ProjectSection from "./components/ProjectSection";
import SkillsSection from "./components/SkillsSection";
import ExperienceSection from "./components/ExperienceSection";
import Footer from "./components/Footer";
import WelcomePage from "./components/welcomepage";
import About from "./components/About";
import ProgressBar from "react-scroll-progress-bar";

function App() {
  return (
    <section>
      <ProgressBar />
      <Header />
      <WelcomePage />
      <About />
      <SkillsSection />
      <ProjectSection />
      <ExperienceSection />
      <Footer />
    </section>
  );
}

export default App;

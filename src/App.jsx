import Header from "./Components/Header";
import About from "./Components/About";
import SkillList from "./Components/SkillList";
import Footer from "./Components/Footer";

import Details from "./Pages/Details";
import Education from "./Pages/Education";
import Project from "./Pages/Project";
import Certificate from "./Pages/Certificate";

import "./App.css";

function App() {
  return (
    <>
      <Header />
      <Details />
      <About />
      <SkillList />
      <Education />
      <Project />
      <Certificate />
      <Footer />
    </>
  );
}

export default App;
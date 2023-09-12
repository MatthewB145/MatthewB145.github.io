import NavBar from "./Components/NavBar/navbar";
import Intro from "./Components/Intro/intro";
import Skills from "./Components/Skills/skills";
import Projects from "./Components/Projects/projects";
import Contact from "./Components/Contact/contact";
import Footer from "./Components/Footer/footer";


function App() {
  return (
    <div className="App">
        <NavBar/>
        <Intro/>
        <Skills/>
        <Projects/>
        <Contact />
        <Footer />
    </div>
  );
}

export default App;

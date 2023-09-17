import Contact from './components/Contact';
import Home from './components/Home';
import Skills from './components/Skills';
import Projects from './components/Projects';
import SideNav from './components/SideNav';
import Work from './components/Work';
import About from './components/About';

function App() {
  return (
    <>
      <SideNav />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Work />
      <Contact />
    </>
  )
}

export default App

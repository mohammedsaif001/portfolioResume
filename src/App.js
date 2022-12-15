import './App.css';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import ScrollUp from './components/scrollup/ScrollUp';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Qualification from './components/qualification/Qualification';
import Skills from './components/skills/Skills';
import Project from './components/projects/Project';
function App() {
  return (
    <>
      <Header />
      <main className="main">
        <Home />
        <About />
        <Skills />
        <Project />
        <Qualification />
        <Contact />
      </main>
      {/* <Footer /> */}
      <ScrollUp />
    </>
  );
}

export default App;

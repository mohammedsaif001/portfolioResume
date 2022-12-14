import './App.css';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Qualification from './components/qualification/Qualification';
import Skills from './components/skills/Skills';
function App() {
  return (
    <>
      <Header />
      <main className="main">
        <Home />
        <About />
        <Skills />
        <Qualification />
        <Contact />
      </main>
    </>
  );
}

export default App;

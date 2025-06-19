import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Meetings from './components/Meetings';
import Events from './components/Events';
import Leadership from './components/Leadership';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <About />
      <Projects />
      <Meetings />
      <Events />
      <Leadership />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
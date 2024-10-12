import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import './App.css';  // For styling (if you create a CSS file)
// import 'antd/lib/';

function App() {
  return (
    <div className="App">
      <Hero />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
import React from 'react';
import About from './components/About';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Project from './components/Project';
import './App.css';


function App() {
  return (
    <div>
       <Nav></Nav>
      <main>
        <About></About>
      </main>
      <div>
        <Project></Project>
      </div>
      <div>
      <Footer></Footer>
      </div>
    </div>
  );
}

export default App;

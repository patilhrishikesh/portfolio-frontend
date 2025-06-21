import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';
import Contact from './pages/Contact';
import logo from './logo.svg';
import './App.css';

function App() {
   return (
    <Router>
      <Routes>
        <Route path='/' element = {<Home />} />
        <Route path='/projects' element = {<Projects />} />
        <Route path='/about' element = {<About />} />
        <Route path='/contact' element = {<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;

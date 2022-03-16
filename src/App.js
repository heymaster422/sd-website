import React from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Gallery from './components/Pages/Gallery';
import Demo from './components/Pages/Demo';
import Home from './components/Pages/Home';
import Nav from './components/Nav/Nav';
import Team from './components/Pages/Team';
import Footer from './components/Nav/Footer';

// create App Dark theme
function App() {

  return (
    
  <Router>
    <div className="App">
      <div className='content-wrap'>
        <Nav />
        <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route path="Demo" element={<Demo />} />
          <Route path="Gallery" element={<Gallery />} />
          <Route path="Team" element={<Team />} />
        </Routes>
        </div>
      <Footer />
    </div>
  </Router>

  )
}


export default App;

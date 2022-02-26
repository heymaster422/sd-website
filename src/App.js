import React from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Gallery from './components/Pages/Gallery';
import Demo from './components/Pages/Demo';
import Home from './components/Pages/Home';
import Nav from './components/Nav/Nav';
import Team from './components/Pages/Team';


// create App Dark theme
function App() {

  return (
    
  <Router>
    <div className="App">
      <Nav />
      <Routes>
        <Route exact path="/"exact element={<Home />}/>
        <Route path="Demo" element={<Demo />} />
        <Route path="Gallery" element={<Gallery />} />
        <Route path="Team" element={<Team />} />
      </Routes>
    </div>
  </Router>

  )
}


export default App;

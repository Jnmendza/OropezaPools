import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import Navbar from './components/Navbar.js';
import Footer from './components/Footer.js';

import Home from './pages/Home.js';
import AboutUs from './pages/AboutUs.js';

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />
      <Route exact path="/" component={Home} />
      <Route exact path="/about-us" component={AboutUs} />
      <Footer />
    </div>
    </Router>
  );
}

export default App;

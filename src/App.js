import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar/Navbar';
import Footer from './components/layout/Footer/Footer';
import Home from './pages/Home';
import JobRecommendations from './pages/JobRecommendations';

import React from 'react';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/jobs" element={<JobRecommendations />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
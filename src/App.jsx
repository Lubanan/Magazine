import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Home from './pages/Home';
import Feedback from './pages/Feedback';
import About from './pages/About';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}
export default App;
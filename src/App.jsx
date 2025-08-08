import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HorizontalScrollCarousel from "./components/HorizontalScrollCarousel";
import Footer from "./components/Footer";
import AdminLogin from  "./pages/AdminLogin";
import { SmoothScrollHero } from "./components/SmoothScrollHero";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/admin" element={<AdminLogin />} />
        <Route
          path="/*"
          element={
            <>
              <SmoothScrollHero />
              <HorizontalScrollCarousel />
              <Footer />

          

          
            </>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;

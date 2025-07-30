import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MagazineView from "./pages/MagazineView";
import AdminPanel from "./pages/AdminPanel";
import AdminLogin from "./pages/AdminLogin";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/magazine" element={<MagazineView />} />
        <Route path="/admin" element={<AdminPanel />} />
        <Route path="/admin-login" element={<AdminLogin />} />
      </Routes>
    </Router>
  );
};

export default App;
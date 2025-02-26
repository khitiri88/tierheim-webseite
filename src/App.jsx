import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import AnimalsList from "./pages/AnimalsList";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hunde" element={<AnimalsList category="hunde" />} />
        <Route path="/katzen" element={<AnimalsList category="katzen" />} />
        <Route path="/kleintiere" element={<AnimalsList category="kleintiere" />} />
        <Route path="/voegel" element={<AnimalsList category="voegel" />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;

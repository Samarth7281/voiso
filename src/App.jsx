import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import Home from "./pages/Home";
import Integrations from "./pages/Integrations";
import Pricing from "./pages/Pricing";
import Partners from "./pages/Partners";
import Navbar from "./components/Navbar";
import Solutions from "./pages/Solutions";
import About from "./pages/About";
import AboutSubMenu from "./pages/AboutSubMenu";

function App() {
  const [showSolutions, setShowSolutions] = useState(false);
  const [showAbout, setShowAbout] = useState(false);

  return (
    <Router>
      <Navbar
        showSolutions={showSolutions}
        setShowSolutions={setShowSolutions}
        showAbout={showAbout}
        setShowAbout={setShowAbout}
      />
      {/* Submenu: Appears below navbar on all pages */}
      {showSolutions && (
        <div className="fixed top-[4.3125rem] left-0 w-full z-40 animate-slide-down">
          <Solutions />
        </div>
      )}
      {showAbout && (
        <div className="fixed top-[4.3125rem] left-0 w-full z-40 animate-slide-down">
          <AboutSubMenu />
        </div>
      )}
      <div className="w-full pt-[85px]">
        <div
          className={
            showSolutions || showAbout ? "filter blur-sm transition-all" : ""
          }
        >
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  showSolutions={showSolutions}
                  setShowSolutions={setShowSolutions}
                />
              }
            />
            <Route path="/integrations" element={<Integrations />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/partners" element={<Partners />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Solutions from "../pages/Solutions";
import { Link, useNavigate } from "react-router-dom";
import AboutSubMenu from "../pages/AboutSubMenu";

const Navbar = ({
  showSolutions,
  setShowSolutions,
  showAbout,
  setShowAbout,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showMobileSolutions, setShowMobileSolutions] = useState(false);
  const [showMobileAbout, setShowMobileAbout] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Helper to close submenu on navigation
  const handleNavClick = (path) => {
    setShowSolutions(false);
    setShowAbout(false);
    setIsOpen(false);
    navigate(path);
  };

  return (
    <>
      <div className="fixed top-0 left-0 z-50 w-full h-[4.3125rem] bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-full">
          {/* Left: Logo + Nav Items */}
          <div className="flex items-center space-x-8">
            <div className="flex-shrink-0" onClick={() => navigate("/")}>
              <img
                src="logo.jpg"
                alt="Voiso Logo"
                className="h-12 w-auto cursor-pointer"
              />
            </div>
            {/* Desktop Navigation Menu */}
            <div className="hidden lg:flex items-center space-x-6 text-[16px] font-[550] text-black">
              <span
                onClick={() => {
                  setShowSolutions(!showSolutions);
                  setShowAbout(false);
                }}
                className={`cursor-pointer flex items-center gap-1 transition-colors relative 
      ${showSolutions ? "text-[#236ADC]" : "text-black hover:text-[#FF2F80]"}`}
              >
                Solutions
                <svg
                  className={`w-3 h-3 transition-transform ${
                    showSolutions ? "rotate-180" : "rotate-0"
                  }`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 9l-7 7-7-7" />
                </svg>
              </span>
              <span
                className="cursor-pointer hover:text-[#FF2F80] transition-colors"
                onClick={() => handleNavClick("/integrations")}
              >
                Integrations
              </span>
              <span
                className="cursor-pointer hover:text-[#FF2F80] transition-colors"
                onClick={() => handleNavClick("/pricing")}
              >
                Pricing
              </span>
              <span
                className="cursor-pointer hover:text-[#FF2F80] transition-colors"
                onClick={() => handleNavClick("/partners")}
              >
                Partners
              </span>
              <span
                className={`cursor-pointer flex items-center gap-1 transition-colors relative ${
                  showAbout
                    ? "text-[#236ADC]"
                    : "text-black hover:text-[#FF2F80]"
                }`}
                onClick={() => {
                  setShowAbout(!showAbout);
                  setShowSolutions(false);
                }}
              >
                About
                <svg
                  className={`w-3 h-3 transition-transform ${
                    showAbout ? "rotate-180" : "rotate-0"
                  }`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 9l-7 7-7-7" />
                </svg>
              </span>
            </div>
          </div>

          {/* Right side: Buttons (Desktop) */}
          <div className="hidden lg:flex items-center space-x-4">
            <button className="text-[16px] px-4 py-2 rounded-2xl border-2 border-transparent hover:text-[#FF2F80] hover:border-[#FF2F80] transition-all font-normal whitespace-nowrap">
              Login
            </button>
            <button className="bg-[#236ADC] text-white font-normal text-[16px] px-4 py-2 rounded-2xl border-2 border-[#236ADC] transition-all hover:bg-white hover:text-[#236ADC] whitespace-nowrap">
              Contact Sales
            </button>
          </div>

          {/* Hamburger Icon (Mobile) */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md hover:bg-gray-100 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black bg-opacity-50 transition-opacity lg:hidden ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
      ></div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-[4.3125rem] left-0 z-50 w-full bg-white shadow-md border-t border-gray-100 transition-transform transform lg:hidden ${
          isOpen ? "translate-y-0" : "-translate-y-full"
        } ${!isOpen && "hidden"}`}
      >
        <div className="px-4 sm:px-6 py-4">
          <div className="flex flex-col space-y-3 text-[16px] font-medium text-black">
            {/* Solutions with arrow and dropdown */}
            <span
              className="cursor-pointer hover:text-[#FF2F80] transition-colors py-2 flex items-center justify-between"
              onClick={() => setShowMobileSolutions((prev) => !prev)}
            >
              <span>Solutions</span>
              <svg
                className={`w-3 h-3 ml-2 transition-transform ${
                  showMobileSolutions ? "rotate-90" : "rotate-0"
                }`}
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M9 5l7 7-7 7" />
              </svg>
            </span>
            {showMobileSolutions && (
              <div className="flex flex-col items-center space-y-2 py-2">
                <Solutions />
              </div>
            )}
            {/* About with arrow and dropdown */}
            <span
              className="cursor-pointer hover:text-[#FF2F80] transition-colors py-2 flex items-center justify-between"
              onClick={() => setShowMobileAbout((prev) => !prev)}
            >
              <span>About</span>
              <svg
                className={`w-3 h-3 ml-2 transition-transform ${
                  showMobileAbout ? "rotate-90" : "rotate-0"
                }`}
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M9 5l7 7-7 7" />
              </svg>
            </span>
            {showMobileAbout && (
              <div className="flex flex-col items-center space-y-2 py-2">
                <AboutSubMenu />
              </div>
            )}
            {/* Other menu items */}
            <span
              className="cursor-pointer hover:text-[#FF2F80] transition-colors py-2"
              onClick={() => handleNavClick("/integrations")}
            >
              Integrations
            </span>
            <span
              className="cursor-pointer hover:text-[#FF2F80] transition-colors py-2"
              onClick={() => handleNavClick("/pricing")}
            >
              Pricing
            </span>
            <span
              className="cursor-pointer hover:text-[#FF2F80] transition-colors py-2"
              onClick={() => handleNavClick("/partners")}
            >
              Partners
            </span>
          </div>
          <div className="pt-4 mt-4 border-t border-gray-200 flex flex-col sm:flex-row gap-3">
            <button className="w-full text-[16px] px-4 py-3 rounded-2xl border-2 border-[#FF2F80] text-[#FF2F80] hover:bg-[#FF2F80] hover:text-white transition-all font-normal">
              Login
            </button>
            <button className="w-full bg-[#236ADC] text-white font-normal text-[16px] px-4 py-3 rounded-2xl border-2 border-[#236ADC] transition-all hover:bg-white hover:text-[#236ADC]">
              Contact Sales
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;

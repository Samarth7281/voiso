import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

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

  return (
    <>
      <div className="fixed top-0 left-0 z-50 w-full h-[4.3125rem] bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-full">
          {/* Left side: Logo */}
          <div className="flex-shrink-0">
            <img
              src="https://voiso.com/wp-content/themes/voiso/static/images/logo-voiso-color.svg"
              alt="Voiso Logo"
              className="h-5 sm:h-6 w-auto"
            />
          </div>

          {/* Center: Desktop Navigation Menu */}
          <div className="hidden lg:flex flex-grow justify-center items-center space-x-6 text-[16px] font-[550] text-black">
            <span className="cursor-pointer hover:text-[#FF2F80] transition-colors">
              Solutions
            </span>
            <span className="cursor-pointer hover:text-[#FF2F80] transition-colors">
              Integrations
            </span>
            <span className="cursor-pointer hover:text-[#FF2F80] transition-colors">
              Pricing
            </span>
            <span className="cursor-pointer hover:text-[#FF2F80] transition-colors">
              Partners
            </span>
            <span className="cursor-pointer hover:text-[#FF2F80] transition-colors">
              About
            </span>
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
            <span className="cursor-pointer hover:text-[#FF2F80] transition-colors py-2">
              Solutions
            </span>
            <span className="cursor-pointer hover:text-[#FF2F80] transition-colors py-2">
              Integrations
            </span>
            <span className="cursor-pointer hover:text-[#FF2F80] transition-colors py-2">
              Pricing
            </span>
            <span className="cursor-pointer hover:text-[#FF2F80] transition-colors py-2">
              Partners
            </span>
            <span className="cursor-pointer hover:text-[#FF2F80] transition-colors py-2">
              About
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

import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed top-0 left-0 z-50 w-full h-[4.3125rem] bg-white border-b border-gray-200 transition-all duration-500 ease-in-out">
      <div className="max-w-[100%] mx-auto px-6 md:px-28 flex items-center h-full">
        {/* Left side: Logo + Menu */}
        <div className="flex items-center space-x-12">
          {/* Logo */}
          <img
            src="https://voiso.com/wp-content/themes/voiso/static/images/logo-voiso-color.svg"
            alt="Voiso Logo"
            className="h-[24px] w-auto"
          />

          {/* Navigation Menu (Desktop) */}
          <div className="hidden md:flex space-x-6 text-[16px] font-[550] text-black">
            <span className="cursor-pointer hover:text-[#FF2F80]">Solutions</span>
            <span className="cursor-pointer hover:text-[#FF2F80]">Integrations</span>
            <span className="cursor-pointer hover:text-[#FF2F80]">Pricing</span>
            <span className="cursor-pointer hover:text-[#FF2F80]">Partners</span>
            <span className="cursor-pointer hover:text-[#FF2F80]">About</span>
          </div>
        </div>

        {/* Right side: Buttons */}
        <div className="hidden md:flex items-center space-x-4 text-sm font-medium ml-auto">
          <button className="text-[16px] px-4 py-2 rounded-2xl border border-transparent hover:text-[#FF2F80] border-2 hover:border-[#FF2F80] transition font-normal">
            Login
          </button>
          <button className="bg-[#236ADC] text-white font-normal text-[16px] px-4 py-2 rounded-2xl border border-[#236ADC] border-2 transition hover:bg-white hover:text-[#236ADC]">
            Contact Sales
          </button>
        </div>

        {/* Hamburger Icon (Mobile) */}
        <div className="md:hidden ml-auto">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white px-6 py-4 space-y-4 shadow-md">
          <div className="flex flex-col space-y-2 text-[16px] font-medium text-black">
            <span className="cursor-pointer hover:text-[#FF2F80]">Solutions</span>
            <span className="cursor-pointer hover:text-[#FF2F80]">Integrations</span>
            <span className="cursor-pointer hover:text-[#FF2F80]">Pricing</span>
            <span className="cursor-pointer hover:text-[#FF2F80]">Partners</span>
            <span className="cursor-pointer hover:text-[#FF2F80]">About</span>
          </div>
          <div className="pt-4 border-t border-gray-200 grid grid-cols-2 gap-4">
            <button className="w-full text-[16px] px-4 py-2 rounded-2xl border border-[#FF2F80] hover:text-[#FF2F80] hover:border-[#FF2F80] transition font-normal">
              Login
            </button>
            <button className="w-full bg-[#236ADC] text-white font-normal text-[16px] px-4 py-2 rounded-2xl border border-[#236ADC] transition hover:bg-white hover:text-[#236ADC] hover:border-[#236ADC]">
              Contact Sales
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;

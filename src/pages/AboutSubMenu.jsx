import React from "react";

const AboutSubMenu = () => {
  return (
    <div className="w-full bg-white shadow-lg p-0 lg:p-0">
      <div className="flex flex-col lg:flex-row items-center lg:items-stretch w-full lg:mx-[128px] lg:w-[1264.8px] lg:h-full gap-6">
        {/* Who we are */}
        <div className="w-full lg:w-[268.2px] p-8 flex flex-col justify-between border border-gray-200 rounded-xl">
          <div className="space-y-4 text-center lg:text-left">
            <img
              src="user.svg"
              alt="user"
              className="w-6 h-6 mx-auto lg:mx-0"
            />
            <h3 className="text-lg font-semibold">Who we are</h3>
            <p className="text-sm text-gray-700">
              Discover Voiso's mission, values, and innovations in cloud-based
              contact center solutions powering businesses worldwide.
            </p>
          </div>
          <button className="w-full bg-gray-400 text-white py-2 mt-6 rounded-lg hover:bg-gray-500 transition">
            Explore
          </button>
        </div>
        {/* Infrastructure */}
        <div className="w-full lg:w-[268.2px] p-8 flex flex-col justify-between border border-gray-200 rounded-xl">
          <div className="space-y-4 text-center lg:text-left">
            <img
              src="stack.svg"
              alt="stack"
              className="w-6 h-6 mx-auto lg:mx-0"
            />
            <h3 className="text-lg font-semibold">Infrastructure</h3>
            <p className="text-sm text-gray-700">
              Learn how Voiso's global, secure, and reliable infrastructure
              ensures high-performance call connectivity and uptime.
            </p>
          </div>
          <button className="w-full bg-gray-400 text-white py-2 mt-6 rounded-lg hover:bg-gray-500 transition">
            Explore
          </button>
        </div>
        {/* Careers */}
        <div className="w-full lg:w-[268.2px] p-8 flex flex-col justify-between border border-gray-200 rounded-xl">
          <div className="space-y-4 text-center lg:text-left">
            <img
              src="node.svg"
              alt="node"
              className="w-6 h-6 mx-auto lg:mx-0"
            />
            <h3 className="text-lg font-semibold">Careers</h3>
            <p className="text-sm text-gray-700">
              Join Voiso's team to innovate cloud-based contact center
              technology and grow your career in a dynamic environment.
            </p>
          </div>
          <button className="w-full bg-gray-400 text-white py-2 mt-6 rounded-lg hover:bg-gray-500 transition">
            Explore
          </button>
        </div>
        {/* Customer Support + Sales Solutions */}
        <div className="hidden lg:flex w-full lg:w-[268.2px] p-8 flex-col justify-between border border-gray-200 rounded-xl">
          <div className="space-y-4 text-center lg:text-left">
            <img
              src="sub-menu.png"
              alt="sub-menu"
              className="w-24 h-24 object-contain mx-auto lg:mx-0"
            />
            <div>
              <h3 className="font-semibold text-base">Customer Support</h3>
              <p className="text-sm text-gray-700">
                How to Build a Winning Customer Service Strategy in 2025
              </p>
            </div>
            <hr className="border-gray-300" />
            <div>
              <h3 className="font-semibold text-base">Sales Solutions</h3>
              <p className="text-sm text-gray-700">
                The Future of Sales: Thriving in the Remote Selling Era
              </p>
            </div>
          </div>
          <button className="w-full bg-gray-400 text-white py-2 mt-6 rounded-lg hover:bg-gray-500 transition">
            Explore
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutSubMenu;

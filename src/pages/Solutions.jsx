import React from "react";

const Solutions = () => {
  return (
    <div className="relative w-full bg-white shadow-lg rounded-lg p-0 lg:p-0 lg:fixed lg:top-[68.8px] lg:bottom-[-445.237px] lg:w-[1520.8px] lg:h-[443.838px]">
      <div className="flex flex-col lg:flex-row items-center lg:items-stretch w-full lg:mx-[128px] lg:w-[1264.8px] lg:h-full">
        <div className="w-full lg:w-[268.2px] h-auto p-4 lg:p-6 space-y-0 sm:space-y-1 flex-shrink-0 flex flex-col items-center lg:items-start">
          <button className="w-full flex justify-between items-center p-3 text-left hover:text-[#FF2F80] rounded transition-colors duration-400">
            <span className="font-[550]">By Use Case</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-3.5 w-3.5 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
          <button className="w-full flex justify-between items-center p-3 text-left hover:text-[#FF2F80] rounded transition-colors duration-400">
            <span className="font-[550]">By Industry</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-3.5 w-3.5 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>

        <div className="w-full lg:w-[582.8px] h-auto p-4 lg:p-6 border-t lg:border-t-0 lg:border-l lg:border-r border-gray-200 flex flex-col items-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-6 gap-y-6 w-full">
            {/* Sales */}
            <div className="flex gap-4 items-start">
              <img src="coin.svg" alt="coin" className="w-6 h-6 mt-1" />
              <div>
                <h3 className="text-base font-semibold">Sales</h3>
                <p className="text-sm">
                  Optimize outbound calls with AI-driven software for better
                  efficiency, connections, and conversions.
                </p>
              </div>
            </div>

            {/* Support */}
            <div className="flex gap-4 items-start">
              <img src="sms.svg" alt="sms" className="w-6 h-6 mt-1" />
              <div>
                <h3 className="text-base font-semibold">Support</h3>
                <p className="text-sm">
                  Enhance inbound conversations with intelligent routing,
                  real-time insights, and seamless interactions.
                </p>
              </div>
            </div>

            {/* Remote */}
            <div className="flex gap-4 items-start">
              <img src="call.svg" alt="call" className="w-6 h-6 mt-1" />
              <div>
                <h3 className="text-base font-semibold">Remote</h3>
                <p className="text-sm">
                  Run a remote call center with cloud-based software for
                  seamless connectivity, scalability, and team efficiency.
                </p>
              </div>
            </div>

            {/* AI Contact Center Tools */}
            <div className="flex gap-4 items-start">
              <img src="target.svg" alt="target" className="w-6 h-6 mt-1" />
              <div>
                <h3 className="text-base font-semibold">
                  AI Contact Center Tools
                </h3>
                <p className="text-sm">
                  Full suite of AI-powered tools, from predictive dialing to
                  conversation intelligence.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="hidden lg:flex w-full lg:w-[268.2px] h-auto p-4 lg:p-6 space-y-2 flex-col items-center lg:items-start">
          <img
            src="sub-menu.png"
            alt="sub-menu"
            className="w-24 h-24 object-contain mb-2"
          />
          <h3 className="font-medium">Customer Support</h3>
          <p className="text-[14px] font-normal text-center lg:text-left">
            How to Build a Winning Customer Service Strategy in 2025
          </p>
          <hr className="border-t border-gray-300 my-2 w-full" />
          <h3 className="font-medium">Sales Solutions</h3>
          <p className="text-[14px] font-thin text-center lg:text-left">
            The Future of Sales: Thriving in the Remote Selling Era
          </p>
        </div>
      </div>
    </div>
  );
};

export default Solutions;

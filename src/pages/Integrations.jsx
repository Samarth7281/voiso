import React from "react";
import Card from "../components/Card";
import CarouselSection from "../components/Carousel";
import Footer from "../components/Footer";

const card = [
  {
    src: "icon-crm-calls.png",
    title: "Handle calls in CRM",
    description:
      "Make and receive calls while in your CRM by using Voiso’s built-in softphone",
    bgColor: "#073469",
    textColor: "#c8e0fc",
  },
  {
    src: "call.svg",
    title: "Use click-to-call",
    description:
      "Initiate calls with a click by clicking the the contact’s phone number in your CRM.",
    bgColor: "#088569",
    textColor: "#a3ffd2",
  },
  {
    src: "icon-screen-pop.png",
    title: "Display info immediately",
    description:
      "Upon entering a call, the contact’s details and history appear automatically.",
    bgColor: "#ffd4c2",
    textColor: "#d64000",
  },
  {
    src: "icon-import-lists.png",
    title: "Import calling lists",
    description:
      "Import contacts into Voiso and make outbound calls with our AI Predictive Dialer.",
    bgColor: "#fcd2eb",
    textColor: "#8d0b56",
  },
  {
    src: "icon-call-summary.png",
    title: "Summarize calls with AI",
    description:
      "Voiso’s AI Speech Analytics functions can generate call summaries in your CRM.",
    bgColor: "#391f44",
    textColor: "#cc66ef",
  },
  {
    src: "icon-valuable-data.png",
    title: "Unlock valuable data",
    description:
      "Benefit from call recordings, transcripts and keyword analysis for every call in Voiso",
    bgColor: "#0a0a0a",
    textColor: "#ffffff",
  },
];

const carousels = [
  {
    badge: "Sales contact center software",
    title: "Accelerate your sales",
    description:
      "Voiso helps your sales team connect faster and convert more. With omnichannel communication, predictive dialer, answering machine detection, and local caller ID, it maximizes call efficiency and ensures more conversations with the right prospects.",
    buttonText: "Explore",
    image: "carousel21.png",
    bgColor: "#073469",
    textColor: "#c8e0fc",
  },
  {
    badge: "Support contact center software",
    title: "Elevate your customer support",
    description:
      "Voiso helps you deliver faster, more efficient customer support. With visual flow building, AI-powered insights, and self-service chatbots, it reduces wait times and ensures every caller reaches the right agent—boosting satisfaction and efficiency.",
    buttonText: "Explore",
    image: "carousel22.png",
    bgColor: "#088569",
    textColor: "#a3ffd2",
  },
  {
    badge: "Remote contact center software",
    title: "Empower your remote agents",
    description:
      "Voiso keeps your remote team connected and productive. With a cloud-based platform, global call routing, and real-time monitoring, agents can work from anywhere while maintaining seamless communication and high performance.",
    buttonText: "Explore",
    image: "carousel23.png",
    bgColor: "#ffd4c2",
    textColor: "#d64000",
  },
];

const Integrations = () => {
  return (
    <>
      <div className="w-full">
        <div className="flex flex-col lg:flex-row mx-4 lg:mx-[128px] pt-8 lg:pt-[116px] pb-8 lg:pb-[22px]">
          <div className="w-full lg:w-[600.4px] h-auto lg:h-[505.4px] mb-4 lg:mb-0 lg:pr-[32px] space-y-4 text-center lg:text-left">
            {/* Left content */}
            <div className="inline-block p-[1px] bg-gradient-to-r from-[#FF2F80] to-blue-500 rounded-2xl ">
              <h3 className="text-[16px] text-[#1D1D1F] px-5 py-1 bg-white rounded-2xl w-max">
                Integrations
              </h3>
            </div>

            <h1 className="text-4xl md:text-[64px] leading-none">
              Connect Voiso with the tools you love
            </h1>
            <p className="text-lg md:text-[22px] text-[#6E6E6E]">
              Sync with your favorite apps in just a few clicks to leverage the
              power of Voiso’s contact center features together with other
              leading platforms.
            </p>
            <div className="relative w-full max-w-md ">
              <input
                type="text"
                placeholder="Enter your work email"
                className="w-full pl-4 pr-32 py-3 md:pl-6 md:pr-36 md:py-4 border border-gray-300 rounded-2xl focus:outline-none bg-white bg-opacity-80 text-sm md:text-base"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 px-3 py-2 md:px-4 md:pl-5 md:py-3 bg-blue-600 text-white text-sm md:text-[16px] rounded-xl md:rounded-2xl hover:bg-blue-700">
                Contact Sales
              </button>
            </div>

            <p className="text-[12px] text-[#6E6E6E]">
              By clicking "Contact Sales" you agree to Voiso's Privacy Policy
              and Terms of Service.
            </p>
          </div>
          <div className="w-full lg:w-[600.4px] h-auto lg:h-[505.4px] lg:pl-[32px] mt-8 lg:mt-16">
            {/* Right content */}
            <img src="integrations_slider.png" alt="Voiso Platform" />
          </div>
        </div>
      </div>

      <div className="mt-[88px] mb-[48px] mx-[128px] w-[1264.8px] h-[841.8px] bg-white">
        <div className="w-[1200.8px] h-[697.8px] py-[72px] px-[32px] bg-white">
          <div className="w-[1200.8px] h-[115.2px] text-center">
            <h1 className="text-[64px] font-bold leading-tight">
              How Voiso levels up
              <br /> CRMs and other apps
            </h1>
          </div>
          <div className="w-[1200.8px] h-[534.6px] bg-white mt-4 p-12">
            {/* Content goes here */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ">
              {card.map((item, index) => (
                <Card
                  key={index}
                  src={item.src}
                  title={item.title}
                  description={item.description}
                  bgColor={item.bgColor}
                  textColor={item.textColor}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <CarouselSection carousels={carousels} />
      <div
        className="mt-[64px]"
        style={{ width: "1520.8px", height: "942.1px" }}
      >
        <div
          className="h-[940.1px] mx-[128px] bg-[#0b0d14] rounded-[55px]"
          style={{ width: "1262.8px" }}
        >
          <div
            className="p-[48px] mx-[207.4px] text-center"
            style={{ width: "752px", height: "844.1px" }}
          >
            {/* Text Content */}
            <h1 className="text-[64px] mb-2 bg-gradient-to-r from-[#FF2F80] via-[#FF2F80] to-[#438CFF] bg-clip-text text-transparent">
              Get started in less than 24 hours
            </h1>

            <p className="text-center mb-6 text-[#B3B3B3] text-[18px]">
              Let's chat about a solution that works for you
            </p>

            {/* Form Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Left Column */}
              <div className="flex flex-col space-y-4">
                <input
                  type="text"
                  placeholder="First Name"
                  className="p-3 rounded-lg bg-[#737373] border border-gray-400 text-white placeholder-gray-200"
                />
                <input
                  type="text"
                  placeholder="Company Name"
                  className="p-3 rounded-lg bg-[#737373] border border-gray-400 text-white placeholder-gray-200"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="p-3 rounded-lg bg-[#737373] border border-gray-400 text-gray-600 placeholder-gray-200"
                />
              </div>

              {/* Right Column */}
              <div className="flex flex-col space-y-4">
                <input
                  type="text"
                  placeholder="Last Name"
                  className="p-3 rounded-lg bg-[#737373] border border-gray-400 text-white placeholder-gray-200"
                />
                <input
                  type="text"
                  placeholder="Phone Number"
                  className="p-3 rounded-lg bg-[#737373] border border-gray-400 text-white placeholder-gray-200"
                />
                <select
                  defaultValue="India"
                  className="p-3 rounded-lg bg-[#737373] border border-gray-400 text-white placeholder-gray-200"
                >
                  <option value="India" >India</option>
                  <option value="United States">United States</option>
                  <option value="United Kingdom">United Kingdom</option>
                  <option value="Canada">Canada</option>
                  <option value="Germany">Germany</option>
                  <option value="France">France</option>
                  <option value="Australia">Australia</option>
                  <option value="Singapore">Singapore</option>
                  <option value="Japan">Japan</option>
                  <option value="Brazil">Brazil</option>
                </select>
              </div>

              {/* 7th Field – Full Width Dropdown */}
              <div className="col-span-1 md:col-span-2">
                <select
                  defaultValue=""
                  className="w-full p-3 rounded-lg bg-[#737373] border border-gray-400 text-white placeholder-gray-200"
                >
                  <option value="" disabled>
                    Number of contacts
                  </option>
                  <option value="1-4">1–4</option>
                  <option value="5-9">5–9</option>
                  <option value="10-24">10–24</option>
                  <option value="25-49">25–49</option>
                  <option value="50-99">50–99</option>
                  <option value="100+">100+</option>
                </select>
              </div>

              {/* Marketing Consent Checkbox */}
              <div className="col-span-1 md:col-span-2 flex items-start mt-4">
                <input type="checkbox" id="marketing" className="mr-2 mt-1" />
                <label htmlFor="marketing" className="text-sm text-gray-700">
                  I agree to receive marketing communications from Voiso
                </label>
              </div>

              {/* Submit Button */}
              <div className="col-span-1 md:col-span-2 mt-4">
                <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition">
                  Submit
                </button>
              </div>

              {/* Legal Disclaimer */}
              <div className="col-span-1 md:col-span-2 mt-3">
                <p className="text-xs text-gray-600">
                  By clicking "Submit", you agree that we may process your
                  personal data in accordance with our Privacy Policy and you
                  accept our Terms and Conditions.
                  <br /><br/>* For licensed industries such as Healthcare, Telco,
                  Collections, Fintech, and similar regulated sectors, we
                  require you to undergo a compliance procedure and submit
                  country-specific licenses and relevant company documentation
                  for each jurisdiction in which you operate.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Integrations;

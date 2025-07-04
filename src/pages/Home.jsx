import React from "react";
import Footer from "../components/Footer";
import CarouselSection from "../components/Carousel";
import Solutions from "./Solutions";

const sectorIcons = {
  BPOs: "call.svg",
  "Travel & Hospitality": "plane.svg",
  Fintech: "fintech.svg",
  Healthcare: "heartrate.svg",
  "IT & Technology": "comp.svg",
  eCommerce: "commerce.svg",
  EdTech: "education.svg",
  Retail: "cart.svg",
  iGaming: "gaming.svg",
  Recruitment: "target.svg",
  "Non Profit": "hands.svg",
  Insurance: "document.svg",
  Telemarketing: "outbound.svg",
  Loans: "coin.svg",
  Transportation: "truck.svg",
};

const carousels = [
  {
    badge: "Embrace AI",
    title: "Elevate engagement with AI-powered tools",
    description:
      "Boost call volume by 400% with our AI Predictive Dialer and gain deep insights with speech analytics, transcriptions, sentiment analysis, summaries, and more — all available in 10+ languages.",
    buttonText: "Explore",
    image: "carousel1.png",
    bgColor: "#073469",
    textColor: "#c8e0fc",
  },
  {
    badge: "Intelligent workflows",
    title: "Smarter flows,faster resolutions",
    description:
      "Build and automate interaction flows with Voiso's no-code interface. Set up IVR menus, intelligent routing, and chatbot interactions to ensure fast, seamless customer support.",
    buttonText: "Explore",
    image: "carousel2.png",
    bgColor: "#088569",
    textColor: "#a3ffd2",
  },
  {
    badge: "Constant awareness",
    title: "Track performance in real time",
    description:
      "Monitor agent activity, call volumes, and queue statuses with customizable dashboards. Get instant insights to optimize workflows, improve efficiency, and make data-driven decisions.",
    buttonText: "Explore",
    image: "carousel3.png",
    bgColor: "#ffd4c2",
    textColor: "#d64000",
  },
  {
    badge: "CRM integrations",
    title: "Sync contacts and track interactions",
    description:
      "Connect Voiso with HubSpot, Salesforce, Zoho and more to automate workflows, sync customer data, and enhance productivity. Reduce manual tasks and ensure a smooth, connected experience for your team.",
    buttonText: "Learn more",
    image: "carousel4.png",
    bgColor: "#000000",
    textColor: "#ffffff",
  },
];

// Accept showSolutions and setShowSolutions as props for compatibility
const Home = (props) => {
  return (
    <div>
      {/* Main content */}
      <main className="w-full">
        <div className="w-full">
          <div className="flex flex-col lg:flex-row mx-4 lg:mx-[128px] pt-8 lg:pt-[116px] pb-8 lg:pb-[22px]">
            <div className="w-full lg:w-[600.4px] h-auto lg:h-[505.4px] mb-4 lg:mb-0 lg:pr-[32px] space-y-4 text-center lg:text-left">
              {/* Left content */}
              <div className="inline-block p-[1px] bg-gradient-to-r from-[#FF2F80] to-blue-500 rounded-2xl ">
                <h3 className="text-[16px] text-[#1D1D1F] px-5 py-1 bg-white rounded-2xl w-max">
                  AI Contact Center Software
                </h3>
              </div>

              <h1 className="text-4xl md:text-[64px] leading-none">
                Every interaction,
                <br /> a human
                <br /> connection.
              </h1>
              <p className="text-lg md:text-[22px] text-[#6E6E6E]">
                Unify customer interactions across all channels with an
                intelligent, AI-powered contact center platform — boosting agent
                efficiency and delivering seamless customer experiences.
              </p>
              <div className="relative w-full max-w-md mx-auto">
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
              <img src="first-right.png" alt="Voiso Platform" />
            </div>
          </div>
        </div>

        <div className="w-full max-w-[1160px] mx-auto px-6 py-[24px] flex flex-wrap justify-center items-center gap-4 sm:gap-y-8">
          {[
            "1.svg",
            "2.svg",
            "3.svg",
            "4.svg",
            "5.svg",
            "6.svg",
            "7.svg",
            "8.svg",
            "9.svg",
            "10.svg",
          ].map((src, i) => (
            <div
              key={i}
              className="w-2/5 sm:w-1/4 md:w-1/5 lg:w-[206.4px] h-[24px] flex items-center justify-center"
            >
              <img
                src={src}
                alt={` ${i + 1}`}
                className="h-full object-contain"
              />
            </div>
          ))}
        </div>
        <CarouselSection carousels={carousels} />

        <div className="w-full">
          <div className="flex flex-col lg:flex-row mx-4 lg:mx-[128px] pt-4 lg:pt-4">
            <div className="w-full lg:w-[600.4px] lg:h-auto lg:mb-0 lg:pr-[32px] space-y-4 text-center lg:text-left">
              <div className="inline-block p-[1px] bg-gradient-to-r from-[#FF2F80] to-blue-500 rounded-2xl">
                <h3 className="text-[16px] text-[#1D1D1F] px-5 py-1 bg-white rounded-2xl w-max">
                  Many channels, one platform
                </h3>
              </div>
              <h1 className="text-4xl md:text-[64px] leading-none">
                Omnichannel
              </h1>
              <p className="text-lg md:text-[22px] text-[#6E6E6E]">
                Deliver a seamless CX with Voiso's Omnichannel. Unify voice,
                messaging apps, voice, and SMS in one platform for easy
                management. Provide personalized support, boost satisfaction,
                and strengthen relationships.
              </p>
              <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-3">
                <button className="bg-white text-[#073469] border border-[#c2c3c4] rounded-full px-6 py-2 font-semibold text-[16px] transition-colors duration-300 ease-in-out hover:text-[#FF2F80] hover:border-[#FF2F80] hover:bg-gray-100">
                  Explore Omnichannel
                </button>
                <button className="bg-blue-600 text-white text-[16px] font-normal px-6 py-2 rounded-2xl hover:bg-blue-700 transition">
                  Contact Sales
                </button>
              </div>
            </div>
            <div className="w-full lg:w-[600.4px] lg:h-auto lg:pl-[32px] mt-8 lg:mt-16"></div>
          </div>
        </div>

        <div className="w-full">
          <div className="flex flex-col lg:flex-row mx-4 lg:mx-[128px] pb-8">
            <div className="w-full lg:w-[600.4px] lg:h-auto mb-4 lg:mb-0 lg:pr-[32px] space-y-4"></div>
            <div className="w-full lg:w-[600.4px] lg:h-auto lg:pl-[32px] mt-8 space-y-4 text-center lg:text-left">
              <div className="inline-block p-[1px] bg-gradient-to-r from-[#FF2F80] to-blue-500 rounded-2xl">
                <h3 className="text-[16px] text-[#1D1D1F] px-5 py-1 bg-white rounded-2xl w-max">
                  400% more calls per hour
                </h3>
              </div>
              <h1 className="text-4xl md:text-[64px] leading-none">
                AI Predictive Dialer
              </h1>
              <p className="text-lg md:text-[22px] text-[#6E6E6E]">
                Boost contact rates and agent productivity with Voiso's
                Predictive Dialer. The dialer intelligently dials numbers based
                on agent availability, reducing idle time and maximizing
                connections to drive sales and efficiency.
              </p>
              <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-3">
                <button className="bg-white text-[#073469] border border-[#c2c3c4] rounded-full px-6 py-2 font-semibold text-[16px] transition-colors duration-300 ease-in-out hover:text-[#FF2F80] hover:border-[#FF2F80] hover:bg-gray-100">
                  Explore Predictive Dialer
                </button>
                <button className="bg-blue-600 text-white text-[16px] font-normal px-6 py-2 rounded-2xl hover:bg-blue-700 transition">
                  Contact Sales
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full">
          <div className="flex flex-col lg:flex-row mx-4 lg:mx-[128px] pb-8">
            <div className="w-full lg:w-[600.4px] lg:h-auto mb-4 lg:mb-0 lg:pr-[32px] space-y-4 text-center lg:text-left">
              <div className="inline-block p-[1px] bg-gradient-to-r from-[#FF2F80] to-blue-500 rounded-2xl">
                <h3 className="text-[16px] text-[#1D1D1F] px-5 py-1 bg-white rounded-2xl w-max">
                  Conversation intelligence
                </h3>
              </div>
              <h1 className="text-4xl md:text-[64px] leading-none">
                AI Speech Analytics
              </h1>
              <p className="text-lg md:text-[22px] text-[#6E6E6E]">
                Unlock insights with AI Speech Analytics. Transcribe calls,
                analyze sentiment, and identify key topics automatically.
                Improve agent performance, enhance customer experience, and
                drive smarter decisions.
              </p>
              <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-3">
                <button className="bg-white text-[#073469] border border-[#c2c3c4] rounded-full px-6 py-2 font-semibold text-[16px] transition-colors duration-300 ease-in-out hover:text-[#FF2F80] hover:border-[#FF2F80] hover:bg-gray-100">
                  Explore Speech Analytics
                </button>
                <button className="bg-blue-600 text-white text-[16px] font-normal px-6 py-2 rounded-2xl hover:bg-blue-700 transition">
                  Contact Sales
                </button>
              </div>
            </div>
            <div className="w-full lg:w-[600.4px] lg:h-auto lg:pl-[32px] mt-8 space-y-4"></div>
          </div>
        </div>

        <div className="w-full">
          <div className="flex flex-col lg:flex-row mx-4 lg:mx-[128px] pb-8">
            <div className="w-full lg:w-[600.4px] lg:h-auto mb-4 lg:mb-0 lg:pr-[32px] space-y-4"></div>
            <div className="w-full lg:w-[600.4px] lg:h-auto lg:pl-[32px] mt-8 space-y-4 text-center lg:text-left">
              <div className="inline-block p-[1px] bg-gradient-to-r from-[#FF2F80] to-blue-500 rounded-2xl">
                <h3 className="text-[16px] text-[#1D1D1F] px-5 py-1 bg-white rounded-2xl w-max">
                  Design, automate, optimize
                </h3>
              </div>
              <h1 className="text-4xl md:text-[64px] leading-none">
                Flow Builder
              </h1>
              <p className="text-lg md:text-[22px] text-[#6E6E6E]">
                Easily create custom call flows with Voiso's no-code,
                drag-and-drop Flow Builder. Design IVR menus, set up intelligent
                routing, and integrate with your CRM for a seamless customer
                experience. Connect voice, chat, and messaging channels for
                unified interactions.
              </p>
              <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-3">
                <button className="bg-white text-[#073469] border border-[#c2c3c4] rounded-full px-6 py-2 font-semibold text-[16px] transition-colors duration-300 ease-in-out hover:text-[#FF2F80] hover:border-[#FF2F80] hover:bg-gray-100">
                  Explore Flow Builder
                </button>
                <button className="bg-blue-600 text-white text-[16px] font-normal px-6 py-2 rounded-2xl hover:bg-blue-700 transition">
                  Contact Sales
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full">
          <div className="flex flex-col lg:flex-row mx-4 lg:mx-[128px] pb-8">
            <div className="w-full lg:w-[600.4px] lg:h-auto mb-4 lg:mb-0 lg:pr-[32px] space-y-4 text-center lg:text-left">
              <div className="inline-block p-[1px] bg-gradient-to-r from-[#FF2F80] to-blue-500 rounded-2xl">
                <h3 className="text-[16px] text-[#1D1D1F] px-5 py-1 bg-white rounded-2xl w-max">
                  Outbound
                </h3>
              </div>
              <h1 className="text-4xl md:text-[64px] leading-none">
                Accelerate your sales
              </h1>
              <p className="text-lg md:text-[22px] text-[#6E6E6E]">
                Voiso helps your sales team connect faster and convert more.
                With omnichannel communication, predictive dialer, answering
                machine detection, and local caller ID, it maximizes call
                efficiency and ensures more conversations with the right
                prospects.
              </p>
              <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-3">
                <button className="bg-white text-[#073469] border border-[#c2c3c4] rounded-full px-6 py-2 font-semibold text-[16px] transition-colors duration-300 ease-in-out hover:text-[#FF2F80] hover:border-[#FF2F80] hover:bg-gray-100">
                  Explore Sales
                </button>
                <button className="bg-blue-600 text-white text-[16px] font-normal px-6 py-2 rounded-2xl hover:bg-blue-700 transition">
                  Contact Sales
                </button>
              </div>
            </div>
            <div className="w-full lg:w-[600.4px] lg:h-auto lg:pl-[32px] mt-8 space-y-4"></div>
          </div>
        </div>

        <div className="w-full">
          <div className="flex flex-col lg:flex-row mx-4 lg:mx-[128px] pb-8">
            <div className="w-full lg:w-[600.4px] lg:h-auto mb-4 lg:mb-0 lg:pr-[32px] space-y-4"></div>
            <div className="w-full lg:w-[600.4px] lg:h-auto lg:pl-[32px] mt-8 space-y-4 text-center lg:text-left">
              <div className="inline-block p-[1px] bg-gradient-to-r from-[#FF2F80] to-blue-500 rounded-2xl">
                <h3 className="text-[16px] text-[#1D1D1F] px-5 py-1 bg-white rounded-2xl w-max">
                  Inbound
                </h3>
              </div>
              <h1 className="text-4xl md:text-[64px] leading-none">
                Elevate customer support
              </h1>
              <p className="text-lg md:text-[22px] text-[#6E6E6E]">
                Voiso helps you deliver faster, more efficient customer support.
                With visual flow building, AI-powered insights, and self-service
                chatbots, it reduces wait times and ensures every caller reaches
                the right agent—boosting satisfaction and efficiency.
              </p>
              <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-3">
                <button className="bg-white text-[#073469] border border-[#c2c3c4] rounded-full px-6 py-2 font-semibold text-[16px] transition-colors duration-300 ease-in-out hover:text-[#FF2F80] hover:border-[#FF2F80] hover:bg-gray-100">
                  Explore Support
                </button>
                <button className="bg-blue-600 text-white text-[16px] font-normal px-6 py-2 rounded-2xl hover:bg-blue-700 transition">
                  Contact Sales
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full">
          <div className="flex flex-col lg:flex-row mx-4 lg:mx-[128px] pb-8">
            <div className="w-full lg:w-[600.4px] lg:h-auto mb-4 lg:mb-0 lg:pr-[32px] space-y-4 text-center lg:text-left">
              <div className="inline-block p-[1px] bg-gradient-to-r from-[#FF2F80] to-blue-500 rounded-2xl">
                <h3 className="text-[16px] text-[#1D1D1F] px-5 py-1 bg-white rounded-2xl w-max">
                  Remote
                </h3>
              </div>
              <h1 className="text-4xl md:text-[64px] leading-none">
                Empower remote agents
              </h1>
              <p className="text-lg md:text-[22px] text-[#6E6E6E]">
                Voiso keeps your remote team connected and productive. With a
                cloud-based platform, global call routing, and real-time
                monitoring, agents can work from anywhere while maintaining
                seamless communication and high performance.
              </p>
              <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-3">
                <button className="bg-white text-[#073469] border border-[#c2c3c4] rounded-full px-6 py-2 font-semibold text-[16px] transition-colors duration-300 ease-in-out hover:text-[#FF2F80] hover:border-[#FF2F80] hover:bg-gray-100">
                  Explore Virtual Software
                </button>
                <button className="bg-blue-600 text-white text-[16px] font-normal px-6 py-2 rounded-2xl hover:bg-blue-700 transition">
                  Contact Sales
                </button>
              </div>
            </div>
            <div className="w-full lg:w-[600.4px] lg:h-auto lg:pl-[32px] mt-8 space-y-4"></div>
          </div>
        </div>

        <div className="py-12 px-4 sm:px-8 md:px-16 lg:px-[100px] my-12 mx-4 md:mx-[128px] bg-[#0b0d14] rounded-3xl">
          <div className="flex flex-col lg:flex-row pt-4 lg:pt-16">
            {/* Content Section */}
            <div className="w-full lg:w-[600.4px] h-auto mb-4 lg:mb-0 lg:pr-[32px] space-y-4 text-center lg:text-left">
              <div className="inline-block p-[1px] bg-gradient-to-r from-[#FF2F80] to-blue-500 rounded-2xl">
                <h3 className="text-[16px] text-white px-5 py-1 bg-[#0b0d14] rounded-2xl w-max opacity-100">
                  Integrations
                </h3>
              </div>
              <h1 className="text-4xl md:text-[64px] leading-none text-white">
                Seamless integration with your CRM
              </h1>
              <p className="text-lg md:text-[22px] text-[#6E6E6E]">
                Sync with your favorite apps in just a few clicks to leverage
                the power of Voiso's contact center features.
              </p>
              <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-3">
                <button className="bg-white text-[#073469] border border-[#c2c3c4] rounded-full px-6 py-2 font-semibold text-[16px] transition-colors duration-300 ease-in-out hover:text-[#FF2F80] hover:border-[#FF2F80] hover:bg-gray-100">
                  Explore All Integrations
                </button>
                <button className="bg-blue-600 text-white text-[16px] font-normal px-6 py-2 rounded-2xl hover:bg-blue-700 transition">
                  Contact Sales
                </button>
              </div>
            </div>

            {/* Image Section */}
            <div className="w-full lg:w-[600.4px] h-auto lg:pl-[32px] mt-8 lg:mt-0 space-y-4">
              <img src="integrations.svg" alt="integrations" />
            </div>
          </div>
          <div className="flex flex-col justify-center items-center space-y-4 mt-8 lg:mt-0">
            <div className="inline-block p-[1px] bg-gradient-to-r from-[#FF2F80] to-blue-500 rounded-2xl">
              <h3 className="text-[16px] text-white px-5 py-1 bg-[#0b0d14] rounded-2xl w-max opacity-100">
                Pricing
              </h3>
            </div>
            <h1 className="text-4xl md:text-[64px] leading-none text-white text-center">
              Prices and features <br /> suitable for all sizes
            </h1>
            <p className="text-lg md:text-[22px] text-[#6E6E6E] text-center">
              Whether you are an enterprize or a medium-sized business, we've
              built a <br />
              flexible platform that scales with you while providing a fair
              pricing based on your needs.
            </p>
            <button className="bg-blue-600 text-white text-[16px] font-normal px-6 py-2 rounded-2xl hover:bg-blue-700 transition">
              Go to pricing
            </button>
          </div>
        </div>

        <div className="w-full p-4 sm:p-8 md:p-12 lg:p-24">
          <div className="flex flex-col lg:flex-row mx-4 lg:mx-[128px] pb-8">
            {/* Left Column */}
            <div className="w-full lg:w-[600.4px] h-auto mb-4 lg:mb-0 lg:pr-[32px] space-y-4 text-center lg:text-left">
              <div className="inline-block p-[1px] bg-gradient-to-r from-[#FF2F80] to-blue-500 rounded-2xl">
                <h3 className="text-[16px] text-[#1D1D1F] px-5 py-1 bg-white rounded-2xl w-max">
                  Industries
                </h3>
              </div>
              <h1 className="text-4xl md:text-[64px] leading-none">
                Built for your industry
              </h1>
              <p className="text-lg md:text-[22px] text-[#6E6E6E]">
                Our platform streamlines the management of high-performing
                contact centers, allowing businesses to deliver more value to
                their customers.
              </p>
            </div>

            {/* Right Column – Buttons */}

            <div className="w-full lg:w-[600.4px] h-auto lg:pl-[32px] mt-8 lg:mt-0 grid grid-cols-1 sm:grid-cols-2 gap-2">
              {Object.keys(sectorIcons).map((sector) => (
                <button
                  key={sector}
                  className="w-full flex items-center justify-between px-2 py-1.5 bg-white rounded-xl shadow-sm hover:bg-[#e6e3e3] transition-colors duration-200"
                >
                  {/* Left side with icon and label */}
                  <div className="flex items-center space-x-2">
                    <img
                      src={`${sectorIcons[sector]}`}
                      alt={sector}
                      className="h-4 w-4"
                    />
                    <span>{sector}</span>
                  </div>

                  {/* Right arrow icon */}
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
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;

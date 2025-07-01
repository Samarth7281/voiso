import React from "react";
import Card from "../components/Card";
import Footer from "../components/Footer";

const card = [
  {
    src: "portfolio.png",
    title: "Broaden your portfolio",
    description:
      "Add a leading contact center platform to your services to boost client acquisition.",
    bgColor: "#073469",
    textColor: "#c8e0fc",
  },
  {
    src: "stonks.png",
    title: "Generate new revenue",
    description:
      "Earn up to 30% of lifetime recurring revenue by helping Voiso win new clients.",
    bgColor: "#088569",
    textColor: "#a3ffd2",
  },
  {
    src: "diamond.png",
    title: "Give clients more value",
    description:
      "Delight clients with a platform equipped with 200+ features for their contact center.",
    bgColor: "#ffd4c2",
    textColor: "#d64000",
  },
];

const Partners = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="w-full">
        <div className="flex flex-col lg:flex-row mx-4 lg:mx-[128px] pt-8 lg:pt-[116px] pb-8 lg:pb-[22px]">
          <div className="w-full lg:w-1/2 h-auto mb-4 lg:mb-0 lg:pr-8 space-y-5 text-center lg:text-left">
            {/* Left content */}
            <div className="inline-block p-[1px] bg-gradient-to-r from-[#FF2F80] to-blue-500 rounded-2xl ">
              <h3 className="text-[16px] text-[#1D1D1F] px-5 py-1 bg-white rounded-2xl w-max">
                Voiso Partner Program
              </h3>
            </div>

            <h1 className="text-4xl md:text-[64px] leading-none">
              Unlocking new opportunities together
            </h1>
            <p className="text-lg md:text-[22px] text-[#6E6E6E]">
              Through our technology, solution and affiliate programs, we offer
              partners a leading AI-driven contact center software with all the
              support and resources you need.
            </p>
          </div>
          <div className="w-full lg:w-1/2 h-auto lg:pl-8 mt-8 lg:mt-16 flex items-center justify-center">
            {/* Right content (empty for now) */}
          </div>
        </div>
      </div>

      {/* Cards Section */}
      <div className="w-full max-w-[1264px] mx-auto mb-12 px-4">
        <div className="w-full py-12 px-0 md:px-8 bg-white">
          <div className="w-full text-center mb-8">
            <h1 className="text-4xl md:text-[64px] font-bold leading-tight">
              Why partner with Voiso?
            </h1>
          </div>
          <div className="w-full bg-white mt-4 p-0 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
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

      {/* Partner Programs Section */}
      <div className="w-full">
        <h1 className="text-4xl md:text-[64px] text-center font-bold leading-tight">
          Our partner programs
        </h1>
        {/* Technology Partners */}
        <div className="flex flex-col lg:flex-row mx-4 lg:mx-[128px] pt-8 lg:pt-[116px] pb-8 lg:pb-[22px]">
          <div className="w-full lg:w-1/2 h-auto mb-4 lg:mb-0 lg:pr-8 space-y-5 text-center lg:text-left">
            <div className="inline-block p-[1px] bg-gradient-to-r from-[#FF2F80] to-blue-500 rounded-2xl ">
              <h3 className="text-[16px] text-[#1D1D1F] px-5 py-1 bg-white rounded-2xl w-max">
                Technology partners
              </h3>
            </div>
            <h1 className="text-4xl md:text-[64px] leading-none">
              Expand your reach and offerings
            </h1>
            <p className="text-lg md:text-[22px] text-[#6E6E6E]">
              Complement your platform with Voiso's contact center software and
              boost your presence in one of the world's fastest-growing markets.
              Voiso seamlessly integrates with CRMs, ERPs, PBXs, and DID
              providers, giving you and your clients a powerful and
              feature-filled omnichannel solution.
            </p>
            <button className="px-4 py-2 bg-[#236ADC] text-white rounded-full">
              Get in Touch
            </button>
          </div>
          <div className="w-full lg:w-1/2 h-auto lg:pl-8 mt-8 lg:mt-16 flex items-center justify-center">
            {/* Right content (empty for now) */}
          </div>
        </div>
        {/* Solution Partners */}
        <div className="flex flex-col lg:flex-row mx-4 lg:mx-[128px] pb-8">
          <div className="w-full lg:w-1/2 h-auto mb-4 lg:mb-0 lg:pr-8 space-y-4"></div>
          <div className="w-full lg:w-1/2 h-auto lg:pl-8 mt-8 space-y-4 text-center lg:text-left">
            <div className="inline-block p-[1px] bg-gradient-to-r from-[#FF2F80] to-blue-500 rounded-2xl">
              <h3 className="text-[16px] text-[#1D1D1F] px-5 py-1 bg-white rounded-2xl w-max">
                Solution partners
              </h3>
            </div>
            <h1 className="text-4xl md:text-[64px] leading-none">
              Help businesses achieve their full potential
            </h1>
            <p className="text-lg md:text-[22px] text-[#6E6E6E]">
              Our program caters to consultants, system integrators, and service
              providers who want to deliver contact center solutions to their
              clients. Gain access to resources, training, and support enabling
              you to design and implement Voiso's AI-driven contact center
              software and meet the unique needs of your clients.
            </p>
            <button className="px-4 py-2 bg-[#236ADC] text-white rounded-full">
              Get in Touch
            </button>
          </div>
        </div>
        {/* Affiliate Partners */}
        <div className="flex flex-col lg:flex-row mx-4 lg:mx-[128px] pt-8 lg:pt-[116px] pb-8 lg:pb-[22px]">
          <div className="w-full lg:w-1/2 h-auto mb-4 lg:mb-0 lg:pr-8 space-y-5 text-center lg:text-left">
            <div className="inline-block p-[1px] bg-gradient-to-r from-[#FF2F80] to-blue-500 rounded-2xl ">
              <h3 className="text-[16px] text-[#1D1D1F] px-5 py-1 bg-white rounded-2xl w-max">
                Affiliate partners
              </h3>
            </div>
            <h1 className="text-4xl md:text-[64px] leading-none">
              Earn highly competitive commissions
            </h1>
            <p className="text-lg md:text-[22px] text-[#6E6E6E]">
              Join our affiliate partner program and turn your network into a
              lucrative revenue stream. Promote Voiso's contact center software
              and earn commission on every qualified lead you refer. Whatever
              your business, we'll set you up with the marketing materials and
              resources to help you attract and engage leads.
            </p>
            <button className="px-4 py-2 bg-[#236ADC] text-white rounded-full">
              Get in Touch
            </button>
          </div>
          <div className="w-full lg:w-1/2 h-auto lg:pl-8 mt-8 lg:mt-16 flex items-center justify-center">
            {/* Right content (empty for now) */}
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="w-full max-w-[1520px] mx-auto mt-16 px-4">
        <div className="w-full max-w-[1262px] mx-auto bg-white rounded-[32px] md:rounded-[55px] p-4 md:p-12 border border-[#FF2F80]">
          <div className="w-full max-w-[752px] mx-auto text-center">
            {/* Text Content */}
            <h1 className="text-4xl md:text-[64px] mb-2 text-black font-semibold mb-12">
              Partner with Voiso
            </h1>

            {/* Form Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Left Column */}
              <div className="flex flex-col space-y-4">
                <input
                  type="text"
                  placeholder="First Name"
                  className="p-3 rounded-lg bg-white border border-gray-400 text-black placeholder-gray-800"
                />
                <input
                  type="text"
                  placeholder="Company Name"
                  className="p-3 rounded-lg bg-white border border-gray-400 text-black placeholder-gray-800"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="p-3 rounded-lg bg-white border border-gray-400 text-black placeholder-gray-800"
                />
              </div>

              {/* Right Column */}
              <div className="flex flex-col space-y-4">
                <input
                  type="text"
                  placeholder="Last Name"
                  className="p-3 rounded-lg bg-white border border-gray-400 text-black placeholder-gray-800"
                />
                <input
                  type="text"
                  placeholder="Phone Number"
                  className="p-3 rounded-lg bg-white border border-gray-400 text-black placeholder-gray-800"
                />
                <select
                  defaultValue="India"
                  className="p-3 rounded-lg bg-white border border-gray-400 text-black placeholder-gray-800"
                >
                  <option value="India">India</option>
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
                  className="w-full p-3 rounded-lg bg-white border border-gray-400 text-black placeholder-gray-800"
                >
                  <option value="" disabled>
                    Number of agents
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
                  <br />
                  <br />* For licensed industries such as Healthcare, Telco,
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
      <Footer />
    </div>
  );
};

export default Partners;

import React, { useState } from "react";
import PriceCard from "../components/PriceCard";
import FeatureList from "../components/FeatureList";
import TextBox from "../components/TextBox";
import Footer from "../components/Footer";

const pricingCards = [
  {
    title: "Start-up",
    subtitle: "All of your call center fundamentals.",
    annually: { price: "$35 / month", oldPrice: "$49 / month" },
    monthly: { price: "$49 / month", oldPrice: null },
    billingNote: "Per user. Billed Annually.",
    features: [
      "Inbound & Outbound Calls",
      "WebRTC Softphone",
      "Campaign Manager",
      "AI Predictive Dialer",
      "Flow Builder",
      "Web Chat",
      "Telegram",
      "Real-time Dashboards",
      "CRM Integrations",
      "Voiso Mobile App",
    ],
    infoLinks: Array(11).fill(true),
    highlight: false,
    bgColor: "#088569",
    textColor: "#A3FFD2",
  },
  {
    title: "PRO",
    subtitle: "For omnichannel contact centers.",
    annually: { price: "$55 / month", oldPrice: "$79 / month" },
    monthly: { price: "$79 / month", oldPrice: null },
    billingNote: "Per user. Billed Annually.",
    features: [
      "AI Speech Analytics",
      "AI Answering Machine Detection",
      "WhatsApp",
      "SMS",
      "FB Messenger",
      "Instagram DM",
      "CDR Logs",
      "Number Validation",
      "Customer Surveys",
      "Role-based Permissions",
    ],
    infoLinks: Array(10).fill(true),
    highlight: true,
    bgColor: "#073469",
    textColor: "#C8E0FC",
  },
  {
    title: "PRO+",
    subtitle: "Custom solutions for large organizations.",
    annually: { price: "$85 / month", oldPrice: "$129 / month" },
    monthly: { price: "$129 / month", oldPrice: null },
    billingNote: "Per user. Billed Annually.",
    features: [
      "Unlimited Storage",
      "AWS Data Streaming",
      "Sensitive Data Reports",
      "Security Log Streaming",
      "Amazon S3 Uploads",
      "Post-call Surveys",
    ],
    infoLinks: Array(6).fill(true),
    highlight: false,
    bgColor: "#FFD4C2",
    textColor: "#D64000",
    isThird: true,
  },
];

const featureList = [
  "Custom Contract",
  "Custom Integrations",
  "Bespoke Security",
  "Service Level Agreement",
  "Custom Onboarding",
  "Developer Support",
  "Tailored Pricing",
  "Scalable Deployment",
];

const textBox = [
  {
    label: "Fast",
    title: "Get started in less than 24 hours",
    description:
      "We'll get you set up with everything you need so you can start using Voiso without delay.",
  },
  {
    label: "Flexible",
    title: "No lengthy contracts",
    description:
      "We're so confident you'll love Voiso that we offer cancel-anytime monthly billing.",
  },
  {
    label: "Maintenance",
    title: "Included maintenance",
    description:
      "As a cloud-based platform, we apply routine system updates key without extra charge.",
  },
  {
    label: "Support",
    title: "Free support included",
    description:
      "Our dedicated account management team are on hand to help you quickly resolve any issues.",
  },
  {
    label: "Customization",
    title: "Flexible solutions",
    description:
      "We'll work with you to develop a solution that works for you and your business.",
  },
  {
    label: "Security",
    title: "Enterprise-grade security",
    description:
      "MFA, encryption, access controls, IP restrictions, ISO 27001 certification, and much more.",
  },
];

const Pricing = () => {
  const [billingType, setBillingType] = useState("annually");

  return (
    <div>
      <div className="w-full max-w-[1264px] mx-auto mt-12 mb-6 px-4">
        <div className="w-full py-12 px-0 md:px-8 bg-white flex flex-col items-center">
          {/* Gradient Title */}
          <div className="inline-block p-[1px] bg-gradient-to-r from-[#FF2F80] to-blue-500 rounded-2xl text-center mb-4">
            <h3 className="text-[16px] text-[#1D1D1F] px-5 py-1 bg-white rounded-2xl w-max">
              Pricing
            </h3>
          </div>

          {/* Headings */}
          <div className="text-center mb-8 space-y-4 max-w-4xl">
            <h1 className="text-[36px] md:text-[64px] font-bold text-[#073469] leading-none">
              CHOOSE THE PERFECT PLAN
              <br /> FOR YOUR BUSINESS
            </h1>

            <h3 className="text-[18px] md:text-[22px] text-[#073469] font-medium">
              We're confident you'll love Voiso.
              <br />
              All plans are paid monthly and can be canceled at any time.
            </h3>

            {/* Feature List */}
            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-20 text-[18px] text-[#073469] mt-4">
              <div className="flex items-center gap-2">
                <img src="check-dark-blue.svg" alt="tick" />
                <span>Try any plan free for 14 days</span>
              </div>
              <div className="flex items-center gap-2">
                <img src="check-dark-blue.svg" alt="tick" />
                <span>No hidden fees</span>
              </div>
              <div className="flex items-center gap-2">
                <img src="check-dark-blue.svg" alt="tick" />
                <span>Free support included</span>
              </div>
            </div>
          </div>
        </div>

        <h1 className="text-[32px] md:text-[48px] font-medium text-center mb-6">
          Commit more, pay less
        </h1>
        {/* Toggle Button Group */}
        <div className="flex justify-center mb-8">
          <div className="flex items-center bg-gray-200 p-2 px-4 rounded-xl gap-2">
            {/* Annually */}
            <button
              onClick={() => setBillingType("annually")}
              className={`flex items-center justify-between w-32 md:w-40 px-4 py-2 rounded-xl transition text-sm font-medium ${
                billingType === "annually"
                  ? "bg-blue-600 text-white"
                  : "text-gray-700"
              }`}
            >
              <span>Annually</span>
              <span className="text-xs bg-[#FF2F80] text-white font-semibold px-2 py-0.5 rounded">
                30% OFF
              </span>
            </button>

            {/* Monthly */}
            <button
              onClick={() => setBillingType("monthly")}
              className={`w-32 md:w-40 px-4 py-2 rounded-xl transition text-sm font-medium ${
                billingType === "monthly"
                  ? "bg-blue-600 text-white"
                  : "text-gray-700"
              }`}
            >
              Monthly
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {pricingCards.map((card, idx) => (
            <PriceCard
              key={idx}
              title={card.title}
              subtitle={card.subtitle}
              price={card[billingType].price}
              oldPrice={card[billingType].oldPrice}
              billingNote={card.billingNote}
              features={card.features}
              infoLinks={card.infoLinks}
              highlight={card.highlight}
              billingType={billingType}
              bgColor={card.bgColor}
              textColor={card.textColor}
              isThird={idx === 2}
            />
          ))}
        </div>

        {/* Custom Feature Section */}
        <div className="w-full flex flex-col lg:flex-row mt-6 rounded-3xl border border-[#D1D1D1] overflow-hidden">
          {/* First Div */}
          <div className="w-full lg:w-1/4 space-y-10 p-6 border-b lg:border-b-0 lg:border-r border-[#E0E0E0] bg-[#391F44] text-[#CC66EF] rounded-t-3xl lg:rounded-t-none lg:rounded-l-3xl flex flex-col items-center justify-between">
            <div>
              <h2 className="text-[28px] md:text-[34px] font-semibold">
                CUSTOM
              </h2>
              <p className="text-[16px]">A bespoke plan designed for you.</p>
            </div>
            <button className="bg-white text-black text-[16px] font-normal px-6 py-2 rounded-2xl hover:bg-blue-700 hover:text-white transition">
              Contact Sales
            </button>
          </div>

          {/* Second Div */}
          <div className="w-full lg:w-2/4 p-6 flex flex-col justify-center">
            <p className="font-medium mb-4">All features you need, plus...</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 text-sm">
              {featureList.map((feature, index) => (
                <div key={index} className="mb-2">
                  <FeatureList feature={feature} />
                </div>
              ))}
            </div>
          </div>

          {/* Third Div */}
          <div className="hidden lg:flex w-1/4 p-6 items-center justify-center">
            <img
              src="pricing_row-bg.png"
              alt="photo"
              className="h-full object-cover rounded-r-3xl"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-24">
          {textBox.map((item, index) => (
            <TextBox key={index} item={item} />
          ))}
        </div>

        {/* Compare all plans Section */}
        <div className="w-full max-w-5xl mx-auto text-center py-16 bg-[#0b0d14] border border-gray-300 rounded-[40px] space-y-4 mt-16 px-4 flex flex-col items-center justify-center md:mb-32">
          <h2 className="text-3xl md:text-[64px] font-bold bg-brand-gradient bg-clip-text text-transparent leading-tight">
            Compare all plans
          </h2>
          <p className="text-lg md:text-[22px] text-[#B3B3B3]">
            Take a detailed look at all plans to view the full range of
            <br className="hidden md:block" /> features each one offers.
          </p>
          <button className="bg-blue-700 text-white text-[16px] border border-blue-500 font-normal px-6 py-2 rounded-full hover:bg-white hover:text-black transition">
            Compare
          </button>
        </div>
        {/* Tailor-made support plans Section */}
        <div className="w-full px-0 mx-0 mt-8 md:mt-0">
          <div
            className="w-full min-h-[300px] md:min-h-[400px] py-8 md:py-[56px] my-8 md:my-[56px] bg-gray-100 bg-cover bg-center rounded-lg shadow flex items-center justify-center"
            style={{
              backgroundImage:
                "url('https://tf-voiso-site.s3.eu-central-1.amazonaws.com/wp-content/uploads/2025/04/BPO.jpg')",
            }}
          >
            <div className="w-full max-w-4xl mx-auto px-4 text-center bg-opacity-90 flex flex-col items-center justify-center">
              <h1 className="text-3xl md:text-[64px] font-bold mb-4 text-[#C8E0FC] leading-tight">
                Tailor-made
                <br className="hidden md:block" /> support plans
              </h1>
              <p className="mb-6 text-lg md:text-[22px] text-[#C8E0FC]">
                All Voiso customers receive an entirely free setup, onboarding
                <br className="hidden md:block" />
                and dedicated email support when using our platform.
                <br className="hidden md:block" /> For customers wanting
                enhanced assistance — including live
                <br className="hidden md:block" /> chat support, technical
                account management, quarterly
                <br className="hidden md:block" /> status reviews, and more — we
                offer premium support
                <br className="hidden md:block" /> services.
              </p>
              <button className="bg-blue-700 text-white text-[16px] border border-blue-500 font-normal px-6 py-2 rounded-full hover:bg-white hover:text-black transition">
                Learn more
              </button>
            </div>
          </div>
        </div>

        <div className="max-w-[1264px] mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Left Column */}
            <div>
              <div className="inline-block p-[1px] bg-gradient-to-r from-[#FF2F80] to-blue-500 rounded-2xl text-center mb-4">
                <h3 className="text-[16px] text-[#1D1D1F] px-5 py-1 bg-white rounded-2xl w-max">
                  Questions
                </h3>
              </div>
              <h2 className="text-[60px] font-semibold mb-4 text-black leading-none">
                Frequently asked questions
              </h2>
              <p className="text-[#4B4B4B] text-[22px]">
                Our platform streamlines the management of high-performing
                contact centers, allowing businesses to deliver more value to
                their customers.
              </p>
            </div>

            {/* Right Column - FAQs */}
            <div className="flex flex-col divide-y divide-[#E0E0E0]">
              {[
                "Are there any setup or maintenance fees?",
                "Can I change my plan once it's started?",
                "What discounts are available for long-term commitments?",
                "How do I choose between monthly and long-term pricing?",
                "Can I try Voiso before committing to a long-term plan?",
                "Is support included in all pricing plans?",
                "What's the difference between monthly and annual billing?",
                "Can I get a custom quote for my business?",
              ].map((question, idx) => (
                <div
                  key={idx}
                  className="flex justify-between items-center py-4 cursor-pointer"
                >
                  <span className="text-[22px] font-medium">{question}</span>
                  <span className="text-[42px] text-blue-600 font-semibold">
                    +
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="w-full max-w-[1520px] mx-auto mt-16 px-4">
          <div className="w-full max-w-[1262px] mx-auto bg-[#0b0d14] rounded-[32px] md:rounded-[55px] p-4 md:p-12">
            <div className="w-full max-w-[752px] mx-auto text-center">
              {/* Text Content */}
              <h1 className="text-4xl md:text-[64px] mb-2 bg-gradient-to-r from-[#FF2F80] via-[#FF2F80] to-[#438CFF] bg-clip-text text-transparent leading-none">
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
    </div>
  );
};

export default Pricing;

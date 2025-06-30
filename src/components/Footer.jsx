import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-[#F9FAFB] py-[96px]">
      <div className="max-w-[100%] mx-auto px-6 md:px-28 text-sm text-gray-700">
        {/* Logo - center on md and smaller */}
        <div className="md:hidden flex justify-center mb-8">
          <img
            src="https://voiso.com/wp-content/themes/voiso/static/images/logo-voiso-color.svg"
            alt="Logo"
            className="h-6"
          />
        </div>
        <div className="hidden md:block mb-8">
          <img
            src="https://voiso.com/wp-content/themes/voiso/static/images/logo-voiso-color.svg"
            alt="Logo"
            className="h-6"
          />
        </div>

        {/* Grid for main columns */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 text-[16px] text-black">
          {/* Empty div for logo column in desktop (already shown above) */}
          <div className="hidden md:block"></div>

          {/* Wrap 3 middle columns together for md and smaller */}
          <div className="md:col-span-3 flex flex-row flex-wrap gap-8 justify-center">
            {/* Solutions + Products */}
            <div>
              <h3 className="text-[#6E6E6E] mb-3 font-medium">Solutions</h3>
              <ul className="space-y-2 mb-10 font-[550] cursor-pointer">
                <li className="hover:text-[#438CFF]">Sales</li>
                <li className="hover:text-[#438CFF]">Support</li>
                <li className="hover:text-[#438CFF]">BPOs</li>
                <li className="hover:text-[#438CFF]">Virtual Numbers</li>
              </ul>
              <h3 className="text-[#6E6E6E] mb-3 font-medium">Products</h3>
              <ul className="space-y-2 font-[550] cursor-pointer">
                <li className="hover:text-[#438CFF]">Omnichannel</li>
                <li className="hover:text-[#438CFF]">Flow Builder</li>
                <li className="hover:text-[#438CFF]">AI Speech Analytics</li>
                <li className="hover:text-[#438CFF]">AI Predictive Dialer</li>
                <li className="hover:text-[#438CFF]">Real-Time Dashboards</li>
              </ul>
            </div>

            {/* Resources + About Us */}
            <div>
              <h3 className="text-[#6E6E6E] mb-3 font-medium">Resources</h3>
              <ul className="space-y-2 mb-10 font-[550] cursor-pointer">
                <li className="hover:text-[#438CFF]">Integrations</li>
                <li className="hover:text-[#438CFF]">Documentation</li>
                <li className="hover:text-[#438CFF]">Developers</li>
                <li className="hover:text-[#438CFF]">Blog</li>
              </ul>
              <h3 className="text-[#6E6E6E] mb-3 font-medium">About Us</h3>
              <ul className="space-y-2 font-[550] cursor-pointer">
                <li className="hover:text-[#438CFF]">Careers</li>
                <li className="hover:text-[#438CFF]">Contact Sales</li>
              </ul>
            </div>

            {/* Partners + Pricing */}
            <div>
              <h3 className="text-[#6E6E6E] mb-3 font-medium">Partners</h3>
              <ul className="space-y-2 mb-10 font-[550] cursor-pointer">
                <li className="hover:text-[#438CFF]">Partners</li>
                <li className="hover:text-[#438CFF]">Pricing</li>
              </ul>
              <h3 className="text-[#6E6E6E] mb-3 font-medium">Pricing Plans</h3>
              <ul className="space-y-2 font-[550] cursor-pointer">
                <li className="hover:text-[#438CFF]">Plan Comparison</li>
                <li className="hover:text-[#438CFF]">Support Plans</li>
              </ul>
            </div>
          </div>

          {/* Rightmost Column - Images + Policies + Socials */}
          <div className="flex flex-col justify-between h-full mt-10 md:mt-0 justify-center items-center text-centre">
            <div className="flex space-x-4 mb-6">
              <img src="tuv.png" alt="Cert" width="130" height="125" />
              <img src="tuv.png" alt="Cert" width="130" height="125" />
            </div>

            <div className="flex flex-col space-y-2 text-[14px] text-gray-900 underline cursor-pointer">
              <a className="hover:text-[#FF2F80]">Cookie Preferences</a>
              <a className="hover:text-[#FF2F80]">Cookie Policy</a>
              <a className="hover:text-[#FF2F80]">Privacy Policy</a>
              <a className="hover:text-[#FF2F80]">Terms & Conditions</a>
            </div>

            <div className="flex space-x-4 mt-4 cursor-pointer">
              <img src="https://voiso.com/wp-content/themes/voiso/static/images/facebook.svg" alt="Facebook" className="hover:opacity-50 transition" />
              <img src="https://voiso.com/wp-content/themes/voiso/static/images/twitter.svg" alt="Twitter" className="hover:opacity-50 transition" />
              <img src="https://voiso.com/wp-content/themes/voiso/static/images/linkedin.svg" alt="LinkedIn" className="hover:opacity-50 transition" />
              <img src="https://voiso.com/wp-content/themes/voiso/static/images/instagram.svg" alt="Instagram" className="hover:opacity-50 transition" />
              <img src="https://voiso.com/wp-content/themes/voiso/static/images/youtube.svg" alt="Youtube" className="hover:opacity-50 transition" />
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-10 text-[#6E6E6E] text-[16px] text-center md:text-left">
          © 2025 Voiso. All Rights Reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;

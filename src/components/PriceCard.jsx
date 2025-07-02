import React, { useEffect, useRef, useState } from "react";

const PriceCard = ({
  title,
  subtitle,
  price,
  oldPrice,
  billingNote,
  features,
  infoLinks,
  highlight,
  billingType,
  bgColor,
  textColor,
  isThird,
}) => {
  const [isFlipping, setIsFlipping] = useState(false);
  const prevBillingType = useRef(billingType);

  useEffect(() => {
    if (prevBillingType.current !== billingType) {
      setIsFlipping(true);
      prevBillingType.current = billingType;
      const timeout = setTimeout(() => setIsFlipping(false), 600); // match animation duration
      return () => clearTimeout(timeout);
    }
  }, [billingType]);

  return (
    <div
      className={`w-[404px] h-[796.8px] border border-gray-300 rounded-xl flex flex-col items-center overflow-hidden`}
    >
      <div
        className="w-[404px] h-[700px] flex flex-col justify-between"
        style={{ perspective: "1200px" }}
      >
        <div
          className={`relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] ${
            isFlipping ? "animate-flip" : ""
          } flex flex-col h-full justify-between`}
        >
          {/* Header section with dynamic background and text color */}
          <div
            className="p-6"
            style={{ backgroundColor: bgColor, color: textColor }}
          >
            <h2 className="text-xl font-bold mb-1 text-[34px]">{title}</h2>
            <p className="text-sm mb-2 text-[16px]">{subtitle}</p>
            <div className="mb-2">
              <span
                className="text-2xl font-semibold mr-2 text-[38px]"
                style={{ color: textColor }}
              >
                {price}
              </span>
              {oldPrice && (
                <span className="text-sm text-gray-500 line-through">
                  {oldPrice}
                </span>
              )}
            </div>
            <p className="text-xs text-[14px]">{billingNote}</p>
          </div>
          {/* Features section */}
          <div className="flex-1 flex flex-col text-left p-6 bg-white">
            <h3 className="text-[14px] font-semibold mb-3 text-black">
              What's included?
            </h3>
            <ul className="space-y-2 text-[14px] text-[#1D1D1F] flex-1">
              {features.map((feature, idx) => (
                <li key={idx} className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <img
                      src="https://voiso.com/wp-content/themes/voiso/static/images/check.svg"
                      alt="tick"
                    />
                    <span>{feature}</span>
                  </div>
                  {infoLinks && infoLinks[idx] && (
                    <img
                      src="https://voiso.com/wp-content/themes/voiso/static/images/info.svg"
                      alt="i"
                    />
                  )}
                </li>
              ))}
            </ul>
          </div>
          {/* Button at bottom, always aligned */}
          <div className="p-6 bg-white flex justify-center">
            <button className="bg-blue-600 text-white px-12 py-2 rounded-md text-sm font-medium hover:bg-blue-700">
              Contact Sales
            </button>
          </div>
        </div>
      </div>
      {/* Flip animation styles */}
      <style jsx>{`
        .animate-flip {
          transform: rotateY(180deg);
        }
      `}</style>
    </div>
  );
};

export default PriceCard;

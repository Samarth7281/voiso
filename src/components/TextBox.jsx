// TextBox.jsx
import React from "react";

const TextBox = ({ item }) => {
  const { label, title, description } = item;

  return (
    <div className="space-y-2">
      <div className="inline-block p-[1px] bg-gradient-to-r from-[#FF2F80] to-blue-500 rounded-2xl text-center mb-2">
        <h3 className="text-[16px] text-[#1D1D1F] px-5 py-1 bg-white rounded-2xl w-max">
          {label}
        </h3>
      </div>
      <h2 className="text-[22px] font-medium text-[#1D1D1F]">{title}</h2>
      <p className="text-[#6E6E6E] text-[16px] leading-relaxed">{description}</p>
    </div>
  );
};

export default TextBox;

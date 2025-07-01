import React from 'react';

const Card = ({ src, title, description, bgColor, textColor }) => {
  return (
    <div
      className="w-[350px] h-[260px] p-6 rounded-2xl shadow-lg"
      style={{ backgroundColor: bgColor, color: textColor }}
    >
      <img src={src} alt={title} className="mb-4 w-12 h-12" />
      <h3 className="text-[24px] font-semibold mb-2">{title}</h3>
      <p className="text-[18px] leading-snug">{description}</p>
    </div>
  );
};

export default Card;

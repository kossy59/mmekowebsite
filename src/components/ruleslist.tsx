import React from "react";

const Ruleslist = () => {
  const rules = [
    "Image must be clear",
    "Your ID must be fully in frame",
    "Photo must be clear and in color.",
    "ID must be fully in frame.",
    "Must be in color",
    "Text must be clearly visible",
    "Background must be minimal",
    "Image should not be edited, resized or rotated",
    "File must be png or jpg",
    "Must be under 7MB in size",
    "ID must be valid and not expired",
    "Facial verification is required to ensure the face is clear",
  ];

  return (
    <div className="mb-8 p-6 rounded-xl border border-[#0c0f27] bg-[#0c0f27]/20 shadow-lg backdrop-blur-md">
      <h4 className="font-semibold text-xl text-white mb-4 border-b border-[#1a1e3f] pb-2">
        📌 Rules: Please read for fast approval
      </h4>
      <ul className="">
        {rules.map((rule, index) => (
          <li
            key={index}
            className="group text-sm text-gray-300 px-3 py-2 rounded-lg transition-all duration-300 ease-in-out hover:bg-[#0c0f27]/40 hover:text-white hover:pl-4 hover:border-l-4 hover:border-orange-500"
          >
            {rule}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Ruleslist;

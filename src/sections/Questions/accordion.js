"use client";
import { useState } from "react";

export const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const onTitleClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const renderedItems = items.map((item, index) => {
    const active = index === activeIndex ? "show" : "";



    return (
      <div
        key={item.title}
        className={`flex flex-col gap-4 border-b border-gray-200 rounded-2xl py-6 px-8 max-sm:px-4 max-sm:py-4 mb-2 ${
          active && "bg-gray-500"
        }`}
      >
        <div
          onClick={() => onTitleClick(index)}
          className="cursor-pointer flex justify-between items-center max-sm:gap-8"
        >
          <p className="font-bold text-2xl max-sm:text-xl">{item.title}</p>
          <span>{active ? "-" : "+"}</span>
        </div>
        <div
          className={`${active ? "block" : "hidden"} text-base text-gray-400`}
        >
          {item.content}
        </div>
      </div>
    );
  });

  return <div className="w-full">{renderedItems}</div>;
};

"use client"
import React from "react";

const UpcomingCard = ({ card }) => {
  return (
    <div
      className={`bg-[url(/frames/upcoming_${card.img}.png)] p-10 bg-cover h-80 flex flex-col gap-4 justify-end rounded-2xl max-sm:p-6 max-sm:gap-3 max-sm:bg-top`}
    >
      <div className="rounded-2xl w-16 h-16 bg-white opacity-40 max-sm:w-8 max-sm:h-8 max-sm:rounded-lg"></div>
      <p className="font-bold text-cultured text-2xl">{card.title}</p>
      <p className="font-normal text-cultured text-base max-sm:line-clamp-4">{card.description}</p>
    </div>
  );
};

export default UpcomingCard;

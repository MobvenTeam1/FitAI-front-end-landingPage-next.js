import React from "react";
import UpcomingCard from "@/sections/Upcoming/UpcomingCard";

const cardData = [
  {
    img: "plate",
    title: "Aralıklı Oruç",
    description:
      "Lorem ipsum dolor sit amet consectetur. Dui dictumst augue imperdiet sit quam quis sociis. Arcu volutpat tortor ipsum varius vitae mauris sem nisl viverra. Odio ipsum massa amet fermentum porta feugiat. Massa euismod vitae ut nisl amet.",
    colSpan: "6",
  },
  {
    img: "meditation",
    title: "Meditasyon ve Mental Sağlık",
    description:
      "Lorem ipsum dolor sit amet consectetur. Dui dictumst augue imperdiet sit quam quis sociis. Arcu volutpat tortor ipsum varius vitae mauris sem nisl viverra. Odio ipsum massa amet fermentum porta feugiat. Massa euismod vitae ut nisl amet.",
    colSpan: "6",
  },
  {
    img: "sleep",
    title: "Uyku Sağlığı ve Düzeni",
    description:
      "Lorem ipsum dolor sit amet consectetur. Dui dictumst augue imperdiet sit quam quis sociis. Arcu volutpat tortor ipsum varius vitae mauris sem nisl viverra. Odio ipsum massa amet fermentum porta feugiat. Massa euismod vitae ut nisl amet.",
    colSpan: "12",
  },
];

export default function Upcomings() {
  return (
    <div className="container mx-auto flex flex-col items-center py-52 gap-16 max-sm:px-6 max-sm:gap-8 max-sm:py-12">
      <div className="text-center flex flex-col gap-6">
        <p className="text-black font-bold text-5xl max-sm:text-3xl">
          Yakında Eklenecek Özelliklerimiz
        </p>
        <p className="text-2xl font-normal text-black-coral max-w-5xl max-sm:text-lg">
          Lorem ipsum dolor sit amet consectetur. Diam tellus vivamus pharetra
          consectetur dictumst viverra. Lacus malesuada
        </p>
      </div>
      <div className="grid grid-cols-12 gap-4 max-sm:gap-2">
        {cardData.slice(0, 2).map((card, index) => (
          <div className={`col-span-6 max-sm:col-span-12`} key={index}>
            <UpcomingCard card={card} />
          </div>
        ))}
        <div className={`col-span-12 max-sm:col-span-12`}>
          <UpcomingCard card={cardData[2]} />
        </div>
      </div>
    </div>
  );
}

import React from "react";
import InfoCard from "./info";

export default function Abstract() {
  const infoSection = [
    {
      title: "Beslenme Listesi Özelleştirme ",
      content:
        "No matter how big or small your work is, whether it`s for the interior or exterior of your home, we are ready to serve and help you solve your home problems.",
      icon: "guarantee",
    },
    {
      title: "Antreman Listesi Özelleştirme",
      content:
        "No matter how big or small your work is, whether it`s for the interior or exterior of your home, we are ready to serve and help you solve your home problems.",
      icon: "quotes",
    },
    {
      title: "Kalori Kontrolü ile Hedefi Sağlama",
      content:
        "No matter how big or small your work is, whether it`s for the interior or exterior of your home, we are ready to serve and help you solve your home problems.",
      icon: "location",
    },
    {
      title: "AI Destekli ChatBot ",
      content:
        "No matter how big or small your work is, whether it`s for the interior or exterior of your home, we are ready to serve and help you solve your home problems.",
      icon: "24hour",
    },
  ];

  return (
    <div className="bg-mineShaft">
      <div className="container mx-auto flex flex-col gap-14 justify-center min-h-screen max-sm:h-full max-sm:py-12 max-sm:px-4 max-sm:gap-8">
        <div className="flex items-center justify-between max-sm:flex-col max-sm:gap-4">
          <h3 className="text-5xl font-bold text-white max-w-lg max-sm:text-3xl">
            Yapay Zeka Destekli Sağlık Koçu
          </h3>
          <p className="text-santasGray text-base max-w-lg max-sm:text-base">
            No matter how big or small your work is, whether it`s for the
            interior or exterior of your home, we are ready to serve and help
            you solve your home problems.
          </p>
        </div>
        <div className="bg-sanMarino h-px w-full"></div>
        <div className="grid grid-cols-12 gap-x-24 gap-y-16 max-sm:gap-8">
          {infoSection.map((item, index) => (
            <InfoCard key={index} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

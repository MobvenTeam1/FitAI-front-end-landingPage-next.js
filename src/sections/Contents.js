import React from "react";

export default function Contents() {
  const cardData = [
    {
      img: "exrcise-content",
      title: "Antreman Listeleri",
      description:
        "Lorem ipsum dolor sit amet consectetur. Dui dictumst augue imperdiet sit quam quis sociis. Arcu volutpat tortor ipsum varius vitae mauris sem nisl viverra. Odio ipsum massa amet fermentum porta feugiat. Massa euismod vitae ut nisl amet.",
    },
    {
      img: "diet-content",
      title: "Akıllı Beslenme Listeleri",
      description:
        "Lorem ipsum dolor sit amet consectetur. Dui dictumst augue imperdiet sit quam quis sociis. Arcu volutpat tortor ipsum varius vitae mauris sem nisl viverra. Odio ipsum massa amet fermentum porta feugiat. Massa euismod vitae ut nisl amet.",
    },
    {
      img: "cal-content",
      title: "Kalori Takibi",
      description:
        "Lorem ipsum dolor sit amet consectetur. Dui dictumst augue imperdiet sit quam quis sociis. Arcu volutpat tortor ipsum varius vitae mauris sem nisl viverra. Odio ipsum massa amet fermentum porta feugiat. Massa euismod vitae ut nisl amet.",
    },
  ];

  return (
    <div className="h-screen flex flex-col justify-center items-start mx-56 my-28">
      <p className="text-5xl font-bold">Kişiselleştirilmiş sağlık koçunuzla</p>
      <p className="text-5xl font-bold">hedeflerinize ulaşmanın en kolay yolu</p>
      <p className="text-lg mt-6 text-blackCoral">
        Lorem ipsum dolor sit amet consectetur. Nulla faucibus viverra nunc
        netus felis. Tortor faucibus in sodales donec dui tortor
      </p>
      <p className="text-lg mb-6 text-blackCoral">
        volutpat felis. Arcu ut gravida congue proin hendrerit potenti
        malesuada. Diam arcu nunc nisl nascetur ac morbi.
      </p>
      <div className="flex flex-row justify-center">
        {cardData.map((card, index) => (
          <div
            key={index}
            className={`p-10 bg-cover flex flex-col gap-4 justify-end rounded-xl m-4`}
            style={{
              backgroundImage: `url('/content-svg/${card.img}.svg')`,
              height: 700,
              borderRadius: 36,
            }}
          >
            <p className="font-bold text-cultured text-2xl">{card.title}</p>
            <p className="font-normal text-cultured text-base max-sm:line-clamp-4">
              {card.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

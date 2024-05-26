import React from "react";

const UpcomingCard = ({ img_url, title, description }) => {
  return (
    <div className="w-full h-[340px] rounded-xl">
      <div
        className="bg-cover bg-center flex flex-col justify-center"
        style={{
          backgroundImage: `url('${img_url}')`,
          borderRadius: 36,
          height: 340,
        }}
      >
        <p className="font-bold text-cultured text-2xl px-6 mb-4">{title}</p>
        <p className="font-normal text-cultured text-base px-6">
          {description}
        </p>
      </div>
    </div>
  );
};

export default UpcomingCard;

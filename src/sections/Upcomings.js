import React from "react";
import UpcomingCard from "@/components/UpcomingCard";

export default function Upcomings() {
  return (
    <div className="w-full flex flex-col items-center px-64">
      <div className="text-center mb-12">
        <p className="text-black font-bold text-5xl mb-6">
          Yakında Eklenecek Özelliklerimiz
        </p>
        <p className="text-2xl font-normal text-black-coral">
          Lorem ipsum dolor sit amet consectetur. Diam tellus vivamus
        </p>
        <p className="text-2xl font-normal text-black-coral">
          pharetra consectetur dictumst viverra. Lacus malesuada
        </p>
      </div>
      <div className="flex flex-col w-full items-center">
        <div className="flex flex-row w-full mb-6">
          <div className="w-1/2 p-2">
            <UpcomingCard 
              img_url='/upcoming-svg/intermittent.svg' 
              title='Aralıklı Oruç' 
              description='Lorem ipsum dolor sit amet consectetur. Dui dictumst augue imperdiet sit quam quis sociis. Arcu volutpat tortor ipsum varius vitae mauris sem nisl viverra. Odio ipsum massa amet fermentum porta feugiat. Massa euismod vitae ut nisl amet.'
            />
          </div>
          <div className="w-1/2 p-2">
            <UpcomingCard 
              img_url='/upcoming-svg/meditation.svg' 
              title='Meditasyon ve Mental Sağlık' 
              description='Lorem ipsum dolor sit amet consectetur. Dui dictumst augue imperdiet sit quam quis sociis. Arcu volutpat tortor ipsum varius vitae mauris sem nisl viverra. Odio ipsum massa amet fermentum porta feugiat. Massa euismod vitae ut nisl amet.'
            />
          </div>
        </div>
        <div className="w-full p-2">
          <UpcomingCard 
            img_url='/upcoming-svg/sleep.svg' 
            title='Uyku Sağlığı ve Düzeni' 
            description='Lorem ipsum dolor sit amet consectetur. Dui dictumst augue imperdiet sit quam quis sociis. Arcu volutpat tortor ipsum varius vitae mauris sem nisl viverra. Odio ipsum massa amet fermentum porta feugiat. Massa euismod vitae ut nisl amet.'
          />
        </div>
      </div>
    </div>
  );
}

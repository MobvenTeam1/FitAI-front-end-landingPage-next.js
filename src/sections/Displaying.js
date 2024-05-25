import React from "react";

export default function Displaying() {
  return (
    <div className="w-full h-[655px]">
      <div
        className="bg-cover flex flex-col justify-center"
        style={{
          backgroundImage: `url('/displaying-svg/displaying.svg')`,
          height: 655,
        }}
      >
        <div className="m-[180px]">
          <p className="font-normal text-cultured text-6xl px-6">
            <span className="font-bold">Fit AI</span> ile Sağlıklı
          </p>
          <p className="font-normal text-cultured text-6xl px-6">
            Yaşama Adım Atın
          </p>
          <div className="flex flex-row items-start m-6">
            <p className="font-normal text-cultured text-xl pr-6 opacity-75">
              Sağlıklı Yaşam Koçu
            </p>
            <p className="font-xl text-cultured text-xl opacity-75">
              Yapay Zeka Destekli
            </p>
          </div>
          <div className="bg-cultured w-[140px] p-2 flex flex-row justify-center items-center m-6 rounded-3xl">
            <p className="font-bold text-2xl">Kayıt Ol</p>
          </div>
        </div>
      </div>
    </div>
  );
}

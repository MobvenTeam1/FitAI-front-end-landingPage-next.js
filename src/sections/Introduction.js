import React from "react";

export default function Introduction() {
  return (
    <div className="min-h-[88vh] flex flex-col gap-8 items-center justify-center">
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-4 text-white text-xl font-bold max-sm:text-sm max-sm:gap-2">
          <p>Sağlıklı Yaşam Koçu</p>
          <p>.</p>
          <p>Yapay Zeka Destekli</p>
        </div>
        <p className="text-9xl text-center text-white font-medium max-sm:text-8xl">
          Fit<span className="font-extrabold">AI</span>
        </p>
      </div>
      <button className="bg-white text-xl py-3 px-16 rounded-3xl max-sm:text-base max-sm:px-12">
        Bize Katıl
      </button>
    </div>
  );
}

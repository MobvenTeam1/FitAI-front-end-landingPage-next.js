import Image from "next/image";
import React from "react";

export default function InfoCard({ item }) {
  return (
    <div className="col-span-6 flex items-center gap-8 max-sm:col-span-12 max-sm:gap-4">
      <Image
        src={`/icons/ic_${item.icon}.svg`}
        alt="Next.js Logo"
        width={74}
        height={85}
        priority
      />
      <div className="flex flex-col gap-3">
        <h4 className="text-2xl font-bold text-white max-sm:text-lg">{item.title}</h4>
        <p className="text-santasGray text-lg max-sm:text-base">{item.content}</p>
      </div>
    </div>
  );
}

"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Review } from "./review";

// Component for rendering the arrow icon
const ArrowIcon = ({ direction }) => (
  <Image
    src={`/icons/ic_arrow-${direction}.svg`}
    alt="Next.js Logo"
    width={48}
    height={48}
    priority
  />
);

export default function Reviews() {
  const reviews = [
    {
      id: 1,
      store: {
        name: "Google Play Store",
        logo: "/icons/ic_apple.svg",
      },
      user: {
        name: "Selin Tatlıca",
        image: "/temp/User.png",
        desc: "Lorem ipsum dolor sit amet consectetur. Vehicula sit pulvinar risus ut ut. Massa neque velit pellentesque elementum molestie est massa. Ornare euismod nec aliquet quisque sed tortor euismod mi nisi.",
        score: 5,
      },
    },
    {
      id: 2,
      store: {
        name: "App Store",
        logo: "/icons/ic_apple.svg",
      },
      user: {
        name: "Mehmet Başar",
        image: "/temp/User.png",
        desc: "Lorem ipsum dolor sit amet consectetur. Vehicula sit pulvinar risus ut ut. Massa neque velit pellentesque elementum molestie est massa. Ornare euismod nec aliquet quisque sed tortor euismod mi nisi.",
        score: 4,
      },
    },
    {
      id: 3,
      store: {
        name: "Huawei Store",
        logo: "/icons/ic_apple.svg",
      },
      user: {
        name: "Kübra Sultan",
        image: "/temp/User.png",
        desc: "Lorem ipsum dolor sit amet consectetur. Vehicula sit pulvinar risus ut ut. Massa neque velit pellentesque elementum molestie est massa. Ornare euismod nec aliquet quisque sed tortor euismod mi nisi.",
        score: 3,
      },
    },
    {
      id: 4,
      store: {
        name: "Windows Store",
        logo: "/icons/ic_apple.svg",
      },
      user: {
        name: "Şahide Deniz",
        image: "/temp/User.png",
        desc: "Lorem ipsum dolor sit amet consectetur. Vehicula sit pulvinar risus ut ut. Massa neque velit pellentesque elementum molestie est massa. Ornare euismod nec aliquet quisque sed tortor euismod mi nisi.",
        score: 2,
      },
    },
  ];

  const [step, setStep] = useState(0);
  const [showReview, setShowReview] = useState(reviews[step]);

  useEffect(() => {
    setShowReview(reviews[step]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [step]);

  const handleStepChange = (index) => {
    setStep(index);
  };

  return (
    <div className="container mx-auto min-h-screen flex flex-col gap-16 items-center justify-center max-sm:py-12">
      <h3 className="text-5xl max-w-2xl text-center font-bold max-sm:text-3xl max-sm:px-8">
        Dükkanlardaki Kullanıcı Yorumlarımız
      </h3>
      <div className="flex items-center justify-between gap-40 max-sm:gap-4">
        <button
          className={`${
            !(step === 0) ? "!bg-gray-800" : "!bg-gray-200"
          } rounded-full p-3`}
          disabled={step === 0}
          onClick={() => handleStepChange(step - 1)}
        >
          <ArrowIcon direction="left" />
        </button>
        <Review review={showReview} />
        <button
          className={`${
            !(step === reviews.length - 1) ? "!bg-gray-800" : "!bg-gray-200"
          } rounded-full p-3`}
          disabled={step === reviews.length - 1}
          onClick={() => handleStepChange(step + 1)}
        >
          <ArrowIcon direction="right" />
        </button>
      </div>
      <div className="flex items-center gap-3 mt-12 max-sm:mt-4">
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            onClick={() => handleStepChange(i)}
            className={`transition-all duration-500 ease-in-out rounded-full cursor-pointer h-3 ${
              i === step ? "!bg-gray-900" : "!bg-gray-200"
            } ${i === step ? "w-8" : "w-3"}`}
          ></div>
        ))}
      </div>
    </div>
  );
}

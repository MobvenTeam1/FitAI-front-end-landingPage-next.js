import BlogCard from "@/sections/Blog/card";
import React from "react";
import Image from "next/image";
export default function Blog() {
  const cardContent = [
    {
      id: 0,
      img_url: "/blog-svg/pace.svg",
      date: new Date(2024, 6, 10),
      title: "Açık Havada Yürüyüşün Zihin Sağlığına Faydaları",
      description:
        "Lorem ipsum dolor sit amet consectetur. Pretium tellus aliquam dictum nunc diam congue dolor donec. Non id eget mi purus dui quis libero integer liLorem ipsum dolor sit amet consectetur. Pretium tellus aliquam dictum nunc diam congue dolor donec. Non id eget mi purus dui quis libero integer li",
      tags: ["Plumbing", "Architecture", "Maintenance"],
    },
    {
      id: 1,
      img_url: "/blog-svg/culture.svg",
      date: new Date(2024, 6, 10),
      title: "Bowl Kültürü ve Hayatımıza Çok Hızlı Girmesi",
      description:
        "Lorem ipsum dolor sit amet consectetur. Pretium tellus aliquam dictum nunc diam congue dolor donec. Non id eget mi purus dui quis libero integer liLorem ipsum dolor sit amet consectetur. Pretium tellus aliquam dictum nunc diam congue dolor donec. Non id eget mi purus dui quis libero integer li",
      tags: ["Plumbing", "Architecture", "Maintenance"],
    },
    {
      id: 2,
      img_url: "/blog-svg/exercise.svg",
      date: new Date(2024, 6, 11),
      title: "En Kısa Sürede Tüm Kaslarını Çalıştıracak Hareketler",
      description:
        "Lorem ipsum dolor sit amet consectetur. Pretium tellus aliquam dictum nunc diam congue dolor donec. Non id eget mi purus dui quis libero integer liLorem ipsum dolor sit amet consectetur. Pretium tellus aliquam dictum nunc diam congue dolor donec. Non id eget mi purus dui quis libero integer li",
      tags: ["Plumbing", "Architecture", "Maintenance"],
    },
  ];

  return (
    <div className="container mx-auto min-h-screen flex flex-col justify-center items-center gap-14 max-sm:gap-8 max-sm:px-6 max-sm:py-6">
      <p className="text-black text-center font-bold text-5xl max-sm:text-3xl">
        Blog Yazılarımızı Keşfedin
      </p>
      <div className="flex justify-center items-center gap-12 max-sm:flex-col max-sm:gap-16">
        {cardContent.map((content) => (
          <BlogCard key={content.id} {...content} />
        ))}
      </div>
      <div className="flex justify-center items-center gap-2">
        <p className="font-bold text-xl max-sm:text-lg text-doveGray">View More</p>
        <Image
          src="/blog-svg/next-icon.svg"
          alt="next-icon"
          width={6}
          height={6}
          priority
        />
      </div>
    </div>
  );
}

import React from "react";
import Image from "next/image";
const BlogCard = ({ img_url, date, title, description, tags }) => {
  return (
    <div className="max-w-sm rounded-3xl shadow-lg overflow-hidden">
      <Image
        src={img_url}
        alt={img_url}
        className="object-cover mb-6"
        width={448}
        height={608}
        priority
      />
      <span className="text-base font-normal text-black-coral m-6">
        {date.toLocaleDateString()}
      </span>
      <div className="px-6 py-4">
        <div className="font-bold mb-2 text-[22px]">{title}</div>
        <p className="text-black-coral text-base line-clamp-3 text-[18px]">
          {description}
        </p>
      </div>
      <div className="gap-2 p-6">
        {tags.map((tag, index) => (
          <div key={index} className="px-4 py-2 bg-cultured inline-flex rounded-2xl">
            <p className="bg-gray-200 text-black-coral text-sm">
              {tag}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogCard;

import React from "react";
import Image from "next/image";

const BlogCard = ({ img_url, date, title, description, tags }) => {
  return (
    <div className="flex flex-col gap-6">
      <Image
        src={img_url}
        alt={img_url}
        className="object-cover w-full"
        width={100}
        height={100}
        priority
      />
      <div className="flex flex-col gap-4">
        <p className="text-base font-normal text-blackCoral">
          {date.toLocaleDateString()}
        </p>
        <div className="font-bold mb-2 text-2xl">{title}</div>
        <p className="text-blackCoral text-lg line-clamp-3">{description}</p>
        <div className="flex items-center gap-2">
          {tags.map((tag, index) => (
            <p
              key={`${tag}+${index}`}
              className="bg-cultured text-blackCoral rounded-full text-sm text-center py-2 px-4"
            >
              {tag}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogCard;

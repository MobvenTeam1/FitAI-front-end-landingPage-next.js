import React from "react";
import Image from "next/image";

const BlogCard = ({ img_url, date, title, description, tags }) => {
  return (
    <div className="flex flex-col gap-6 max-sm:gap-4">
      <Image
        src={img_url}
        alt={img_url}
        className="object-cover w-full"
        width={100}
        height={100}
        priority
      />
      <div className="flex flex-col gap-4 max-sm:gap-2">
        <p className="text-base max-sm:text-sm font-normal text-blackCoral">
          {date.toLocaleDateString()}
        </p>
        <div className="font-bold text-2xl max-sm:text-xl">{title}</div>
        <p className="text-blackCoral text-lg line-clamp-3 max-sm:text-base">
          {description}
        </p>
        <div className="flex items-center gap-2 max-sm:gap-1">
          {tags.map((tag, index) => (
            <p
              key={`${tag}+${index}`}
              className="bg-cultured text-blackCoral rounded-full text-sm text-center max-sm:text-xs py-2 px-4 max-sm:px-3"
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

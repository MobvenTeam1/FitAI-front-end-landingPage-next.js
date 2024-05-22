import Image from "next/image";

export const Review = ({ review }) => (
  <div className="flex flex-col items-center justify-center gap-10">
    <div className="flex items-center gap-3 mt-4">
      <Image
        src={review.store.logo}
        alt="Next.js Logo"
        width={52}
        height={52}
        priority
      />
      <p className="text-center text-3xl font-bold">{review.store.name}</p>
    </div>

    <hr className="w-2/3 h-px bg-gray-700 rounded-full" />

    <p className="text-center text-xl text-gray-500">{review.user.desc}</p>

    <div className="flex gap-8 items-center">
      <Image
        src={review.user.image}
        alt="Next.js Logo"
        width={76}
        height={76}
        priority
      />
      <div className="flex flex-col items-center gap-3">
        <p className="w-full text-start text-2xl font-bold">
          {review.user.name}
        </p>
        <div className="flex items-center gap-2">
          {[...Array(review.user.score)].map((_, i) => (
            <Image
              key={i}
              src="/icons/ic_star-full.svg"
              alt="Next.js Logo"
              width={24}
              height={24}
              priority
            />
          ))}
          {[...Array(5 - review.user.score)].map((_, i) => (
            <Image
              key={i}
              src="/icons/ic_star-empty.svg"
              alt="Next.js Logo"
              width={24}
              height={24}
              priority
            />
          ))}
        </div>
      </div>
    </div>
  </div>
);

import Blog from "@/sections/Blog";
import Contents from "@/sections/Contents";
import Displaying from "@/sections/Displaying";
import Footer from "@/sections/Footer";
import Header from "@/sections/Header";
import Introduction from "@/sections/Introduction";
import Questions from "@/sections/Questions";
import Reviews from "@/sections/Reviews";
import Temp from "@/sections/Temp";
import Upcomings from "@/sections/Upcomings";

import Image from "next/image";
{
  /* <Image
className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
src="/next.svg"
alt="Next.js Logo"
width={180}
height={37}
priority
/> */
}

export default function Home() {
  return (
    <div>
      {/* Göktuğ */}
      <Header />

      {/* Göktuğ */}
      <Introduction />

      {/* Faruk */}
      <Contents />

      <Temp />

      {/* Göktuğ */}
      <Reviews />

      {/* Faruk */}
      <Blog />

      {/* Faruk */}
      <Upcomings />

      {/* Göktuğ */}
      <Questions />

      {/* faruk */}
      <Displaying />

      {/* faruk */}
      <Footer />
    </div>
  );
}

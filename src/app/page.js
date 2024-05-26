import Abstract from "@/sections/Abstarct";
import Blog from "@/sections/Blog";
import Contents from "@/sections/Contents";
import Displaying from "@/sections/Displaying";
import Footer from "@/sections/Footer";
import Header from "@/sections/Header";
import Introduction from "@/sections/Introduction";
import Questions from "@/sections/Questions";
import Reviews from "@/sections/Reviews";
import Upcomings from "@/sections/Upcoming";

export default function Home() {
  return (
    <div>
      {/* Göktuğ */}

      <div className="bg-[url(/frames/athletic-womanin.png)] bg-cover bg-bottom min-h-screen">
        <Header />

        {/* Göktuğ */}
        <Introduction />
      </div>

      {/* Faruk */}
      <Contents />

      <Abstract />

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

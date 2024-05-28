import Image from "next/image";

export default function Header() {
  return (
    <div className="h-[12vh] container mx-auto flex items-center justify-between w-full">
      <Image
        src="/logo.svg"
        alt="Vercel Logo"
        className="object-cover max-sm:w-16 max-sm:h-4"
        width={137}
        height={54}
        priority
      />

      <div className="flex gap-4 font-bold text-xl text-white max-sm:gap-2 max-sm:text-sm">
        <p>Hakkımızda</p>
        <p>Ürün</p>
        <p>İletişim</p>
      </div>

      <button className="bg-[#B1EB04] text-lg font-bold text-black px-5 py-4 rounded-lg max-sm:text-sm max-sm:p-2">
        <a
          href="https://fit-ai-app-mobven.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Giriş Yap
        </a>
      </button>
    </div>
  );
}

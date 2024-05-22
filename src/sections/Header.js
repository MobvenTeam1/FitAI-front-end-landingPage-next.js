import Image from "next/image";

export default function Header() {
  return (
    <div className="h-[12vh] container mx-auto flex items-center justify-between w-full">
      <Image
        src="/logo.svg"
        alt="Vercel Logo"
        className="object-cover max-sm:w-16 h-4"
        width={137}
        height={54}
        priority
      />

      <div className="flex gap-4 font-bold text-xl text-white max-sm:gap-2 max-sm:text-sm">
        <p>Hakkımızda</p>
        <p>Ürün</p>
        <p>İletişim</p>
      </div>

      <button className="bg-white font-bold text-xl text-black px-4 py-2 rounded-3xl max-sm:text-sm max-sm:p-2">
        Giriş Yap
      </button>
    </div>
  );
}

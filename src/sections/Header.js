import Image from "next/image";

export default function Header() {
  return (
    <div className="container mx-auto flex items-end justify-between w-full py-4">
      <Image
        src="/logo.svg"
        alt="Vercel Logo"
        className="object-cover"
        width={100}
        height={24}
        priority
      />

      <div className="flex gap-4">
        <p>Hakkımızda</p>
        <p>Ürün</p>
        <p>Blog</p>
        <p>İletişim</p>
      </div>

      <button className="bg-black text-black px-4 py-2 rounded-lg">
        Giriş Yap
      </button>
      
    </div>
  );
}

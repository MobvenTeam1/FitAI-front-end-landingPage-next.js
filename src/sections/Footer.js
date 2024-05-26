import React from "react";
import Image from "next/image";
export default function Footer() {
  return (
    <div className="w-full bg-mercury pt-14">
     <div className="px-56">
       <section className="bg-silver flex flex-row justify-between items-center py-6 px-6 rounded-3xl">
        <div>
          <div className="text-2xl text-white font-bold">
            Haber Bültenimize Kayıt Olun
          </div>
          <div className="text-lg text-white">
            Daha fazla haber, promosyon veya haber hizmeti almak için
            bültenimize abone olun
          </div>
        </div>
        <div className="bg-white rounded-full px-5 py-2.5 w-[512px]">
          <div className="flex flex-row justify-between items-center">
            <p className="mr-4 text-silver text-lg">Eposta</p>
            <div className="bg-silver rounded-full py-2 px-6">
              <div className="">
                <p className="text-white text-lg font-bold">Abone Olun</p>
              </div>
            </div>
          </div>
        </div>
      </section>
     </div>

      {/* div seperation*/}
      <section className="flex flex-row justify-between items-center my-14 px-56">
        {/*left part of middle content*/}
        <div>
          <div className="flex flex-row items-center mb-8">
            <Image
              src="/footer-svg/logo.svg"
              alt="logo"
              className="object-cover"
              width={60}
              height={60}
              priority
            />
            <p className="font-normal text-4xl px-6">
              Fit<span className="font-bold">AI</span>
            </p>
          </div>

          <div className="mb-8">
            <p className="text-lg">
              Fit AI, sağlığınızı, hedeflerinizi ve yaşam tarzınızı dikkate
            </p>
            <p className="text-lg">
              alarak size özel beslenme ve antrenman programları sunar.
            </p>
          </div>

          <div className="flex flex-row justify-start items-center gap-6">
            <Image
              src="/footer-svg/youtube.svg"
              alt="youtube"
              className="object-cover"
              width={24}
              height={24}
              priority
            />
            <Image
              src="/footer-svg/instagram.svg"
              alt="instagram"
              className="object-cover"
              width={24}
              height={24}
              priority
            />
            <Image
              src="/footer-svg/facebook.svg"
              alt="facebook"
              className="object-cover"
              width={24}
              height={24}
              priority
            />
            <Image
              src="/footer-svg/twitter.svg"
              alt="twitter"
              className="object-cover"
              width={24}
              height={24}
              priority
            />
            <Image
              src="/footer-svg/mail.svg"
              alt="mail"
              className="object-cover"
              width={24}
              height={24}
              priority
            />
          </div>
        </div>
        {/*right part of middle content*/}
        <div className="flex flex-row w-[297px] justify-between">
          <div>
            <p className="text-2xl font-bold">Şirket</p>
            <p className="text-xl">Hakkımızda</p>
            <p className="text-xl">Ürün</p>
            <p className="text-xl">Blog</p>
            <p className="text-xl">İletişim</p>
          </div>
          <div>
            <p className="text-2xl font-bold">Yasal</p>
            <p className="text-xl">Şartlar</p>
            <p className="text-xl">Gizlilik</p>
            <p className="text-xl">Çerezler</p>
            <p className="text-xl">Lisans</p>
          </div>
        </div>
      </section>
      <section className="w-full py-8 border-t-2 border-white">
        <p className="text-center">©2024 FitAI .Tüm Hakları Saklıdır.</p>
      </section>
    </div>
  );
}

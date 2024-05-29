import { Accordion } from "./accordion";

export default function Questions() {
  return (
    <div className="container mx-auto py-48 min-h-screen grid grid-cols-12 items-center gap-28 max-sm:gap-0 max-sm:px-6 max-sm:min-h-full max-sm:py-20">
      <div className="col-span-4 flex flex-col gap-6 max-sm:col-span-12 max-sm:gap-3">
        <h3 className="text-5xl font-bold max-sm:text-3xl">
          Sıkça Sorulan Sorular
        </h3>
        <p className="text-xl max-sm:text-lg">
          Hala yardıma ihtiyacınız var mı?{"  "}
          <span className="font-bold text-christi underline">
            Şimdi Yardım Alın
          </span>
        </p>
      </div>
      <div className="col-span-8 max-sm:col-span-12 max-sm:mt-7">
        <Accordion
          items={[
            {
              title: "FitAI nedir?",
              content:
                "Lorem ipsum dolor sit amet consectetur. Laoreet ac dictumst consectetur dolor bibendum vel. At lorem facilisis magna vulputate etiam morbi imperdiet aliquam eu. A mi lectus proin quisque.",
            },
            {
              title: "Uygulama ücretsiz mi?",
              content:
                "Lorem ipsum dolor sit amet consectetur. Laoreet ac dictumst consectetur dolor bibendum vel. At lorem facilisis magna vulputate etiam morbi imperdiet aliquam eu. A mi lectus proin quisque.",
            },
            {
              title: "Nasıl kişiselleştirilmiş planlar oluşturuyorsunuz?",
              content:
                "Lorem ipsum dolor sit amet consectetur. Laoreet ac dictumst consectetur dolor bibendum vel. At lorem facilisis magna vulputate etiam morbi imperdiet aliquam eu. A mi lectus proin quisque.",
            },
            {
              title: "Kalori takibi nasıl yapılır?",
              content:
                "Lorem ipsum dolor sit amet consectetur. Laoreet ac dictumst consectetur dolor bibendum vel. At lorem facilisis magna vulputate etiam morbi imperdiet aliquam eu. A mi lectus proin quisque.",
            },
            {
              title: "Premium üyelik neleri kapsıyor?",
              content:
                "Lorem ipsum dolor sit amet consectetur. Laoreet ac dictumst consectetur dolor bibendum vel. At lorem facilisis magna vulputate etiam morbi imperdiet aliquam eu. A mi lectus proin quisque.",
            },
          ]}
        />
      </div>
    </div>
  );
}

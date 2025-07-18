import React from "react";
import { useLanguage } from "../contexts/LanguageContext";

const About = () => {
  const { language } = useLanguage();

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
              About <span className="text-accent-600">DevCrafters</span>
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Бид хэрэглэгчийн хүсэл сонирхолд нийцсэн, чанартай, бүтээлч
              шийдлүүдийг санал болгодог.
            </p>
          </div>

          {/* Вэб сайт үнийн ангилал */}
          <div className="bg-white rounded-2xl p-8 mb-16 border-2 border-black">
            <h4 className="text-2xl font-bold text-black mb-6">
              {language === "mn"
                ? "Вэб сайт хийх үнийн ангилал"
                : "Website Price Categories"}
            </h4>
            <div className="grid gap-6">
              <div className="border border-black rounded-xl p-4 bg-white">
                <div className="font-bold text-lg text-black mb-2">
                  {language === "mn"
                    ? "Танилцуулга вэб сайт"
                    : "Intro Website"}
                </div>
                <div className="text-gray-700 mb-1">
                  {language === "mn"
                    ? "Хувь хүн, компани, жижиг бизнест тохиромжтой."
                    : "Suitable for individuals, companies, and small businesses."}
                </div>
                <div className="text-black mb-1">
                  {language === "mn"
                    ? "Үнэ: 300,000 - 400,000 ₮"
                    : "Price: 300,000 - 400,000₮"}
                </div>
                <div className="text-black mb-1">
                  {language === "mn"
                    ? "Хийж гүйцэтгэх хугацаа: ажлын 2 - 3 хоног"
                    : "Development time: 2-3 business days"}
                </div>
                <div className="text-black mb-1">
                  {language === "mn"
                    ? "Удирдлага: Сайтын агуулгаа засах боломжтой"
                    : "Management: Editable site content"}
                </div>
                <div className="text-black">
                  {language === "mn" ? "Баталгаат хугацаа: ∞ " : "Warranty: ∞"}
                </div>
                <div className="text-xs text-gray-500 mt-2">
                  {language === "mn"
                    ? "Нэмэлт мэдээлэл: Хэрэглэгчийн хүсэлтээр нэмэлт функц, дизайн, SEO тохиргоо, хостинг үйлчилгээ авах боломжтой."
                    : "Additional info: Extra features, design, SEO setup, and hosting available upon request."}
                </div>
              </div>

              <div className="border border-black rounded-xl p-4 bg-white">
                <div className="font-bold text-lg text-black mb-2">
                  {language === "mn"
                    ? "Компаний танилцуулга сайт"
                    : "Company Intro Website"}
                </div>
                <div className="text-gray-700 mb-1">
                  {language === "mn"
                    ? "Байгуулага, компани, дунд, том бизнест тохиромжтой."
                    : "Suitable for organizations, companies, medium and large businesses."}
                </div>
                <div className="text-black mb-1">
                  {language === "mn"
                    ? "Үнэ: 1,000,000 ₮ -с эхэлнэ"
                    : "Price: from 1,000,000₮"}
                </div>
                <div className="text-black mb-1">
                  {language === "mn"
                    ? "Хийж гүйцэтгэх хугацаа: ажлын 3 - 5 хоног"
                    : "Development time: 3-5 business days"}
                </div>
                <div className="text-black mb-1">
                  {language === "mn"
                    ? "Удирдлага: Сайтын агуулгаа удирдах боломжтой"
                    : "Management: Full site content control"}
                </div>
                <div className="text-black">
                  {language === "mn" ? "Баталгаат хугацаа: ∞ " : "Warranty: ∞"}
                </div>
                <div className="text-xs text-gray-500 mt-2">
                  {language === "mn"
                    ? "Нэмэлт мэдээлэл: Мэдээ, блог, олон хэлний дэмжлэг, статистик, интеграци хийх боломжтой."
                    : "Additional info: News, blog, multilingual support, statistics, integrations available."}
                </div>
              </div>

              <div className="border border-black rounded-xl p-4 bg-white">
                <div className="font-bold text-lg text-black mb-2">
                  {language === "mn"
                    ? "Барааны каталоги вэб сайт"
                    : "Product Catalog Website"}
                </div>
                <div className="text-gray-700 mb-1">
                  {language === "mn"
                    ? "Бараа бүтээгдэхүүний каталоги, захиалга болон бүртгэлийн системтэй."
                    : "Product catalog, order and registration system."}
                </div>
                <div className="text-black mb-1">
                  {language === "mn"
                    ? "Үнэ: 2,000,000 ₮ -с эхэлнэ"
                    : "Price: from 2,000,000₮"}
                </div>
                <div className="text-black mb-1">
                  {language === "mn"
                    ? "Хийж гүйцэтгэх хугацаа: ажлын 10 - 12 хоног"
                    : "Development time: 10-12 business days"}
                </div>
                <div className="text-black mb-1">
                  {language === "mn"
                    ? "Удирдлага: Сайтын агуулгаа удирдах боломжтой"
                    : "Management: Full site content control"}
                </div>
                <div className="text-black">
                  {language === "mn" ? "Баталгаат хугацаа: ∞ " : "Warranty: ∞"}
                </div>
                <div className="text-xs text-gray-500 mt-2">
                  {language === "mn"
                    ? "Нэмэлт мэдээлэл: Барааны хайлт, ангилал, захиалгын форм, хэрэглэгчийн бүртгэл, тайлангийн систем."
                    : "Additional info: Product search, categories, order form, user registration, reporting system."}
                </div>
              </div>

              <div className="border border-black rounded-xl p-4 bg-white">
                <div className="font-bold text-lg text-black mb-2">
                  {language === "mn"
                    ? "Онлайн худалдааны сайт"
                    : "Online Store Website"}
                </div>
                <div className="text-gray-700 mb-1">
                  {language === "mn"
                    ? "Интэрнэтээр дамжуулан бараа бүтээгдэхүүнээ борлуулах, төлбөр тооцоо хийх боломжтой сайт."
                    : "Sell products online, accept payments."}
                </div>
                <div className="text-black mb-1">
                  {language === "mn"
                    ? "Үнэ: 4,000,000 ₮ -с эхэлнэ"
                    : "Price: from 4,000,000₮"}
                </div>
                <div className="text-black mb-1">
                  {language === "mn"
                    ? "Хийж гүйцэтгэх хугацаа: ажлын 12 - 14 хоног"
                    : "Development time: 12-14 business days"}
                </div>
                <div className="text-black mb-1">
                  {language === "mn"
                    ? "Удирдлага: Сайтын агуулгаа удирдана"
                    : "Management: Full site content control"}
                </div>
                <div className="text-black">
                  {language === "mn" ? "Баталгаат хугацаа: ∞ " : "Warranty: ∞"}
                </div>
                <div className="text-xs text-gray-500 mt-2">
                  {language === "mn"
                    ? "Нэмэлт мэдээлэл: Онлайн төлбөр, хүргэлтийн систем, купон, урамшуулал, хэрэглэгчийн удирдлага, тайлан."
                    : "Additional info: Online payment, delivery system, coupons, promotions, user management, reporting."}
                </div>
              </div>

              <div className="border border-black rounded-xl p-4 bg-white">
                <div className="font-bold text-lg text-black mb-2">
                  {language === "mn"
                    ? "Боловсролын систем"
                    : "Education System Website"}
                </div>
                <div className="text-gray-700 mb-1">
                  {language === "mn"
                    ? "Онлайн сургалтын платформ (LMS): багш/суралцагчийн бүртгэл, хичээл, шалгалт, оноо."
                    : "Online learning platform (LMS): teacher/student registration, lessons, exams, scores."}
                </div>
                <div className="text-black mb-1">
                  {language === "mn"
                    ? "Үнэ: 8,000,000 ₮ -с эхэлнэ"
                    : "Price: from 8,000,000₮"}
                </div>
                <div className="text-black mb-1">
                  {language === "mn"
                    ? "Хийж гүйцэтгэх хугацаа: ажлын 25 - 30 хоног"
                    : "Development time: 25-30 business days"}
                </div>
                <div className="text-black mb-1">
                  {language === "mn"
                    ? "Удирдлага: Сайтын агуулгаа удирдана"
                    : "Management: Full site content control"}
                </div>
                <div className="text-black">
                  {language === "mn" ? "Баталгаат хугацаа: ∞ " : "Warranty: ∞"}
                </div>
                <div className="text-xs text-gray-500 mt-2">
                  {language === "mn"
                    ? "Нэмэлт мэдээлэл: Онлайн тест, видео хичээл, сертификат, багшийн удирдлага, тайлан, интеграци."
                    : "Additional info: Online tests, video lessons, certificates, teacher management, reporting, integrations."}
                </div>
              </div>

              <div className="border border-black rounded-xl p-4 bg-white">
                <div className="font-bold text-lg text-black mb-2">
                  {language === "mn"
                    ? "Тусгай захиалгат вэб сайт"
                    : "Custom Website"}
                </div>
                <div className="text-gray-700 mb-1">
                  {language === "mn"
                    ? "Таны хүсэл сонирхолд нийцүүлэн хийх болно."
                    : "Will be developed according to your requirements."}
                </div>
                <div className="text-black mb-1">
                  {language === "mn" ? "Үнэ: ?" : "Price: ?"}
                </div>
                <div className="text-black mb-1">
                  {language === "mn" ? "Хийж гүйцэтгэх хугацаа: ?" : "Development time: ?"}
                </div>
                <div className="text-black mb-1">
                  {language === "mn"
                    ? "Удирдлага: Сайтын агуулгаа удирдана"
                    : "Management: Full site content control"}
                </div>
                <div className="text-black">
                  {language === "mn" ? "Баталгаат хугацаа: ∞ " : "Warranty: ∞"}
                </div>
                <div className="text-xs text-gray-500 mt-2">
                  {language === "mn"
                    ? "Нэмэлт мэдээлэл: Тусгай функц, дизайн, интеграци, API, enterprise шийдэл, зөвлөгөө өгөх үйлчилгээ."
                    : "Additional info: Custom features, design, integrations, API, enterprise solutions, consulting."}
                </div>
              </div>

              {/* Нэмэлт төрөлүүд */}
              <div className="border border-black rounded-xl p-4 bg-white mt-8">
                <h5 className="font-bold text-xl mb-3 text-black">
                  Нэмэлт вэб сайт төрлүүд
                </h5>

                <div className="mb-4">
                  <div className="font-semibold text-lg text-black">
                    Блог/Мэдээ мэдээллийн сайт
                  </div>
                  <div className="text-gray-700 mb-1">
                    Мэдээ, нийтлэл, нийтлэг блог функцтэй. Олон нийттэй харилцах,
                    сэтгэгдэл үлдээх боломжтой.
                  </div>
                  <div className="text-gray-700 mb-1">
                    Нэмэлт мэдээлэл: олон хэлний дэмжлэг, SEO оптимизаци, нийгмийн
                    сүлжээтэй холболт.
                  </div>
                  <div className="text-black">
                    Үнэ, хугацаа: 1,000,000₮ – 1,500,000₮, 5-7 хоног
                  </div>
                </div>

                <div className="mb-4">
                  <div className="font-semibold text-lg text-black">
                    Үйлчилгээний захиалгын сайт
                  </div>
                  <div className="text-gray-700 mb-1">
                    Онлайн үйлчилгээний бүртгэл, захиалга хийх системтэй. Жишээ нь:
                    засвар үйлчилгээ, эрүүл мэндийн үйлчилгээ, сургалт.
                  </div>
                  <div className="text-gray-700 mb-1">
                    Нэмэлт мэдээлэл: төлбөрийн систем нэмж болно.
                  </div>
                  <div className="text-black">Үнэ: 2,000,000₮ – 3,000,000₮, 10-14 хоног</div>
                </div>

                <div className="mb-4">
                  <div className="font-semibold text-lg text-black">
                    Нийгмийн сүлжээ, форум
                  </div>
                  <div className="text-gray-700 mb-1">
                    Хэрэглэгчид хоорондоо харилцах, пост бичих, сэтгэгдэл үлдээх
                    боломжтой.
                  </div>
                  <div className="text-gray-700 mb-1">
                    Нэмэлт мэдээлэл: хэрэглэгчийн удирдлага, модераци.
                  </div>
                  <div className="text-black">Үнэ: 3,000,000₮ ба түүнээс дээш, хугацаа хамаарч</div>
                </div>

                <div>
                  <div className="font-semibold text-lg text-black">
                    Корпоратив ERP системийн вэб интерфейс
                  </div>
                  <div className="text-gray-700 mb-1">
                    Аж ахуйн нэгжийн дотоод нөөцийн удирдлагын систем.
                  </div>
                  <div className="text-gray-700 mb-1">
                    Нэмэлт мэдээлэл: санхүү, хүний нөөц, борлуулалт зэрэг модулиудтай.
                  </div>
                  <div className="text-black">Үнэ: Тусгай тооцоо, захиалгат хөгжүүлэлттэй</div>
                </div>
              </div>
            </div>

            {/* Mission & Vision хэсгийг хассан */}

            {/* Values хэсгийг хассан */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

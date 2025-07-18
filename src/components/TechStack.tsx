import React from 'react';
import { Code, Database, Cloud, Palette, Smartphone, Zap } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const TechStack = () => {
  const { language } = useLanguage();

  const technologies = [
    {
      category: "Frontend",
      icon: <Code className="h-8 w-8" />,
      color: "from-blue-500 to-indigo-600",
      techs: [
        { name: "React", description: "Орчин үеийн UI хөгжүүлэлтийн сан" },
        { name: "Next.js", description: "React суурьтай, продакшнд бэлэн вэб фреймворк" },
        { name: "Vue.js", description: "Прогрессив JavaScript фреймворк" },
        { name: "TypeScript", description: "JavaScript-ийн төрөлжүүлсэн хувилбар" },
        { name: "Tailwind CSS", description: "Utility-first CSS framework" }
      ]
    },
    {
      category: "Backend",
      icon: <Database className="h-8 w-8" />,
      color: "from-green-500 to-emerald-600",
      techs: [
        { name: "Node.js", description: "Өргөтгөх боломжтой серверийн runtime" },
        { name: "Python", description: "Уян хатан програмчлалын хэл" },
        { name: "Django", description: "Python суурьтай вэб фреймворк" },
        { name: "PostgreSQL", description: "Дэвшилтэт реляц өгөгдлийн сан" },
        { name: "MongoDB", description: "NoSQL баримт бичгийн өгөгдлийн сан" }
      ]
    },
    {
      category: "Cloud & DevOps",
      icon: <Cloud className="h-8 w-8" />,
      color: "from-purple-500 to-violet-600",
      techs: [
        { name: "AWS", description: "Amazon Web Services үүлэн платформ" },
        { name: "Docker", description: "Контейнержуулах платформ" },
        { name: "Kubernetes", description: "Контейнер зохион байгуулалт" },
        { name: "CI/CD", description: "Тасралтгүй интеграци ба хүргэлт" },
        { name: "Vercel", description: "Орчин үеийн вэб апп-д зориулсан байршуулалтын платформ" }
      ]
    },
    {
      category: "Дизайн",
      icon: <Palette className="h-8 w-8" />,
      color: "from-pink-500 to-rose-600",
      techs: [
        { name: "Figma", description: "UI/UX дизайн хамтын ажиллагааны хэрэгсэл" },
        { name: "Adobe XD", description: "Вектор суурьтай дизайн хэрэгсэл" },
        { name: "Framer Motion", description: "React-д зориулсан анимацын сан" },
        { name: "GSAP", description: "Мэргэжлийн анимацын сан" },
        { name: "Lottie", description: "Вэб болон мобайлд зориулсан анимацын формат" }
      ]
    },
    {
      category: "Мобайл",
      icon: <Smartphone className="h-8 w-8" />,
      color: "from-orange-500 to-red-600",
      techs: [
        { name: "React Native", description: "Олон платформд зориулсан мобайл хөгжүүлэлт" },
        { name: "Flutter", description: "Google-ийн мобайл UI toolkit" },
        { name: "PWA", description: "Прогрессив вэб аппликэйшн" },
        { name: "Ionic", description: "Холимог мобайл апп хөгжүүлэлт" },
        { name: "Expo", description: "Универсал React апп-д зориулсан платформ" }
      ]
    },
    {
      category: "Хэрэгсэлүүд",
      icon: <Zap className="h-8 w-8" />,
      color: "from-yellow-500 to-amber-600",
      techs: [
        { name: "Git", description: "Хувилбарын удирдлагын систем" },
        { name: "Webpack", description: "Модул багцлагч" },
        { name: "Vite", description: "Хурдан build tool" },
        { name: "ESLint", description: "JavaScript код шалгагч" },
        { name: "Prettier", description: "Код форматлагч" }
      ]
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
              Манай <span className="text-black border-b-2 border-black pb-1">Технологийн стек</span>
            </h2>
            <p className="text-xl text-black max-w-3xl mx-auto">
              Бид хамгийн сүүлийн үеийн технологиудыг ашиглан таны бизнест онцгой үр дүнг хүргэх болно.
            </p>
          </div>

          {/* Tech Categories */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technologies.map((category, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-6 border border-black hover:bg-gray-50 transition-all duration-200 group"
              >
                {/* Category Header */}
                <div className="flex items-center mb-6">
                  <div className="p-3 rounded-xl bg-white border border-black mr-4">
                    <div className="text-black">
                      {category.icon}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-black">
                    {category.category}
                  </h3>
                </div>

                {/* Technologies List */}
                <div className="space-y-4">
                  {category.techs.map((tech, techIndex) => (
                    <div key={techIndex}>
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <div>
                          <h4 className="font-semibold text-black">
                            {tech.name}
                          </h4>
                          {/* tailbar hasagdsan */}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Stats Section */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "50+", label: language === "mn" ? "Ашигладаг технологи" : "Technologies Used" },
              { number: "100+", label: language === "mn" ? "Гүйцэтгэсэн төсөл" : "Projects Completed" },
              { number: "2+", label: language === "mn" ? "Ажлын туршлага (жил)" : "Years of Experience" },
              { number: "24/7", label: language === "mn" ? "Бид танд туслахад бэлэн байна" : "We are ready to help you" }
            ].map((stat, index) => (
              <div key={index} className="text-center bg-white border border-black rounded-xl p-6">
                <div className="text-3xl md:text-4xl font-bold text-black mb-2">
                  {stat.number}
                </div>
                <div className="text-black">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
import React from 'react';
import { Globe, Smartphone, Palette, Search, Code, Zap } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Services = () => {
  const { language } = useLanguage();

  const services = {
    mn: [
      {
        icon: <Globe className="h-8 w-8 text-black" />,
        title: "Вэб сайт хөгжүүлэлт",
        description: "Орчин үеийн технологиор, өндөр гүйцэтгэлтэй, хэрэглэгчдэд ээлтэй вэб сайтыг захиалгаар бүтээнэ.",
        features: ["Бүх төхөөрөмжид нийцсэн дизайн", "SEO тохиргоо", "Хурдан ачаалал", "Орчин үеийн UI/UX"]
      },
      {
        icon: <Smartphone className="h-8 w-8 text-black" />,
        title: "Вэб аппликэйшн хөгжүүлэлт",
        description: "Таны бизнесийн хэрэгцээнд нийцсэн, өргөтгөх боломжтой вэб аппликэйшнүүдийг бүтээнэ.",
        features: ["Swift/Kotlin", "Node.js сервер", "Өгөгдлийн сангийн интеграци", "API хөгжүүлэлт"]
      },
      {
        icon: <Palette className="h-8 w-8 text-black" />,
        title: "UI/UX дизайн",
        description: "Хэрэглэгчдийг татах, үр дүнтэй, гоёмсог интерфэйсүүдийг бүтээнэ.",
        features: ["Хэрэглэгчийн судалгаа", "Wireframe", "Прототип", "Дизайн систем"]
      },
      {
        icon: <Search className="h-8 w-8 text-black" />,
        title: "SEO оновчлол",
        description: "Таны вэб сайтын хайлтын системд илүү сайн харагдах, дээд зэрэглэлийн SEO шийдэл.",
        features: ["Техникийн SEO", "Контент стратеги", "Гүйцэтгэлийн оновчлол", "Аналитик суурилуулалт"]
      },
      {
        icon: <Code className="h-8 w-8 text-black" />,
        title: "Захиалгат хөгжүүлэлт",
        description: "Таны бизнесийн онцлогт тохирсон, тусгай шийдэл бүхий вэб хөгжүүлэлт.",
        features: ["Тусгай функцууд", "Гуравдагч талын интеграци", "Хуучин систем шинэчлэлт", "Үйлчилгээний дэмжлэг"]
      },
      {
        icon: <Zap className="h-8 w-8 text-black" />,
        title: "Гүйцэтгэлийн оновчлол",
        description: "Вэб сайт, аппликэйшний хурдыг нэмэгдүүлж, хэрэглэгчийн туршлагыг сайжруулах шийдэл.",
        features: [
          "Код оновчлол – JavaScript, CSS, HTML файлуудыг цэгцэлж, хурдан ажиллагааг хангах. Жишээ: файлуудыг багасгах (minify), асинхрон ачаалах.",
          "Зураг – Зургийг WebP, JPEG, PNG формат руу хөрвүүлж, чанар алдалгүй багасгах.",
          "Кэш систем – Браузер болон серверийн кэш ашиглан дахин ачаалалгүйгээр хурд нэмэгдүүлэх."
        ]
      }
    ],
    en: [
      {
        icon: <Globe className="h-8 w-8 text-black" />,
        title: "Website Development",
        description: "We build custom websites with modern technology, high performance, and user-friendly design.",
        features: ["Responsive design", "SEO setup", "Fast loading", "Modern UI/UX"]
      },
      {
        icon: <Smartphone className="h-8 w-8 text-black" />,
        title: "Web Application Development",
        description: "We create scalable web applications tailored to your business needs.",
        features: ["Swift/Kotlin", "Node.js server", "Database integration", "API development"]
      },
      {
        icon: <Palette className="h-8 w-8 text-black" />,
        title: "UI/UX Design",
        description: "We design attractive, effective interfaces that engage users.",
        features: ["User research", "Wireframe", "Prototype", "Design system"]
      },
      {
        icon: <Search className="h-8 w-8 text-black" />,
        title: "SEO Optimization",
        description: "Premium SEO solutions to make your website more visible in search engines.",
        features: ["Technical SEO", "Content strategy", "Performance optimization", "Analytics setup"]
      },
      {
        icon: <Code className="h-8 w-8 text-black" />,
        title: "Custom Development",
        description: "Special web solutions tailored to your business requirements.",
        features: ["Custom features", "Third-party integration", "Legacy system upgrade", "Service support"]
      },
      {
        icon: <Zap className="h-8 w-8 text-black" />,
        title: "Performance Optimization",
        description: "We improve the speed and user experience of your website and applications.",
        features: [
          "Code optimization – Clean up JavaScript, CSS, HTML for fast performance. Example: minify files, async loading.",
          "Images – Convert images to WebP, JPEG, PNG formats and compress without quality loss.",
          "Cache system – Use browser and server cache for faster reloads."
        ]
      }
    ]
  };

  const sectionContent = {
    mn: {
      header: 'Манай',
      highlight: 'Үйлчилгээ',
      description: 'Бид таны бизнесийг дижитал орчинд амжилттай болгох цогц вэб хөгжүүлэлтийн шийдлүүдийг санал болгодог.',
      ctaTitle: 'Төслөө эхлүүлэхэд бэлэн үү?',
      ctaDesc: 'Манай мэргэжлийн баг таны санааг бодит болгож, вэб хөгжүүлэлтийн бүх шатанд хамтран ажиллана.',
      ctaBtn: 'Холбогдох'
    },
    en: {
      header: 'Our',
      highlight: 'Services',
      description: 'We offer comprehensive web development solutions to help your business succeed in the digital world.',
      ctaTitle: 'Ready to start your project?',
      ctaDesc: 'Our professional team will bring your ideas to life and work with you at every stage of web development.',
      ctaBtn: 'Get In Touch'
    }
  };

  const t = sectionContent[language];
  const serviceList = services[language];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
              {t.header} <span className="text-black border-b-2 border-black pb-1">{t.highlight}</span>
            </h2>
            <p className="text-xl text-black max-w-3xl mx-auto">
              {t.description}
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceList.map((service, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl p-8 border border-black hover:bg-gray-50 transition-all duration-200"
              >
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-white border border-black rounded-xl mr-4">
                    <div className="text-black">
                      {service.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-black">
                    {service.title}
                  </h3>
                </div>
                <p className="text-black mb-6">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-black">
                      <div className="w-2 h-2 bg-black rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center">
            <div className="bg-white border border-black rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4 text-black">{t.ctaTitle}</h3>
              <p className="text-black mb-6">
                {t.ctaDesc}
              </p>
              <button 
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-3 bg-white text-black border border-black rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
              >
                {t.ctaBtn}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
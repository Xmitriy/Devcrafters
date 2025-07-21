import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const TechStack = () => {
  const { language } = useLanguage();

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

          {/* Tech Logos */}
          <div className="flex flex-wrap gap-5 items-center justify-center mb-8">
            {[
              { name: "React", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" className="h-12 w-12" /> },
              { name: "Next.js", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" alt="Next.js" className="h-12 w-12 bg-white rounded" /> },
              { name: "Vue.js", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" alt="Vue.js" className="h-12 w-12" /> },
              { name: "TypeScript", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" alt="TypeScript" className="h-12 w-12" /> },
              { name: "Tailwind CSS", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" alt="Tailwind CSS" className="h-12 w-12" /> },
              { name: "Node.js", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" className="h-12 w-12" /> },
              { name: "Python", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" className="h-12 w-12" /> },
              { name: "Django", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" alt="Django" className="h-12 w-12 bg-white rounded" /> },
              { name: "PostgreSQL", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" alt="PostgreSQL" className="h-12 w-12" /> },
              { name: "MongoDB", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" alt="MongoDB" className="h-12 w-12" /> },
              { name: "Docker", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" alt="Docker" className="h-12 w-12" /> },
              { name: "Kubernetes", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" alt="Kubernetes" className="h-12 w-12" /> },
              { name: "CI/CD", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/githubactions/githubactions-plain.svg" alt="CI/CD" className="h-12 w-12" /> },
              { name: "Vercel", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg" alt="Vercel" className="h-12 w-12 bg-white rounded" /> },
              { name: "Figma", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" alt="Figma" className="h-12 w-12" /> },
              { name: "Adobe XD", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xd/xd-plain.svg" alt="Adobe XD" className="h-12 w-12" /> },
              { name: "Ionic", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ionic/ionic-original.svg" alt="Ionic" className="h-12 w-12" /> },
              { name: "Expo", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/expo/expo-original.svg" alt="Expo" className="h-12 w-12 bg-white rounded" /> },
              { name: "Git", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="Git" className="h-12 w-12" /> },
              { name: "Webpack", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-original.svg" alt="Webpack" className="h-12 w-12" /> },
              { name: "Vite", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vite/vite-original.svg" alt="Vite" className="h-12 w-12" /> },
              { name: "ESLint", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/eslint/eslint-original.svg" alt="ESLint" className="h-12 w-12" /> }
            ].map((tech, idx) => (
              <div key={idx} className="flex flex-col items-center">
                {tech.icon}
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
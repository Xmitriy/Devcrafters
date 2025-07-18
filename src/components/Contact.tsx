import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Clock } from 'lucide-react';
import emailjs from 'emailjs-com';
import { useLanguage } from '../contexts/LanguageContext';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSent, setIsSent] = useState(false);
  const { language } = useLanguage();

  const labels = {
    mn: {
      header: 'Холбоо',
      highlight: 'барих',
      desc: 'Таны дараагийн төслийг эхлүүлэхэд бэлэн үү? Бид таны хүсэл, санааг бодит болгоход туслахад бэлэн байна.',
      formTitle: 'Бидэнд зурвас илгээх',
      name: 'Нэр',
      email: 'Имэйл',
      subject: 'Сэдэв',
      message: 'Зурвас',
      namePh: 'Таны нэр',
      emailPh: 'Таны имэйл',
      subjectPh: 'Төслийн талаар',
      messagePh: 'Төслийнхаа талаар бичнэ үү...',
      sendBtn: 'Зурвас илгээх',
      sentMsg: 'Илгээгдлээ! Автомат хариу таны имэйл рүү илгээгдсэн.'
    },
    en: {
      header: 'Contact',
      highlight: 'Us',
      desc: 'Ready to start your next project? We are ready to help bring your ideas to life.',
      formTitle: 'Send us a message',
      name: 'Name',
      email: 'Email',
      subject: 'Subject',
      message: 'Message',
      namePh: 'Your name',
      emailPh: 'Your email',
      subjectPh: 'Project inquiry',
      messagePh: 'Tell us about your project...',
      sendBtn: 'Send Message',
      sentMsg: 'Sent! An automatic reply has been sent to your email.'
    }
  };
  const t = labels[language];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const templateParams = {
      user_name: formData.name,
      user_email: formData.email,
      subject: formData.subject,
      message: formData.message
    };

    emailjs.send(
      'service_5l4cpas',
      'template_4qtudgd',
      templateParams,
      'xeDLMpdbpeTJSPcjz' // Public key
    )
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      setIsSent(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    })
    .catch((err) => {
      console.error('FAILED...', err);
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
              {t.header} <span className="text-accent-600">{t.highlight}</span>
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              {t.desc}
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-black">
              <h3 className="text-2xl font-bold text-black mb-6">
                {t.formTitle}
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      {t.name}
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-black rounded-lg bg-white text-black"
                      placeholder={t.namePh}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      {t.email}
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-black rounded-lg bg-white text-black"
                      placeholder={t.emailPh}
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    {t.subject}
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-black rounded-lg bg-white text-black"
                    placeholder={t.subjectPh}
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    {t.message}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-black rounded-lg bg-white text-black resize-none"
                    placeholder={t.messagePh}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-white border-2 border-black text-black py-3 px-6 rounded-lg font-semibold hover:bg-gray-100 flex items-center justify-center relative overflow-hidden"
                >
                  <span className={isSent ? "animate-bounce-in" : ""}>
                    <Send className="mr-2 h-5 w-5" />
                    {t.sendBtn}
                  </span>
                  {isSent && (
                    <span className="absolute inset-0 flex items-center justify-center bg-green-100 text-green-700 font-bold rounded-lg animate-fade-in z-10">
                      ✓
                    </span>
                  )}
                </button>
                {isSent && (
                  <p className="text-green-600 font-semibold mt-4 animate-fade-in">
                    {t.sentMsg}
                  </p>
                )}
              </form>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-black">
              <h3 className="text-2xl font-bold text-black mb-6">
                Бидэнтэй холбогдох
              </h3>
              <div className="flex flex-col space-y-4">
                <div className="flex items-center">
                  <Mail className="h-6 w-6 text-accent-600 mr-4" />
                  <span className="text-gray-700">
                    devcrafters5@gmail.com
                  </span>
                </div>
                <div className="flex items-center">
                  <Phone className="h-6 w-6 text-accent-600 mr-4" />
                  <span className="text-gray-700">
                    +976 85004648
                  </span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-6 w-6 text-accent-600 mr-4" />
                  <span className="text-gray-700">
                    Хаяг: Улаанбаатар
                  </span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-6 w-6 text-accent-600 mr-4" />
                  <span className="text-gray-700">
                    Даваа - Баасан: 9:00 - 18:00
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

/* Add animation styles to index.css:
.animate-bounce-in {
  animation: bounce-in 0.6s cubic-bezier(.36,.07,.19,.97) both;
}
@keyframes bounce-in {
  0% { transform: scale(0.8); opacity: 0; }
  60% { transform: scale(1.1); opacity: 1; }
  100% { transform: scale(1); opacity: 1; }
}
.animate-fade-in {
  animation: fade-in 0.6s ease-out;
}
*/

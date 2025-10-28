import React, { useState } from "react";
import { FaCalendarAlt, FaUser, FaArrowRight } from "react-icons/fa";
import news1 from "../assets/images/news1.jpg"
import news2 from "../assets/images/news2.jpg"
import news3 from "../assets/images/news3.jpg"
import news4 from "../assets/images/news4.jpg"
import history1 from "../assets/images/history2.jpg"
import history2 from "../assets/images/history3.jpg"
import history3 from "../assets/images/history1.jpg"

const NewsSection = () => {
  const articles = [
    // 🧠 Научные новости
    {
      id: 1,
      title: "В Китае впервые обнаружен редкий штамм ВИЧ-2",
      excerpt:
        "Редкий штамм ВИЧ-2 найден в провинции Сычуань. Он развивается медленнее и имеет меньший риск передачи.",
      date: "10 мая 2024",
      author: "RBC.ru",
      category: "Наука",
      image:
        `${news1}`,
      link: "https://rbc.ru",
    },
    {
      id: 2,
      title:
        "ВОЗ рекомендовала ленакапавир для профилактики ВИЧ дважды в год",
      excerpt:
        "Препарат снижает риск заражения почти на 100% и может изменить подход к профилактике.",
      date: "8 мая 2024",
      author: "WHO.int",
      category: "Наука",
      image:
        `${news2}`,
      link: "https://who.int",
    },
    {
      id: 3,
      title: "CRISPR-терапия: шаг к излечению ВИЧ",
      excerpt:
        "Учёные смогли удалить вирус из ДНК заражённых клеток. Метод проходит клинические испытания.",
      date: "2 мая 2024",
      author: "SecurityLab.ru",
      category: "Наука",
      image:
        `${news3}`,
      link: "https://securitylab.ru",
    },
    {
      id: 4,
      title: "10 случаев излечения ВИЧ после пересадки стволовых клеток",
      excerpt:
        "Пересадка доноров с мутацией CCR5-Δ32 блокирует проникновение вируса. Надежда на излечение растёт.",
      date: "25 апреля 2024",
      author: "Aidsmap",
      category: "Наука",
      image:
        `${news4}`,
      link: "https://aidsmap.com",
    },

    // 💪 Истории успеха
    {
      id: 5,
      title: "Тимоти Рэй Браун — первый человек, победивший ВИЧ",
      excerpt:
        "После пересадки костного мозга от донора с мутацией CCR5Δ32, Тимоти полностью избавился от вируса.",
      date: "15 апреля 2024",
      author: "Wikipedia",
      category: "Истории успеха",
      image:
        `${history1}`,
      link: "https://ru.wikipedia.org/wiki/Timothy_Ray_Brown",
    },
    {
      id: 6,
      title: "Пол Эдмондс — третий пациент без ВИЧ и рака",
      excerpt:
        "После пересадки стволовых клеток Пол живёт без признаков вируса и без терапии.",
      date: "12 апреля 2024",
      author: "City of Hope",
      category: "Истории успеха",
      image:
        `${history2}`,
      link: "https://spid.center/ru/posts/9381",
    },
    {
      id: 7,
      title: "Реальные истории людей, живущих с ВИЧ",
      excerpt:
        "Тысячи людей по всему миру ведут активную жизнь, создают семьи и борются со стигмой. Лечение позволяет полностью контролировать вирус.",
      date: "5 апреля 2024",
      author: "ViiV Healthcare",
      category: "Истории успеха",
      image:
        `${history3}`,
      link: "https://viivhealthcare.com",
    },
  ];

  const categories = ["Все", "Наука", "Истории успеха"];

  const [activeCategory, setActiveCategory] = useState("Все");

  const filteredArticles =
    activeCategory === "Все"
      ? articles
      : articles.filter((a) => a.category === activeCategory);

  return (
    <section id="новости" className="py-20 bg-gradient-to-b from-white to-red-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-extrabold text-red-800 leading-tight mb-4 max-md:text-4xl">
            Последние новости и истории успеха
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Научные достижения, реальные истории и вдохновляющие примеры
          </p>
        </div>

        {/* Категории */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full transition-colors duration-300 ${
                activeCategory === category
                  ? "bg-red-600 text-white"
                  : "bg-white text-red-600 hover:bg-red-100"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Сетка карточек */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map((article) => (
            <div
              key={article.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center text-sm text-red-500 mb-2">
                  <span className="bg-red-100 px-3 py-1 rounded-full">
                    {article.category}
                  </span>
                  <span className="mx-2">•</span>
                  <div className="flex items-center">
                    <FaCalendarAlt className="mr-1" />
                    {article.date}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-red-700 mb-2">
                  {article.title}
                </h3>
                <p className="text-gray-600 mb-4 flex-grow">{article.excerpt}</p>
                <div className="flex items-center justify-between mt-auto">
                  <div className="flex items-center text-sm text-gray-500">
                    <FaUser className="mr-1" />
                    <span>{article.author}</span>
                  </div>
                  <a
                    href={article.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-red-600 hover:text-red-700 font-medium flex items-center transition-colors duration-300"
                  >
                    <span className="mr-1">Подробнее</span>
                    <FaArrowRight className="text-sm" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;

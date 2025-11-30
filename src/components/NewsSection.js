import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { FaCalendarAlt, FaUser, FaArrowRight } from "react-icons/fa";
import news1 from "../assets/images/news1.jpg"
import news2 from "../assets/images/news2.jpg"
import news3 from "../assets/images/news3.jpg"
import news4 from "../assets/images/news4.jpg"
import history1 from "../assets/images/history2.jpg"
import history2 from "../assets/images/history3.jpg"
import history3 from "../assets/images/history1.jpg"

const NewsSection = () => {
  const { t } = useTranslation();

  const articles = [
    // 🧠 Научные новости
    {
      id: 1,
      title: t("news_1_title"),
      excerpt: t("news_1_excerpt"),
      date: "10 мая 2024",
      author: "RBC.ru",
      category: t("news_category_science"),
      image:
        `${news1}`,
      link: "https://www.rbc.ru/rbcfreenews/68f767fa9a79474f2b4f1ea8?ysclid=mia5niahsh588016454",
    },
    {
      id: 2,
      title: t("news_2_title"),
      excerpt: t("news_2_excerpt"),
      date: "8 мая 2024",
      author: "WHO.int",
      category: t("news_category_science"),
      image:
        `${news2}`,
      link: "https://www.who.int/ru/news/item/14-07-2025-who-recommends-injectable-lenacapavir-for-hiv-prevention",
    },
    {
      id: 3,
      title: t("news_3_title"),
      excerpt: t("news_3_excerpt"),
      date: "2 мая 2024",
      author: "SecurityLab.ru",
      category: t("news_category_science"),
      image:
        `${news3}`,
      link: "https://spid.ru/news/opublikovany-dannye-pervogo-ispytaniya-gennoy-terapii-crispr-dlya-lecheniya-vich-u-lyudey?ysclid=mia5rpqff437799798",
    },
    {
      id: 4,
      title: t("news_4_title"),
      excerpt: t("news_4_excerpt"),
      date: "25 апреля 2024",
      author: "Aidsmap",
      category: t("news_category_science"),
      image:
        `${news4}`,
      link: "https://translated.turbopages.org/proxy_u/en-ru.ru.acc8bc31-69219374-a611ec4d-74722d776562/https/aidsrestherapy.biomedcentral.com/articles/10.1186/s12981-016-0114-y",
    },

    // 💪 Истории успеха
    {
      id: 5,
      title: t("news_5_title"),
      excerpt: t("news_5_excerpt"),
      date: "15 апреля 2024",
      author: "Wikipedia",
      category: t("news_category_success_stories"),
      image:
        `${history1}`,
      link: "https://ru.wikipedia.org/wiki/Timothy_Ray_Brown",
    },
    {
      id: 6,
      title: t("news_6_title"),
      excerpt: t("news_6_excerpt"),
      date: "12 апреля 2024",
      author: "City of Hope",
      category: t("news_category_success_stories"),
      image:
        `${history2}`,
      link: "https://spid.center/ru/posts/9381",
    },
    {
      id: 7,
      title: t("news_7_title"),
      excerpt: t("news_7_excerpt"),
      date: "5 апреля 2024",
      author: "ViiV Healthcare",
      category: t("news_category_success_stories"),
      image:
        `${history3}`,
      link: "https://viivhealthcare.com",
    },
  ];

  const categories = [t("news_category_all"), t("news_category_science"), t("news_category_success_stories")];

  const [activeCategory, setActiveCategory] = useState(t("news_category_all"));

  const filteredArticles =
    activeCategory === t("news_category_all")
      ? articles
      : articles.filter((a) => a.category === activeCategory);

  return (
    <section id="новости" className="py-20 bg-gradient-to-b from-white to-red-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-extrabold text-red-800 leading-tight mb-4 max-md:text-4xl">
            {t("news_section_title")}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t("news_section_subtitle")}
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
                    <span className="mr-1">{t("news_read_more")}</span>
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

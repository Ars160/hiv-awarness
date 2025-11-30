import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const Features = () => {

  const { t } = useTranslation();

  const titles = [
    {
      title: t("features_section_title1"),
      text: t("features_section_description1"),
    },
    {
      title: t("features_section_title2"),
      text: t("features_section_description2"),
    },
    {
      title: t("features_section_title3"),
      text: t("features_section_description3"),
    },
    {
      title: t("features_section_title4"),
      text: t("features_section_description4"),
    },
    {
      title: t("features_section_title5"),
      text: t("features_section_description5"),
    },
    {
      title: t("features_section_title6"),
      text: t("features_section_description6"),
    },

  ];

  const [opentitle, setOpentitle] = useState(null);

  const toggletitle = (index) => {
    if (opentitle === index) {
      setOpentitle(null);
    } else {
      setOpentitle(index);
    }
  };

  return (
    <section
      id="информация-о-вич"
      className="py-20 bg-gradient-to-b from-red-100 via-red-200 to-red-300"
    >
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-5xl font-extrabold text-red-800 leading-tight mb-12 max-md:text-4xl">
          {t("features_section_title")}
        </h2>
        <div className="max-w-3xl mx-auto">
          {titles.map((title, i) => (
            <div key={i} className="mb-4">
              <button
                onClick={() => toggletitle(i)}
                className="w-full text-left bg-white p-6 rounded-xl shadow-md hover:shadow-lg focus:outline-none transition duration-300"
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-semibold text-red-600">
                    {title.title}
                  </h3>
                  <span
                    className={`transform transition-transform duration-300 ${
                      opentitle === i ? "rotate-180" : ""
                    }`}
                  >
                    <svg
                      className="w-6 h-6 text-red-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      ></path>
                    </svg>
                  </span>
                </div>
              </button>
              <div
                className={`overflow-hidden transition-max-height duration-500 ease-in-out ${
                  opentitle === i ? "max-h-screen" : "max-h-0"
                }`}
              >
                <div className="bg-white p-6 mt-2 rounded-xl shadow-inner">
                  <p className="text-gray-600 text-lg leading-relaxed text-left">
                    {title.text}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

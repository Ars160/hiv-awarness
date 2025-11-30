import React from "react";
import hivImg from "../assets/images/1.jpg";
import aidsImg from "../assets/images/2.jpg";
import protectionImg from "../assets/images/3.jpg";
import { useTranslation } from "react-i18next";


const Goals = () => {

  const { t } = useTranslation();

  return (
    <section
      id="goals"
      className="py-20 bg-gradient-to-b from-red-50 to-white text-gray-800"
    >
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-5xl font-extrabold text-red-800 leading-tight max-md:text-4xl">
          {t("courses_title")}
        </h2>
        <p className="mt-4 text-lg text-red-600 max-md:text-base">
          {t("courses_description")}
        </p>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* 1️⃣ Что такое ВИЧ */}
          <div className="flex flex-col items-center bg-white p-6 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300">
            <img
              src={hivImg}
              alt="Что такое ВИЧ"
              className="w-full h-56 object-cover rounded-xl mb-4"
            />
            <h3 className="text-2xl font-semibold text-red-600 mb-2">
              {t("courses_item1")}
            </h3>
            <p className="text-gray-600 text-lg">
              {t("courses_item1_description")}
            </p>
          </div>

          {/* 2️⃣ Разница между ВИЧ и СПИД */}
          <div className="flex flex-col items-center bg-white p-6 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300">
            <img
              src={aidsImg}
              alt="Разница между ВИЧ и СПИД"
              className="w-full h-56 object-cover rounded-xl mb-4"
            />
            <h3 className="text-2xl font-semibold text-red-600 mb-2">
                {t("courses_item2")}
            </h3>
            <p className="text-gray-600 text-lg">
              {t("courses_item2_description")}
            </p>
          </div>

          {/* 3️⃣ Пути передачи и защита */}
          <div className="flex flex-col items-center bg-white p-6 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300">
            <img
              src={protectionImg}
              alt="Профилактика ВИЧ"
              className="w-full h-56 object-cover rounded-xl mb-4"
            />
            <h3 className="text-2xl font-semibold text-red-600 mb-2">
              {t("courses_item3")}
            </h3>
            <p className="text-gray-600 text-lg">
              {t("courses_item3_description")}
            </p>
          </div>
        </div>

        <div className="mt-14">
          <p className="text-lg text-gray-600 mb-6">
            {t("courses_sub_info")}
          </p>
          <a
            href="#вопросы"
            className="inline-block bg-red-600 text-white font-medium py-3 px-6 rounded-full hover:bg-red-700 transition duration-300 shadow-md"
          >
            {t("courses_button")}
          </a>

        </div>
      </div>
    </section>
  );
};

export default Goals;

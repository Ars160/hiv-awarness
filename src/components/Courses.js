import React from "react";
import hivImg from "../assets/images/1.jpg";
import aidsImg from "../assets/images/2.jpg";
import protectionImg from "../assets/images/3.jpg";

const Goals = () => {
  return (
    <section
      id="goals"
      className="py-20 bg-gradient-to-b from-red-50 to-white text-gray-800"
    >
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-5xl font-extrabold text-red-800 leading-tight max-md:text-4xl">
          Всё, что нужно знать о ВИЧ
        </h2>
        <p className="mt-4 text-lg text-red-600 max-md:text-base">
          На нашем сайте вы найдете простые и достоверные ответы на важные вопросы:
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
              Что такое ВИЧ?
            </h3>
            <p className="text-gray-600 text-lg">
              ВИЧ — это вирус, который поражает иммунную систему человека, делая организм
              уязвимым к инфекциям и болезням.
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
              ВИЧ и СПИД — в чём разница?
            </h3>
            <p className="text-gray-600 text-lg">
              ВИЧ — это вирус, а СПИД — это стадия, когда иммунитет сильно ослаблен.
              СПИД — не вирус, а состояние организма.
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
              Как передаётся ВИЧ и как защититься?
            </h3>
            <p className="text-gray-600 text-lg">
              ВИЧ передаётся через кровь, незащищённые половые контакты и от матери к ребёнку.
              Презервативы и тестирование — надёжная защита.
            </p>
          </div>
        </div>

        <div className="mt-14">
          <p className="text-lg text-gray-600 mb-6">
            На нашем сайте вы узнаете, как жить с ВИЧ и как предотвратить заражение.
          </p>
          <a
            href="#вопросы"
            className="inline-block bg-red-600 text-white font-medium py-3 px-6 rounded-full hover:bg-red-700 transition duration-300 shadow-md"
          >
            Узнать больше
          </a>

        </div>
      </div>
    </section>
  );
};

export default Goals;

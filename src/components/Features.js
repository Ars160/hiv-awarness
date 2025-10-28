import React, { useState } from "react";

const Features = () => {
  const titles = [
    {
      title: "Что такое ВИЧ?",
      text: "ВИЧ (Вирус иммунодефицита человека) — это вирус, который атакует иммунную систему человека, постепенно ослабляя защитные функции организма. ВИЧ поражает CD4-клетки, которые помогают организму бороться с инфекциями.",
    },
    {
      title: "Разница между ВИЧ и СПИД",
      text: "ВИЧ — это вирус, который может привести к СПИД. СПИД (Синдром приобретенного иммунодефицита) — это последняя стадия ВИЧ-инфекции, когда иммунная система серьезно повреждена и не может защищать организм от инфекций.",
    },
    {
      title: "Основные пути передачи ВИЧ",
      text: "ВИЧ передается через определенные жидкости организма: кровь, сперму, вагинальные выделения, грудное молоко. Основные пути передачи: незащищенный половой контакт, использование нестерильных игл, от матери к ребенку во время беременности, родов или кормления грудью.",
    },
    {
      title: "Можно ли вылечить ВИЧ сегодня?",
      text:
        "Полного излечения от ВИЧ на сегодняшний день не существует, однако современная антиретровирусная терапия (АРТ) позволяет полностью контролировать вирус. При регулярном приеме препаратов вирус подавляется до неопределяемого уровня, и человек с ВИЧ может жить долгой, полноценной и здоровой жизнью, не передавая вирус другим (принцип Н=Н — неопределяемый = непередающий).",
    },
    {
      title: "Новые достижения в лечении ВИЧ (Ленокапавир, CRISPR и др.)",
      text:
        "В последние годы появились инновационные подходы к лечению ВИЧ. Препарат Ленокапавир — это инъекционное средство длительного действия, которое вводится раз в полгода и эффективно подавляет вирус без ежедневных таблеток. Также ведутся активные исследования по использованию технологии CRISPR — метода редактирования генов, который может удалить ВИЧ из заражённых клеток. Хотя эти методы пока на стадии клинических испытаний, они открывают путь к потенциальному излечению в будущем.",
    },
    {
      title: "Важно: ВИЧ — это не приговор, а контролируемое хроническое заболевание",
      text:
        "Сегодня ВИЧ рассматривается не как смертельный диагноз, а как хроническое состояние, которое можно успешно контролировать. Благодаря современной терапии, регулярным обследованиям и здоровому образу жизни, люди с ВИЧ живут столько же, сколько и те, кто не имеет вируса. Главное — не прекращать лечение и соблюдать рекомендации врачей. ВИЧ — это не конец, а новая реальность, с которой можно жить полноценно.",
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
          Часто задаваемые вопросы — точные ответы
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

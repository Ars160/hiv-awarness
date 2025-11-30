import React from "react";
import { useTranslation } from "react-i18next";

const StatsBlock = () => {
  const { t } = useTranslation();

  const stats = [
    { value: "40,8 млн", label: t("stats_item1") },
    { value: "1,3 млн", label: t("stats_item2") },
    { value: t("stats_info"), label: t("stats_item3") },
    { value: "75%", label: t("stats_item4") },
  ];

  return (
    <section className="pt-16 pb-24 bg-gradient-to-b from-red-50 via-red-100 to-red-200" id="информация-о-вич">
      <div className="container mx-auto px-6 text-center">
        {/* Заголовок */}
        <h2 className="text-5xl font-extrabold text-red-800 leading-tight max-md:text-4xl">
          {t('stats_title')} <br />
          <span className="text-red-600">{t('stats_subtitle')}</span>
        </h2>
        <p className="mt-4 text-lg text-gray-700 max-md:text-base">
          {t('stats_description')}
        </p>

        {/* Статистика */}
        <div className="mt-14 bg-gradient-to-br from-red-400 via-red-500 to-red-600 rounded-3xl shadow-xl p-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* Карточка */}
            {stats.map((stat, index) => (
              <div
                key={index}
                className="p-6 flex flex-col items-center bg-white rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
              >
                <p
                  className="text-5xl font-bold mb-3 text-transparent bg-clip-text
                           bg-gradient-to-r from-red-500 to-red-700"
                >
                  {stat.value}
                </p>
                <p className="text-gray-600 text-lg md:text-xl tracking-wide">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsBlock;

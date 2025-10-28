import React from "react";

const StatsBlock = () => {
  return (
    <section className="pt-16 pb-24 bg-gradient-to-b from-red-50 via-red-100 to-red-200" id="информация-о-вич">
      <div className="container mx-auto px-6 text-center">
        {/* Заголовок */}
        <h2 className="text-5xl font-extrabold text-red-800 leading-tight max-md:text-4xl">
          Актуальные данные <br />
          <span className="text-red-600">о ВИЧ на 2024 год</span>
        </h2>
        <p className="mt-4 text-lg text-gray-700 max-md:text-base">
          Благодаря терапии более 75% инфицированных контролируют вирус и живут полноценной жизнью.
        </p>

        {/* Статистика */}
        <div className="mt-14 bg-gradient-to-br from-red-400 via-red-500 to-red-600 rounded-3xl shadow-xl p-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* Карточка */}
            {[
              { value: "40,8 млн", label: "человек в мире живут с ВИЧ" },
              { value: "1,3 млн", label: "новых случаев заражения ежегодно" },
              { value: "31 тыс.", label: "людей живут с ВИЧ в Казахстане" },
              { value: "75%", label: "инфицированных контролируют вирус" },
            ].map((stat, index) => (
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

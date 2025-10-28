import React from "react";
import banner from "../assets/images/banner.png"; // Временное изображение

const HeroSection = () => {
  return (
    <section className="relative pt-10 overflow-hidden text-gray-800">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-50 via-red-100 to-red-200"></div>

      <div className="relative z-10 container mx-auto px-6 sm:px-8 md:px-5 py-12 sm:py-16 grid grid-cols-1 md:grid-cols-2 items-center gap-10">
        {/* Text part on left for large screens */}
        <div className="space-y-6 text-center md:text-left order-2 md:order-1">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-red-800">
              Информация о ВИЧ
            </span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-red-700 font-semibold">
            Твоя безопасность — в твоих руках.
          </p>
          <p className="text-sm sm:text-base md:text-lg text-gray-700 max-w-xl leading-relaxed mx-auto md:mx-0">
            ВИЧ-инфекция остаётся одной из актуальных проблем современного общества. Каждый человек должен знать о путях передачи вируса и мерах профилактики, ведь информированность — это основа защиты. Регулярное тестирование помогает выявить заболевание на ранней стадии и начать лечение вовремя. Забота о своём здоровье — это забота о будущем.

          </p>
          <div className="flex justify-center md:justify-start mt-4">
            <a
              href="#контакты"
              className="inline-block bg-red-600 hover:bg-red-700 transition text-white font-semibold rounded-md py-3 px-8 text-base md:text-lg shadow-md hover:shadow-lg"
            >
              Узнать больше
            </a>
          </div>
        </div>

        {/* Image part on right for large screens */}
        <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto flex justify-center order-1 md:order-2">
          <div className="w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] md:w-[360px] md:h-[360px] lg:w-[400px] lg:h-[400px] rounded-full overflow-hidden bg-white shadow-2xl flex items-center justify-center relative">
            <img
              src={banner}
              alt="ВИЧ информация"
              className="w-full h-full object-cover"
            />
            {/* Decorative border around the image */}
            <div className="absolute inset-0 rounded-full border-4 border-red-300 animate-pulse" />
          </div>
        </div>
      </div>

      {/* Wave at the bottom for a smooth transition */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
        <svg
          className="relative block w-[calc(100%+1.3px)] h-[100px]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.36c59.73,0,117.43,17.69,177.16,21.07,46,2.62,90.09-6.19,134.82-6.19,86.7,0,172.08,16.17,258.78,6.55,56.38-6.47,108.07-22.44,162.87-29.65,30.28-3.85,59.67-2,89.07,3.45v68.4H0V95.78c30.28-11.92,69.71-26.23,97.87-24.7C172.54,73.54,247.76,56.36,321.39,56.36Z"
            fill="#ffffff"
          />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;

import React from "react";
import { FaMapMarkerAlt, FaPhone, FaGlobe } from "react-icons/fa";
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";

const TestingSection = () => {
  const testingCenters = [
    {
      id: 1,
      name: "Центр профилактики и борьбы со СПИД",
      address: "ул. Басенова 2, корпус 4, Алматы 050060, Казахстан",
      phone: "+7 (727) 246-53-36",
      website: "gcaids.kz",
      coordinates: [43.221214, 76.900675],
    },
    {
      id: 2,
      name: "КНЦ дерматологии и инфекционных заболеваний им. Махмалбаева",
      address: "пр. Райымбека, 60, Алматы",
      phone: "+7 (727) 397-42-23",
      website: "kncdiz.kz",
      coordinates: [43.270807, 76.956577],
    },
  ];

  const mapCenter = [43.238949, 76.929709]; // центр Алматы

  return (
    <section id="тестирование" className="py-20 bg-gradient-to-b from-red-50 to-white">
      <div className="container mx-auto px-6">
        {/* === Заголовок === */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-extrabold text-red-800 leading-tight mb-4 max-md:text-4xl">
            Всего один тест — и ты спокоен
          </h2>
          <p className="text-xl text-red-600 max-w-3xl mx-auto">
            Узнай свой ВИЧ-статус бесплатно и анонимно в Алматы
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* === Карта === */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <YMaps>
              <Map
                defaultState={{ center: mapCenter, zoom: 12 }}
                width="100%"
                height="400px"
              >
                {testingCenters.map((center) => (
                  <Placemark
                    key={center.id}
                    geometry={center.coordinates}
                    properties={{
                      balloonContentHeader: `<strong>${center.name}</strong>`,
                      balloonContentBody: `
                        <p>${center.address}</p>
                        <p>Телефон: ${center.phone}</p>
                        <p>Сайт: ${center.website}</p>
                      `,
                    }}
                    options={{
                      preset: "islands#redMedicalIcon",
                    }}
                  />
                ))}
              </Map>
            </YMaps>
          </div>

          {/* === Информация о центрах === */}
          <div className="space-y-6">
            {testingCenters.map((center) => (
              <div
                key={center.id}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <h3 className="text-2xl font-bold text-red-700 mb-3">{center.name}</h3>
                <div className="space-y-3 text-gray-600">
                  <div className="flex items-start">
                    <FaMapMarkerAlt className="text-red-500 mt-1 mr-3 flex-shrink-0" />
                    <p>{center.address}</p>
                  </div>
                  <div className="flex items-center">
                    <FaPhone className="text-red-500 mr-3 flex-shrink-0" />
                    <p>{center.phone}</p>
                  </div>
                  <div className="flex items-center">
                    <FaGlobe className="text-red-500 mr-3 flex-shrink-0" />
                    <a
                      href={`https://${center.website}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      {center.website}
                    </a>
                  </div>
                </div>
                <button
                  onClick={() => (window.location.href = `tel:${center.phone}`)}
                  className="mt-4 bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-lg flex items-center transition-colors duration-300"
                >
                  <span className="mr-2">Позвонить</span>
                  <FaPhone />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestingSection;

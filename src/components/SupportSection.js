import React, { useState } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaHandHoldingHeart, FaUsers, FaComments } from 'react-icons/fa';

const SupportSection = () => {
  const [activeTab, setActiveTab] = useState('psychological');

  const supportServices = {
    psychological: [
      {
        id: 1,
        title: 'Индивидуальные консультации',
        description: 'Конфиденциальные встречи с профессиональными психологами, специализирующимися на поддержке людей с ВИЧ.',
        icon: <FaComments className="text-4xl text-red-500 mb-4" />,
        contact: '+7 (777) 910-91-88',
      },
      {
        id: 2,
        title: 'Группы поддержки',
        description: 'Еженедельные встречи в безопасной среде для обмена опытом и взаимной поддержки.',
        icon: <FaUsers className="text-4xl text-red-500 mb-4" />,
        schedule: 'Каждый вторник и четверг, 18:00-20:00',
      },
      {
        id: 3,
        title: 'Онлайн-консультации',
        description: 'Удобная возможность получить психологическую помощь дистанционно через видеосвязь.',
        icon: <FaEnvelope className="text-4xl text-red-500 mb-4" />,
        email: 'support@hivhelp.kz',
      },
    ],
    social: [
      {
        id: 1,
        title: 'Юридическая поддержка',
        description: 'Консультации по правовым вопросам, связанным с защитой прав людей, живущих с ВИЧ.',
        icon: <FaHandHoldingHeart className="text-4xl text-blue-500 mb-4" />,
        contact: '+7 775 981 1803',
      },
      {
        id: 2,
        title: 'Центр социальной адаптации',
        description: 'Помощь в трудоустройстве, обучении и социальной интеграции.',
        icon: <FaMapMarkerAlt className="text-4xl text-blue-500 mb-4" />,
        address: '​Улица Олеко Дундича, 2а',
      },
      {
        id: 3,
        title: 'Горячая линия поддержки',
        description: 'Круглосуточная телефонная линия для экстренной психологической и информационной поддержки.',
        icon: <FaPhone className="text-4xl text-blue-500 mb-4" />,
        hotline: '8-800-080-8080 (бесплатно по Казахстану)',
      },
    ],
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-2">Психологическая и социальная поддержка</h2>
        <p className="text-xl text-gray-600 text-center mb-12">
          Мы предлагаем комплексную поддержку для людей, живущих с ВИЧ, и их близких
        </p>

        {/* Tabs */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex rounded-md shadow-sm" role="group">
            <button
              type="button"
              className={`px-6 py-3 text-lg font-medium rounded-l-lg ${
                activeTab === 'psychological'
                  ? 'bg-red-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
              onClick={() => setActiveTab('psychological')}
            >
              Психологическая поддержка
            </button>
            <button
              type="button"
              className={`px-6 py-3 text-lg font-medium rounded-r-lg ${
                activeTab === 'social'
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
              onClick={() => setActiveTab('social')}
            >
              Социальная поддержка
            </button>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {supportServices[activeTab].map((service) => (
            <div
              key={service.id}
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex flex-col items-center">
                {service.icon}
                <h3 className="text-2xl font-semibold mb-4 text-center">{service.title}</h3>
                <p className="text-gray-600 mb-6 text-center">{service.description}</p>
                
                {service.contact && (
                  <p className="text-gray-800 font-medium">
                    <span className="font-bold">Телефон:</span> {service.contact}
                  </p>
                )}
                
                {service.email && (
                  <p className="text-gray-800 font-medium">
                    <span className="font-bold">Email:</span> {service.email}
                  </p>
                )}
                
                {service.address && (
                  <p className="text-gray-800 font-medium">
                    <span className="font-bold">Адрес:</span> {service.address}
                  </p>
                )}
                
                {service.schedule && (
                  <p className="text-gray-800 font-medium">
                    <span className="font-bold">Расписание:</span> {service.schedule}
                  </p>
                )}
                
                {service.hotline && (
                  <p className="text-gray-800 font-medium">
                    <span className="font-bold">Горячая линия:</span> {service.hotline}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SupportSection;
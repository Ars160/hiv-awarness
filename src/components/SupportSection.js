import React, { useState } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaUsers, FaComments } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const SupportSection = () => {
  const [activeTab, setActiveTab] = useState('psychological');

    const { t } = useTranslation();


  const supportServices = {
    psychological: [
      {
        id: 1,
        title: t("support_psychological_title1"),
        description: t("support_psychological_description1"),
        icon: <FaComments className="text-4xl text-red-500 mb-4" />,
        schedule: t("support_psychological_schedule1"),
        contact: '+7 (777) 910-91-88',
      },
      {
        id: 2,
        title: t("support_psychological_title2"),
        description: t("support_psychological_description2"),
        icon: <FaUsers className="text-4xl text-red-500 mb-4" />,
        schedule: t("support_psychological_schedule"),
      },
      {
        id: 3,
        title: t("support_psychological_title3"),
        description: t("support_psychological_description3"),
        icon: <FaEnvelope className="text-4xl text-red-500 mb-4" />,
        email: 'center@gcaids.kz',
      },
    ],
    social: [
      {
        id: 1,
        title: t("support_social_title2"),
        description: t("support_social_description2"),
        icon: <FaMapMarkerAlt className="text-4xl text-blue-500 mb-4" />,
        address: t("support_social_address"),
      },
      {
        id: 2,
        title: t("support_social_title3"),
        description: t("support_social_description3"),
        icon: <FaPhone className="text-4xl text-blue-500 mb-4" />,
        hotline: t("support_social_hotline") ,
      },
    ],
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-2">{t("support_section_title")}</h2>
        <p className="text-xl text-gray-600 text-center mb-12">
          {t("support_section_subtitle")}
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
              {t("support_tab_psychological")}
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
              {t("support_tab_social")}
            </button>
          </div>
        </div>

        {/* Services Grid */}
        <div className={`grid grid-cols-1 gap-8 ${
          activeTab === 'social' 
            ? 'md:grid-cols-2 max-w-4xl mx-auto' 
            : 'md:grid-cols-2 lg:grid-cols-3'
        }`}>
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
                    <span className="font-bold">{t("support_psychological_type1")}</span> {service.schedule}
                  </p>
                )}
                
                {service.hotline && (
                  <p className="text-gray-800 font-medium">
                    <span className="font-bold">{t("support_social_type1")}</span> {service.hotline}
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
import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    age: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Формирование сообщения для WhatsApp
    const message = `Ваше имя: ${formData.name}\nТелефон: ${formData.phone}\nВозраст: ${formData.age}`;

    // WhatsApp ссылка с заполненным сообщением
    const whatsappUrl = `https://wa.me/77072446302?text=${encodeURIComponent(
      message
    )}`;

    // Перенаправляем пользователя на WhatsApp
    window.open(whatsappUrl, "_blank");

    // Очищаем форму после отправки
    setFormData({ name: "", phone: "", age: "" });
  };

  return (
    <section className="relative bg-gradient-to-b from-red-50 to-white py-16 md:py-20 overflow-hidden" id="контакты">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="mb-10 md:mb-16">
            <h2 className="text-5xl font-extrabold text-red-800 leading-tight max-md:text-4xl">
              {t("contact_form_title")}
            </h2>
            <p className="mt-4 text-lg text-red-600 max-md:text-base">
              {t("contact_form_subtitle")}
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-2xl p-6 md:p-8 text-gray-800">
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="md:col-span-1">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    {t("contact_form_name")}
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-gray-50 border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500 transition"
                    placeholder={t("contact_form_name")}
                    required
                  />
                </div>

                <div className="md:col-span-1">
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    {t("contact_form_phone")}
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-gray-50 border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500 transition"
                    placeholder="+7 (999) 999-99-99"
                    required
                  />
                </div>

                <div className="md:col-span-2">
                  <label
                    htmlFor="age"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    {t("contact_form_age")}
                  </label>
                  <input
                    type="number"
                    id="age"
                    value={formData.age}
                    onChange={handleChange}
                    className="w-full bg-gray-50 border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500 transition"
                    placeholder={t("contact_form_age")}
                    required
                  />
                </div>
              </div>

              <div className="mt-6 md:mt-8 flex justify-end">
                <button
                  type="submit"
                  className="w-full md:w-auto bg-red-600 hover:bg-red-700 text-white font-medium py-3 px-8 rounded-lg transition duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-600"
                >
                  {t("contact_form_submit")}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

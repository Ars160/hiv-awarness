import React from "react";
import { useTranslation } from "react-i18next";
import {
  FaInstagram,
  FaWhatsapp,
  FaTelegram,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-red-800 to-red-900 text-white py-10">
      <div className="container mx-auto px-4">
        {/* Top section with logo and info */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <div className="text-3xl font-semibold mb-3">
              HIV Infection
            </div>
            <span className="text-sm mb-2">orynbasovaeldana@mail.ru</span>
            <p className="text-sm mb-2">nurkhaim.amina@mail.ru</p>
            <p className="text-sm mb-2">+7 775 981 18 03</p>
            <p className="text-sm mb-2">+7 707 244 63 02</p>
            <p className="text-sm mb-2">{t("footer_address")}</p>
          </div>

          {/* Social Media and Links */}
          <div className="flex flex-col md:items-center space-y-4 items-center">
            <div className="flex space-x-6 mb-4">
              <a
                href="https://www.instagram.com/stop.hiv.kz?igsh=MWdudnk1MTduczA0OQ%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-red-300 transition transform hover:scale-110"
                aria-label="Instagram"
              >
                <FaInstagram size={30} />
              </a>
              <a
                href="https://wa.me/77072446302"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-red-300 transition transform hover:scale-110"
                aria-label="WhatsApp"
              >
                <FaWhatsapp size={30} />
              </a>
              <a
                href="https://t.me/almaskyzy_y"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-red-300 transition transform hover:scale-110"
                aria-label="Telegram"
              >
                <FaTelegram size={30} />
              </a>
              <a
                href="https://go.2gis.com/SVr5o"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-red-300 transition transform hover:scale-110"
                aria-label="2GIS"
              >
                <FaMapMarkerAlt size={30} />
              </a>
            </div>
            <div className="space-y-2">
              <a
                href="/privacy"
                className="block text-sm hover:text-red-300 transition"
              >
                {t("footer_our_networks")}
              </a>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="border-t border-red-700 pt-4 mt-6">
          <p className="text-center text-sm">
            {t("footer_copyright", { year })}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

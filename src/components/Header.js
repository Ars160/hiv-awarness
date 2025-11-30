import React, { useState, useEffect, useCallback } from "react";
import clsx from "clsx";
import { useTranslation } from "react-i18next";

function Header() {
  const { t, i18n } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 10);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const handleNavClick = (sectionId) => {
    if (isMobileMenuOpen) setIsMobileMenuOpen(false);

    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const navItems = [
    { name: t("nav_actual_data"), id: "stats" },
    { name: t("nav_videos"), id: "video-section" },
    { name: t("nav_testing"), id: "testing-section" },
    { name: t("nav_articles"), id: "news-section" },
    { name: t("nav_team"), id: "team-section" },
    { name: t("nav_faq"), id: "вопросы" },
  ];

  return (
    <header
      className={clsx(
        "fixed w-full z-50 transition-all duration-300 backdrop-blur-md",
        isScrolled
          ? "py-3 bg-white/95 shadow-sm"
          : "py-4 bg-gradient-to-r from-red-600 to-red-700"
      )}
    >
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <a
          href="/"
          className={clsx(
            "text-xl md:text-2xl font-bold transition-colors flex-shrink-0",
            isScrolled ? "text-red-600" : "text-white"
          )}
        >
          HIV<span className="ml-1">Infection</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => handleNavClick(item.id)}
              className={clsx(
                "font-medium transition-colors focus:outline-none whitespace-nowrap text-sm xl:text-base",
                isScrolled
                  ? "text-gray-700 hover:text-red-500"
                  : "text-red-100 hover:text-white"
              )}
            >
              {item.name}
            </button>
          ))}
        </nav>
        
        {/* Desktop Language & Contact */}
        <div className="hidden lg:flex items-center space-x-4">
          {/* Language Switcher */}
          <div className={clsx(
            "flex items-center rounded-full p-1 transition-colors",
            isScrolled ? "bg-gray-100" : "bg-white/20"
          )}>
            <button
              onClick={() => changeLanguage("kz")}
              className={clsx(
                "font-medium px-3 py-1.5 rounded-full transition-all text-sm",
                i18n.language === 'kz' 
                  ? "bg-red-500 text-white shadow-sm" 
                  : isScrolled 
                    ? "text-gray-600 hover:text-red-500" 
                    : "text-white hover:bg-white/10"
              )}
            >
              ҚАЗ
            </button>
            <button
              onClick={() => changeLanguage("ru")}
              className={clsx(
                "font-medium px-3 py-1.5 rounded-full transition-all text-sm",
                i18n.language === 'ru' 
                  ? "bg-red-500 text-white shadow-sm" 
                  : isScrolled 
                    ? "text-gray-600 hover:text-red-500" 
                    : "text-white hover:bg-white/10"
              )}
            >
              РУС
            </button>
          </div>

          {/* Contact Button */}
          <button
            onClick={() => handleNavClick("контакты")}
            className={clsx(
              "font-medium px-5 py-2.5 rounded-full transition-all text-sm whitespace-nowrap shadow-sm",
              isScrolled
                ? "bg-red-500 hover:bg-red-600 text-white hover:shadow-md"
                : "bg-white hover:bg-red-50 text-red-700"
            )}
          >
            {t("nav_contact_center")}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className={clsx(
            "lg:hidden p-2 rounded-md focus:outline-none transition-colors",
            isScrolled
              ? "text-red-600 focus:ring-2 focus:ring-red-300"
              : "text-white focus:ring-2 focus:ring-white/50"
          )}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isMobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div
          className={clsx(
            "lg:hidden absolute top-full left-0 w-full shadow-lg border-t",
            isScrolled
              ? "bg-white border-gray-100"
              : "bg-red-600 border-red-400"
          )}
        >
          <div className="container mx-auto px-4 py-4 space-y-2">
            {/* Navigation Items */}
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.id)}
                className={clsx(
                  "w-full text-left px-4 py-3 rounded-lg transition focus:outline-none",
                  isScrolled
                    ? "text-gray-700 hover:bg-red-50 hover:text-red-600"
                    : "text-red-100 hover:bg-red-500 hover:text-white"
                )}
              >
                {item.name}
              </button>
            ))}
            
            {/* Divider */}
            <div className={clsx(
              "my-3 border-t",
              isScrolled ? "border-gray-200" : "border-red-400"
            )} />
            
            {/* Language Switcher Mobile */}
            <div className="px-4 py-2">
              <div className="text-xs font-medium mb-2 opacity-70">
                {isScrolled ? (
                  <span className="text-gray-600">Язык / Тіл</span>
                ) : (
                  <span className="text-red-100">Язык / Тіл</span>
                )}
              </div>
              <div className={clsx(
                "flex gap-2 p-1 rounded-lg inline-flex",
                isScrolled ? "bg-gray-100" : "bg-red-500/30"
              )}>
                <button
                  onClick={() => changeLanguage("kz")}
                  className={clsx(
                    "font-medium px-4 py-2 rounded-md transition-all flex-1",
                    i18n.language === 'kz' 
                      ? "bg-red-500 text-white shadow-sm" 
                      : isScrolled
                        ? "text-gray-600 hover:bg-red-50"
                        : "text-red-100 hover:bg-red-500/50"
                  )}
                >
                  Қазақша
                </button>
                <button
                  onClick={() => changeLanguage("ru")}
                  className={clsx(
                    "font-medium px-4 py-2 rounded-md transition-all flex-1",
                    i18n.language === 'ru' 
                      ? "bg-red-500 text-white shadow-sm" 
                      : isScrolled
                        ? "text-gray-600 hover:bg-red-50"
                        : "text-red-100 hover:bg-red-500/50"
                  )}
                >
                  Русский
                </button>
              </div>
            </div>

            {/* Contact Button Mobile */}
            <div className="px-4 pt-2 pb-1">
              <button
                onClick={() => handleNavClick("контакты")}
                className="w-full font-medium px-6 py-3 rounded-full transition-all bg-red-500 hover:bg-red-600 text-white shadow-sm"
              >
                {t("nav_contact_center")}
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
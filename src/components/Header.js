import React, { useState, useEffect, useCallback } from "react";
import clsx from "clsx";

function Header() {
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

  const navItems = [
    { name: "Актуальные данные", id: "stats" },
    { name: "Видеоролики", id: "video-section" },
    { name: "Тестирование", id: "testing-section" },
    { name: "Статьи и новости", id: "news-section" },
    { name: "Наша Команда", id: "team-section" },
    { name: "FAQ", id: "вопросы" },
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
      <div className="relative container mx-auto px-4 sm:px-12 md:px-2 lg:px-4 xl:px-5 flex items-center justify-between">
        <a
          href="/"
          className={clsx(
            "text-xl md:text-2xl font-bold transition-colors",
            isScrolled ? "text-red-600" : "text-white"
          )}
        >
          HIV<span className="ml-1">Infection</span>
        </a>

        <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => handleNavClick(item.id)}
              className={clsx(
                "font-medium transition-colors focus:outline-none",
                isScrolled
                  ? "text-gray-700 hover:text-red-500"
                  : "text-red-100 hover:text-white"
              )}
            >
              {item.name}
            </button>
          ))}
        </nav>

        <button
          onClick={() => handleNavClick("контакты")}
          className={clsx(
            "hidden md:block font-medium px-6 py-3 rounded-full transition-all",
            isScrolled
              ? "bg-red-500 hover:bg-red-600 text-white"
              : "bg-white hover:bg-red-100 text-red-700"
          )}
        >
          Обращаться в центр
        </button>

        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className={clsx(
            "md:hidden p-2 rounded-md focus:outline-none transition-colors",
            isScrolled
              ? "text-pink-600 focus:ring-2 focus:ring-pink-300"
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

      {/* Мобильное меню */}
      {isMobileMenuOpen && (
        <div
          className={clsx(
            "md:hidden absolute top-full left-0 w-full shadow-lg border-t flex flex-col items-center",
            isScrolled
              ? "bg-white border-gray-100"
              : "bg-red-600 border-red-400"
          )}
        >
          <div className="container mx-auto px-4 py-4 space-y-3 w-full text-center">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.id)}
                className={clsx(
                  "block px-4 py-2 rounded-lg transition focus:outline-none",
                  isScrolled
                    ? "text-gray-700 hover:bg-red-50 hover:text-red-600"
                    : "text-red-100 hover:bg-red-500 hover:text-white"
                )}
              >
                {item.name}
              </button>
            ))}
            <div className="px-4 pt-2 pb-1">
              <button
                onClick={() => handleNavClick("контакты")}
                className="block w-full font-medium px-6 py-3 rounded-full transition-all bg-red-500 hover:bg-red-600 text-white"
              >
                Обращаться в центр
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;

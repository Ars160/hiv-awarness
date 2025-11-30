import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { FaPlay } from "react-icons/fa";

// (Опционально) постеры/миниатюры для карточек (положи в src/assets/images/)
import posterIntro from "../assets/images/modern.jpg";
import posterStory from "../assets/images/1.jpg";
import posterDoctor from "../assets/images/2.jpg";
import posterTreatment from "../assets/images/withHiv.jpg";

const VideoSection = () => {
  const { t } = useTranslation();

  const videos = [
    {
      id: 1,
      title: t("video_1_title"),
      description: t("video_1_description"),
      thumbnail: posterDoctor,
      src: "https://www.youtube.com/embed/sUYyrSVUj9Y",
    },
    {
      id: 2,
      title: t("video_2_title"),
      description: t("video_2_description"),
      thumbnail: posterStory,
      src: "https://youtu.be/cWoRnBevpAI",
    },
    {
      id: 3,
      title: t("video_3_title"),
      description: t("video_3_description"),
      thumbnail: posterIntro,
      src: "https://youtube.com/shorts/S0bThzdgJmk?feature=share",
    },
    {
      id: 4,
      title: t("video_4_title"),
      description: t("video_4_description"),
      thumbnail: posterTreatment,
      src: "https://youtube.com/shorts/JYV_5j1BVMo?feature=share",
    },
  ];

  const [activeVideo, setActiveVideo] = useState(null);

  // Закрывать модалку по ESC
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") closeVideo();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Блокировать скролл страницы при открытом видео
  useEffect(() => {
    document.body.style.overflow = activeVideo ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [activeVideo]);

  const openVideo = (video) => {
    setActiveVideo(video);
  };

  const closeVideo = () => {
    setActiveVideo(null);
  };

  // Клик по оверле — закрыть, клик по контенту — остановить всплытие
  const onOverlayClick = (e) => {
    if (e.target === e.currentTarget) closeVideo();
  };

  // Универсальный парсер ссылок YouTube
  const getEmbedUrl = (url) => {
    try {
      if (!url) return "";

      // Если это короткая ссылка вида https://youtu.be/abc123
      if (url.includes("youtu.be/")) {
        const id = url.split("youtu.be/")[1].split("?")[0];
        return `https://www.youtube.com/embed/${id}`;
      }

      // Если это shorts
      if (url.includes("shorts/")) {
        const id = url.split("shorts/")[1].split("?")[0];
        return `https://www.youtube.com/embed/${id}`;
      }

      // Если это обычная ссылка вида watch?v=...
      if (url.includes("watch?v=")) {
        const id = url.split("watch?v=")[1].split("&")[0];
        return `https://www.youtube.com/embed/${id}`;
      }

      // Если уже embed — вернуть как есть
      if (url.includes("embed/")) {
        return url;
      }

      // fallback
      return url;
    } catch {
      return "";
    }
  };


  return (
    <section id="videos" className="py-20 bg-gradient-to-b from-white to-red-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-red-800 mb-3">
            {t('video_section_title')}
          </h2>
          <p className="text-lg text-red-600 max-w-3xl mx-auto">
            {t('video_section_subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {videos.map((video) => (
            <article
              key={video.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="relative">
                {/* карточка-миниатюра */}
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-64 object-cover"
                />
                <button
                  onClick={() => openVideo(video)}
                  aria-label={t('video_modal_open_aria', { title: video.title })}
                  className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 hover:bg-opacity-50 transition-all duration-300"
                >
                  <div className="w-16 h-16 rounded-full bg-red-600 flex items-center justify-center">
                    <FaPlay className="text-white text-xl ml-1" />
                  </div>
                </button>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-red-700 mb-2">
                  {video.title}
                </h3>
                <p className="text-gray-600">{video.description}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-10">
          <p className="text-xl font-semibold text-red-700 mb-4">
            {t('video_section_footer_title')}
          </p>

          <div className="flex justify-center gap-4">
            <button onClick={() => window.open("https://wa.me/77072446302", "_blank")} className="bg-red-600 hover:bg-red-700 text-white py-3 px-6 rounded-lg font-medium transition-colors duration-300">
              {t('video_section_whatsapp_button')}
            </button>
            <button onClick={() => window.open("https://t.me/almaskyzy_y", "_blank")} className="bg-red-600 hover:bg-red-700 text-white py-3 px-6 rounded-lg font-medium transition-colors duration-300">
              {t('video_section_telegram_button')}
            </button>
          </div>
        </div>
      </div>

      {/* Модальное окно с локальным видео */}
      {activeVideo && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4"
          onClick={onOverlayClick}
        >
          <div
            className="bg-white rounded-lg w-full max-w-4xl overflow-hidden"
            role="dialog"
            aria-modal="true"
            aria-label={activeVideo.title}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Контейнер видео: сохраним соотношение 16:9 */}
            <div className="relative pt-[56.25%] bg-black">
              <iframe
                className="absolute inset-0 w-full h-full"
                src={getEmbedUrl(activeVideo.src)}
                title={activeVideo.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>


            <div className="p-4 flex justify-between items-center">
              <h3 className="text-lg font-semibold text-red-700">
                {activeVideo.title}
              </h3>
              <button
                onClick={closeVideo}
                className="bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded"
              >
                {t('video_modal_close_button')}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default VideoSection;

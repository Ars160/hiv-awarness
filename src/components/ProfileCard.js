import React from "react";
import lll from "../assets/images/lll.jpeg"; // Путь к первому изображению
import ll from "../assets/images/ll.jpeg"; // Путь к первому изображению
import l from "../assets/images/l.jpeg"; // Путь ко второму изображению

const ProfileCard = ({ name, title, instagramLink, imageUrl, altText }) => {
  return (
    <div className="text-center max-w-xs p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105">
      <img
        src={imageUrl}
        alt={altText}
        className="w-72 h-72 object-cover rounded-full mx-auto mb-6 border-4 border-red-500"
      />
      <div>
        <h3 className="text-2xl font-semibold text-red-800 mb-2">{name}</h3>
        <p className="text-lg text-red-600 mb-6">{title}</p>
        {name !== "Гульнара Саябековна Нугуманова" && (
           <a
          href={instagramLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-red-600 hover:underline text-lg"
        >
          Instagram
        </a>
        )}
       
      </div>
    </div>
  );
};

const Profiles = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-red-50 to-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-5xl font-extrabold text-red-800 leading-tight max-md:text-4xl">
          Наша команда
        </h2>
        <p className="mt-4 text-lg text-red-600 max-md:text-base">
          Студенты которые работают над этим проектом
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center md:space-x-12 mt-16 md:space-y-0 space-y-12">
          <ProfileCard
            name="Гульнара Саябековна Нугуманова"
            title="Инфекционист, асс.профессора кафедры эпидемиологии с курсом ВИЧ-инфекции и инфекционного контроля."
            imageUrl={lll}
            altText="Орынбас Елдана Алмасқызы"
          />
          <ProfileCard
            name="Орынбас Елдана Алмасқызы"
            title="Лучший студент СНГ 2025, ассистент врача"
            instagramLink=" https://www.instagram.com/almaskyzy_y_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            imageUrl={l}
            altText="Орынбас Елдана Алмасқызы"
          />
          <ProfileCard
            name="Нұрхаим Амина Сәрсенбекқызы"
            title="Лучший студент СНГ 2024, ассистент врача"
            instagramLink=" https://www.instagram.com/n_amina_s?igsh=MWE0Y2lwNGd5cjdjMQ=="
            imageUrl={ll}
            altText="Нұрхаим Амина Сәрсенбекқызы"
          />
        </div>
      </div>
    </section>
  );
};

export default Profiles;

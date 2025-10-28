import React from 'react';

const FeatureCard = ({ backgroundImage = "", title, description, img }) => {
  const isGradient = backgroundImage.startsWith('bg-gradient');

  const style = isGradient
    ? {
        backgroundImage: 'linear-gradient(to bottom right, #04016C, #2C0F9B, #4A16BD)',
      }
    : {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      };

  return (
    <div className="relative flex flex-col justify-center rounded-2xl overflow-hidden min-h-[250px]">
      <div className="absolute inset-0" style={style} />

      <div className="relative z-10 p-6 md:p-8 text-white flex gap-4 md:gap-6 items-center">
        <div className="w-1/2 md:w-2/3">
          {title && (
            <h3 className="text-xl md:text-2xl font-semibold mb-2 md:mb-4">
              {title}
            </h3>
          )}
          {description && (
            <p className="text-sm md:text-base leading-relaxed">
              {description}
            </p>
          )}
        </div>

        <div className="w-1/2 md:w-1/3">
          <img
            src={img}
            alt={title || 'Feature illustration'}
            className="object-contain w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;

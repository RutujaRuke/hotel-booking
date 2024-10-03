import React from 'react';

const Banner = () => {
  return (
    <div className="relative">
      {/* Banner image */}
      <img
        src="/public/banner1.avif"
        alt="Banner"
        className="w-full h-[250px] object-cover md:h-[350px] sm:h-[300px]" // Responsive height for mobile
      />

      {/* Overlay text */}
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center text-white">
        <h1 className="text-3xl md:text-5xl font-bold">Discover Your Perfect Stay</h1>
        <p className="mt-4 text-lg md:text-xl">
          Find the best hotels in your desired destination.
        </p>
        
      </div>
    </div>
  );
};

export default Banner;
